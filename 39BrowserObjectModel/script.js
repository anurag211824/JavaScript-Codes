// script.js

let newWindow;

// Open a new window
function openWindow() {
    newWindow = window.open('', '', 'width=400,height=400');
    newWindow.document.write('<h2>New Window Opened</h2>');
}

// Close the opened window
function closeWindow() {
    if (newWindow) {
        newWindow.close();
    }
}

// Resize the window
function resizeWindow() {
    if (newWindow) {
        newWindow.resizeTo(500, 500);
    }
}

// Move the window
function moveWindow() {
    if (newWindow) {
        newWindow.moveTo(200, 200);
    }
}

// Show innerWidth and innerHeight
function showDimensions() {
    alert(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
}

// Scroll down by 100px
function scrollPage() {
    window.scrollBy(0, 100);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Print the page
function printPage() {
    window.print();
}

// Navigate back in history
function goBack() {
    history.back();
}

// Navigate forward in history
function goForward() {
    history.forward();
}
