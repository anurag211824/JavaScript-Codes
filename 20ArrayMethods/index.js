// .................................... Creation & Basics ...................................

// ✅ Array.of() ------> Creates an array from arguments, no matter the type or count
const a1 = Array.of(1, 2, 3);
const a2 = Array.of(1, 2, "anurag", null);
const a3 = Array.of([1, 23], [45, 878]);

// ✅ Array.from() -----> Creates arrays from iterable or array-like objects
const b1 = Array.from("Hello")[("h", "e", "l", "l", "o")];

// ✅ Array()
// Constructor without new, behaves the same
// 1. Empty array
const c1 = Array(); // []

// 2. With a single number = creates empty slots
const c2 = Array(3); // [ <3 empty items> ]

// 3. Multiple elements
const c3 = Array(1, 2, 3); // [1, 2, 3]

// 4. Mixing types
const c4 = Array("a", 1, null); // ["a", 1, null]

// 5. Dynamic values
const size = 4;
const c5 = Array(size).fill("x"); // ['x', 'x', 'x', 'x']

// .................................... Creation & Basics ...................................

// ....................................  Searching & Checking...................................
//......................................................................
// 🔍 1. includes()
//✅ Checks if an array contains a specific value. Returns true or false.v
// 1. ✅ User Role Check
// You have a logged-in user's role:
// 👉 Check if userRole has permission to access a restricted route.
let fruits = ["banana", "mango", "apple"];
const isFruitPresent = (fruit, fruits) => {
  return fruits.includes(fruit);
};
if (isFruitPresent("mango", fruits)) {
  console.log(`mango is present`);
} else {
  console.log("mango is not prsent");
}
//......................................................................
//......................................................................
const userRole = "editor";
const allowedRoles = ["admin", "editor", "moderator"];
if (allowedRoles.includes(userRole)) {
  console.log(userRole, "is allowed");
} else {
  console.log(userRole, "is not allowed");
}
//......................................................................
//......................................................................
// 2. 🔑 Restricted Keywords in Post Titles
// Before saving a post, make sure the title doesn’t contain banned words:
// 👉 Write a function that returns true if the title contains any banned word (case insensitive).
const title = "How to Hack a Website";
const words = title.split(" ");
const bannedWords = ["hack", "illegal", "exploit"];
function savePost(words, bannedWords) {
  for (let i = 0; i < words.length; i++) {
    if (bannedWords.includes(words[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}
if (savePost(words, bannedWords)) {
  console.log("no");
} else {
  console.log("yes");
}
//......................................................................
//......................................................................
// 3. 🛒 Check if Product Already in Cart
const cartItems = ["watch", "phone", "tablet"];
const newItem = "phone";
// 👉 Don’t add the item if it’s already in the cart.

const addToCart = (product) => {
  if (cartItems.includes(product)) {
    console.log(product, "is alredy in cart");
    return;
  } else {
    cartItems.push(product);
    console.log("cart Updated", cartItems);
    return;
  }
};
addToCart("laptop");
//......................................................................
//......................................................................
// 4. ✉️ Validate Email Domain
const email = "user@example.com";
const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
// 👉 Check if the user’s email is from an allowed domain.
const domain = email.split("@");
console.log(domain[1]);

if (allowedDomains.includes(domain[1])) {
  console.log("✅ Login successful");
} else {
  console.log(domain[1], "is not allowed");
}
//......................................................................
//......................................................................
// 5. 🎵 User's Favorite Genres
const userPreferences = ["Rock", "Jazz", "Pop"];
const playingSong = { title: "Smooth Jazz", genre: "Jazz" };
// 👉 Check if the song matches user’s preferred genres.
const matchPlayingSong = (playingSong) => {
  if (userPreferences.includes(playingSong.genre)) {
    console.log("matched");
    return;
  } else {
    console.log("not matched");
  }
};
matchPlayingSong(playingSong);
// //......................................................................
// 🔢 2. indexOf()
// 🔍 Returns the first index of a value, or -1 if not found.
const a = ["a", "b", "a", "c"].indexOf("a");
console.log(a);

// 3 . Return index of first even number in [1, 3, 7, 8, 10] using indexOf().
const number = [0, 3, 7, 8, 10];
const firstIndexOfEvenEle = (number) => {
  let index = -1;
  number.forEach((num, id) => {
    if (num % 2 === 0 && index === -1) {
      index = id;
    }
  });
  return index;
};
console.log(firstIndexOfEvenEle(number));

// 4. Hard: Create a function that returns the index of a duplicate element if present.
const arr = [13, 7, 21, 4, 19, 8, 21, 5, 10];
const findDuplicateIndex = (arr) => {
  let map = [];
  for (let i = 0; i < arr.length; i++) {
    let eleCount = map.find((obj) => obj.ele === arr[i]);
    if (eleCount) {
      eleCount.count += 1;
    } else {
      map.push({ ele: arr[i], count: 1 });
    }
  }
  console.log(map);

  let duplicateIndex = -1;
  for (let i = 0; i < map.length; i++) {
    if (map[i].count >= 2) {
      duplicateIndex = i;
      break;
    }
  }
  return duplicateIndex;
};
console.log(findDuplicateIndex(arr));
// 5. Hard: Use lastIndexOf() to remove last occurrence of a duplicate element.
const brr = [42, 17, 8, 23, 17, 56, 91, 17, 33];
const lastIndex = brr.lastIndexOf(17);
console.log(lastIndex);

if (lastIndex !== -1) {
  brr.splice(lastIndex, 1);
}
console.log(brr);

// ....................................  Searching & Checking...................................
