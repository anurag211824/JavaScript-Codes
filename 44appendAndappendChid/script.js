// Select elements
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const card = document.querySelector(".card");

// Function to create a random color
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

// Function to create and append a new text node
function appendTextNode(parent, text) {
    const textNode = document.createTextNode(text);
    parent.appendChild(textNode);
}

// Function to generate multiple cards
function generateCards(count) {
    for (let i = 1; i <= count; i++) {
        let cardClone = card.cloneNode(true);
        cardClone.innerText = `${i}`;
        cardClone.style.cursor = "pointer";
        cardClone.style.backgroundColor = getRandomColor();
         setInterval(()=>{
            updateAllCardColors()
         },500)
        container2.appendChild(cardClone);
    }
}

// Function to update all card colors when clicked
function updateAllCardColors() {
    [...container2.children].forEach(child => {
        child.style.backgroundColor = getRandomColor();
    });
}

// Append elements
container.appendChild(h1.cloneNode(true)); // Clone & append h1
container.append("hello", "helloWorld");  // Append text directly
appendTextNode(container, "Anurag Kumar"); // Append "Anurag Kumar"


// Generate 100 cards
generateCards(100);





