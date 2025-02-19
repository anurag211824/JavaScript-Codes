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
