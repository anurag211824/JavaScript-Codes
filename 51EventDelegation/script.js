const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardsList = document.querySelectorAll('.card')

let count = 1

// EVENT DELEGATION:
// Instead of adding individual event listeners to each `.card` element, 
// we add a single event listener to the parent `.container`.
// This works because events bubble up, so we can detect clicks on dynamically added `.card` elements.

addCardBtn.addEventListener('click', () => {
    // Create a new card element dynamically
    const newCard = document.createElement('div')
    newCard.classList.add('card') // Add 'card' class
    newCard.innerText = count++   // Set text as the current count
    container.append(newCard) // Append the new card to the container
})

// Using event delegation to handle click events on dynamically added cards
container.addEventListener('click', (e) => {
    // Check if the clicked element is not the container itself
    if (e.target !== container) {
        e.target.remove() // Remove the clicked card
    }
})

/*
WHY EVENT DELEGATION IS USED HERE:
1. If we added an event listener directly to each `.card`, it would only work on the existing elements.
2. New `.card` elements added dynamically wouldn't have the event listener unless we manually add it.
3. Instead, we attach the event listener to the `.container` (a static parent element).
4. When a `.card` is clicked, the event bubbles up to `.container`, where we check if `e.target` is a `.card`.
5. This makes the code efficient and reduces memory usage, as we don’t need multiple event listeners.
*/
