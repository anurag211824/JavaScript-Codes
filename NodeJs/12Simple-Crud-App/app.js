const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());

const uri = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

let itemsCollection;

// Function to start the server
const startServer = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('Simple-CRUD-APP'); // Replace with your database name
    itemsCollection = db.collection('Items-List'); // Replace with your collection name

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

startServer();


// Create a new item
app.post('/items', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }
  try {
    const result = await itemsCollection.insertOne({ name });
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Read all items
app.get('/items', async (req, res) => {
  try {
    const items = await itemsCollection.find().toArray();
    res.json(items);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Read a single item by id
app.get('/items/:id', async (req, res) => {
  try {
    const item = await itemsCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.json(item);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Update an item by id
app.put('/items/:id', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('Name is required');
  }
  try {
    const result = await itemsCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { name } },
      { returnOriginal: false }
    );
    if (!result.value) {
      return res.status(404).send('Item not found');
    }
    res.json(result.value);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Partially update an item by id
app.patch('/items/:id', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await itemsCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: name ? { name } : {} },
      { returnOriginal: false }
    );
    if (!result.value) {
      return res.status(404).send('Item not found');
    }
    res.json(result.value);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Delete an item by id
app.delete('/items/:id', async (req, res) => {
  try {
    const result = await itemsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).send('Item not found');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
