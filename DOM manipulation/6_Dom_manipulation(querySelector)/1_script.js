// Highlight element by ID
function highlightElementById() {
    // getElementById returns a single element
    const element = document.getElementById('unique');
    element.classList.toggle('highlight');
    console.log(element);
}

// Highlight elements by class name
function highlightElementsByClassName() {
    // getElementsByClassName returns an HTMLCollection
    const elements = document.getElementsByClassName('example-class');
    // Convert HTMLCollection to an array and toggle highlight class
    Array.from(elements).forEach(element => {
        element.classList.toggle('highlight');
    });

    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].innerHTML = "<h1>Anurag Kumar</h1>";
    // }
    
    console.log(elements);
}

// Highlight elements by tag name
function highlightElementsByTagName() {
    // getElementsByTagName returns an HTMLCollection
    const elements = document.getElementsByTagName('span');
    // Convert HTMLCollection to an array and toggle highlight class
    Array.from(elements).forEach(element => {
        element.classList.toggle('highlight');
    });
    console.log(elements);
}

// Highlight the first element that matches the selector
function highlightQuerySelector() {
    // querySelector returns the first matching element
    const element = document.querySelector('.query-selector');
    element.classList.toggle('highlight');
    console.log(element);
}

// Highlight all elements that match the selector
function highlightQuerySelectorAll() {
    // querySelectorAll returns a NodeList
    const elements = document.querySelectorAll('.query-selector-all');
    // Loop through the NodeList and toggle highlight class
    elements.forEach(element => {
        element.classList.toggle('highlight');
    });
    console.log(elements);
}

// Highlight NodeList example
function highlightNodeList() {
    // Select all li elements under ul with id 'nodelist-example'
    const nodeList = document.querySelectorAll('#nodelist-example li');
    // Loop through each li element and set background color to red
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
    }
    
    console.log(nodeList);
}


// Highlight HTMLCollection example
function highlightHTMLCollection() {
    // getElementsByClassName returns an HTMLCollection
    const htmlCollection = document.getElementsByClassName('html-collection');
    // HTMLCollection does not have forEach, convert to an array first
    Array.from(htmlCollection).forEach(element => {
        element.classList.toggle('highlight');
    });
    console.log(htmlCollection);
}
