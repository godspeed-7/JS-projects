
const counterDivs = document.querySelectorAll('.count');
counterDivs.forEach(count => {
    const target = +count.getAttribute('data-value');
    count.textContent = 0;
    function updateCounter(){
        let currentVal = +count.textContent;
        if(currentVal < target) {
            setTimeout(() => {
                count.textContent  = currentVal + 100;
                updateCounter();
            }, 10);
        }
    }
    updateCounter();
});