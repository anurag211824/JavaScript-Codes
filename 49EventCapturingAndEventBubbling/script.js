const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

/*
EVENT BUBBLING:
- Event bubbling is the process where an event starts from the target element (the one clicked)
  and propagates up to its ancestors (parent, grandparent, etc.), all the way to the `window` object.
- By default, event listeners listen in the bubbling phase (`capture: false`).

EVENT CAPTURING (Trickling Phase):
- The event starts from the `window` and propagates down to the target element.
- If `{capture: true}` is set, the event is captured during this phase before reaching the target.
- This is useful when you need a parent element to handle an event before the child element.

`capture: false` (default behavior):
- Listeners execute in the bubbling phase, meaning the innermost element executes first, then its parents.

`capture: true`:
- Listeners execute in the capturing phase, meaning the outermost element (like `window` or `document`)
  executes first before reaching the target element.

`once: true`:
- The event listener executes only once, then gets removed automatically.
*/

// Window event listener (executes last in bubbling phase)
window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener');
}, {capture: false}) // Executes in the bubbling phase

// Document event listener (executes before window in bubbling phase)
document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener');
}, {capture: false})

// Body event listener (executes before document in bubbling phase)
document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener');
}, {capture: false})

// Green element event listener (executes before body in bubbling phase)
green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: false})

// Pink element event listener (executes before green in bubbling phase)
pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: false})

// Blue element event listener (executes first in bubbling phase)
blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: false})

// Blue element event listener that runs only once
// This will execute the first time you click blue, then it gets removed.
blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener (Once)');
}, {once: true})




// const green = document.querySelector('.green');
// const pink = document.querySelector('.pink');
// const blue = document.querySelector('.blue');

// /*
// EVENT BUBBLING (capture: false)
// - Starts from the target element and bubbles up to ancestors.

// EVENT CAPTURING (capture: true)
// - Starts from the window and goes down to the target element.

// Clicking the blue box will show both bubbling and capturing logs.
// */

// // Window event listeners
// window.addEventListener('click', (e) => {
//     console.log('Capture: Window');
// }, {capture: true}); // Capturing phase

// window.addEventListener('click', (e) => {
//     console.log('Bubble: Window');
// }, {capture: false}); // Bubbling phase

// // Document event listeners
// document.addEventListener('click', (e) => {
//     console.log('Capture: Document');
// }, {capture: true});

// document.addEventListener('click', (e) => {
//     console.log('Bubble: Document');
// }, {capture: false});

// // Body event listeners
// document.body.addEventListener('click', (e) => {
//     console.log('Capture: Body');
// }, {capture: true});

// document.body.addEventListener('click', (e) => {
//     console.log('Bubble: Body');
// }, {capture: false});

// // Green element event listeners
// green.addEventListener('click', (e) => {
//     console.log('Capture: Green');
// }, {capture: true});

// green.addEventListener('click', (e) => {
//     console.log('Bubble: Green');
// }, {capture: false});

// // Pink element event listeners
// pink.addEventListener('click', (e) => {
//     console.log('Capture: Pink');
// }, {capture: true});

// pink.addEventListener('click', (e) => {
//     console.log('Bubble: Pink');
// }, {capture: false});

// // Blue element event listeners
// blue.addEventListener('click', (e) => {
//     console.log('Capture: Blue');
// }, {capture: true});

// blue.addEventListener('click', (e) => {
//     console.log('Bubble: Blue');
// }, {capture: false});

// // Blue element event listener that runs only once
// blue.addEventListener('click', (e) => {
//     console.log('Blue Event Listener (Once)');
// }, {once: true});
