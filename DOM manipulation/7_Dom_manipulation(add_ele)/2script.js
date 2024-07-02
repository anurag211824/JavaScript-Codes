// Create a new div element
const div = document.createElement("div");

// Log the newly created div element to the console
console.log(div);

// Set the class name of the div element to "main"
div.className = "main";

// Set the id of the div element to "myId"
div.id = "myId";

// Set a title attribute on the div element with the value "My Title"
div.setAttribute("title", "My Title");

// Set the background color of the div element to green
div.style.backgroundColor = "green";

// Set the padding of the div element to 12px
div.style.padding = "12px";
// Uncomment the line below to set the inner text of the div element
// div.innerText = "anurag kumar"

// Loop 10 times to add text and line breaks to the div element
for (let i = 0; i < 10; i++) {
  // Create a text node with the text "anurag"
  const addText = document.createTextNode(`anurag`);
  
  // Append the text node to the div element
  div.appendChild(addText);
  
  // Create a line break element
  const br = document.createElement("br");
  
  // Append the line break element to the div element
  div.appendChild(br);
  
  // Append the div element to the body of the document
  document.body.appendChild(div);
}
