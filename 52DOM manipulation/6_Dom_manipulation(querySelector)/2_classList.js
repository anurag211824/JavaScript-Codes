// Function to add a class
function addClass() {
    const element = document.getElementById('example-paragraph');
    element.classList.add('highlight');
    console.log('Added highlight class:', element.classList);
}

// Function to remove a class
function removeClass() {
    const element = document.getElementById('example-paragraph');
    element.classList.remove('highlight');
    console.log('Removed highlight class:', element.classList);
}

// Function to toggle a class
function toggleClass() {
    const element = document.getElementById('example-paragraph');
    element.classList.toggle('highlight');
    console.log('Toggled highlight class:', element.classList);
}

// Function to check if an element contains a class
function checkClass() {
    const element = document.getElementById('example-paragraph');
    const hasClass = element.classList.contains('highlight');
    console.log('Contains highlight class:', hasClass);
    alert('Contains highlight class: ' + hasClass);
}




// ClassList and Toggle in JavaScript

// The classList property and toggle method are powerful tools for manipulating the classes of an HTML element. Let's break down what they are and how they work, with detailed examples.

// classList Property
// The classList property is a read-only property that returns a live DOMTokenList collection of the class attributes of an element. This property can be used to add, remove, and toggle CSS classes on an element.

// Common Methods of classList
// add(className): Adds the specified class to the element.
// remove(className): Removes the specified class from the element.
// toggle(className): Toggles the specified class. If the class exists, it removes it; otherwise, it adds it.
// contains(className): Checks if the element contains the specified class. Returns true or false.