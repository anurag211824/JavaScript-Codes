const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.json()); // For parsing application/json

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("hello from middleware 1");
  req.myUsername="anurag_kumar"
  next();
});

app.use((req, res, next) => {
    console.log("hello from middleware 2",req.myUsername);
  });
  




// Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

//GET: Get the users data with a particular id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// POST: Create a new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body", body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucess" });
  });
});

// PUT: Update an entire user record
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// PATCH route to update user details
app.patch("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updateData = req.body;
  let userFound = false;
  let updatedUser = null;

  users = users.map((user) => {
    if (user.id === userId) {
      userFound = true;
      updatedUser = { ...user, ...updateData };
      return updatedUser;
    }
    return user;
  });

  if (userFound) {
    writeToFile(users);
    res.status(200).json({
      message: "User updated successfully",
      updatedUser: updatedUser,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE: Remove a user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
