const cards = document.querySelectorAll('.collapsible');

function removeAllexpandables() {
    cards.forEach(card => {
        card.classList.remove('collapsible--expand');
    })
}
removeAllexpandables();

cards.forEach(card => {
    card.addEventListener('click', (e) =>{
        card.classList.toggle('collapsible--expand');
    })
})
// element.addEventListener('click', (e) => {

// e.target.classList.toggle('expandable');
// });