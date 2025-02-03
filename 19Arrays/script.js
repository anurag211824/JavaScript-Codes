const fruitsCollections = [
  "Apple",
  "Orange",
  " pepper",
  " lichi",
  23,
  null,
  undefined,
  true,
  {
    name: "Mango",
    price: 20
  }
];
console.log(fruitsCollections[3]);
fruitsCollections[4] = "gauva";

console.log(fruitsCollections);
fruitsCollections.push("banana");

console.log(fruitsCollections);
fruitsCollections[14]='papaya';
console.log(fruitsCollections);
console.log(fruitsCollections.length);

const rainbowColors=['violet','indigo','blue','green','yellow','orange','red']
console.log(rainbowColors.length);


fruitsCollections.pop();

console.log(fruitsCollections);


rainbowColors.push(['violet','pink'])

console.log(rainbowColors);

rainbowColors.lastcolor='black'
console.log(rainbowColors);

