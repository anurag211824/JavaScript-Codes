 // Get elements by ID
 const innerTextElement = document.getElementById('innerTextExample');
 const textContentElement = document.getElementById('textContentExample');
 const innerHTMLElement = document.getElementById('innerHTMLExample');

 // Retrieve and log text content using innerText
 const innerTextContent = innerTextElement.innerText;
 console.log('innerText:', innerTextContent); 
 // Output: "This is inner text using innerText."

 // Retrieve and log text content using textContent
 const textContent = textContentElement.textContent;
 console.log('textContent:', textContent); 
 // Output: "This is inner text using textContent."

 // Retrieve and log HTML content using innerHTML
 const innerHTMLContent = innerHTMLElement.innerHTML;
 console.log('innerHTML:', innerHTMLContent); 
 // Output: "This is <span>inner</span> text using innerHTML."

 // Set new content using innerHTML
 innerHTMLElement.innerHTML = '<p>This is updated HTML content using innerHTML.</p>';