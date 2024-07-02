// Select the element with the class 'parent'
const parent = document.querySelector('.parent');

// Log the parent element to the console
console.log(parent);

// Log all the children of the parent element to the console
console.log(parent.children);

// Log the inner HTML of the second child of the parent element
console.log(parent.children[1].innerHTML);

// Loop through all the children of the parent element
for (let i = 0; i < parent.children.length; i++) {
    // Log the inner HTML of each child element
    console.log(parent.children[i].innerHTML);
}

// Change the text color of the second child of the parent element to orange
parent.children[1].style.color = "orange";

// Log the first child element of the parent element to the console
console.log(parent.firstElementChild);

// Log the last child element of the parent element to the console
console.log(parent.lastElementChild);

// Select the element with the class 'day'
const dayOne = document.querySelector(".day");

// Log the 'day' element to the console
console.log(dayOne);

// Log the parent element of the 'day' element to the console
console.log(dayOne.parentElement);

// Log the next sibling element of the 'day' element to the console
console.log(dayOne.nextElementSibling);

// Log all child nodes of the parent element to the console, including text nodes
console.log("Nodes", parent.childNodes);
