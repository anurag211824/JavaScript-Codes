//.........................................................................................................
// 1. Stack Memory (Primitive Data Types)
// Used for storing primitive values (e.g., number, string, boolean, null, undefined, symbol, and bigint).
// Operates on a Last In, First Out (LIFO) basis.
let n1 = 10;
let n2 = n1;
n2 = 20;
console.log(n1); // 10 (remains unchanged)
//Here, n1 and n2 are stored in the stack, and n2 gets a copy of a’s value.

//.........................................................................................................

//.........................................................................................................
// 2. Heap Memory (Reference Data Types)
// Used for objects, arrays, and functions.
// Allocated dynamically and accessed via references.

let obj1 = { name: "Ajay" };
let obj2 = obj1;
obj2.name = "Vijay";
console.log(obj1.name); // "Vijay"
//Here, obj1 and obj2 reference the same memory location in the heap.
//.........................................................................................................