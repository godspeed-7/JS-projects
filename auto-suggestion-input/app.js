const searchBox = document.querySelector('#searchBox');
let timer = 0;
function sendingData(e) {
    console.log('hi', e.target.value);
}
function doSomething(e) {
    clearTimeout(timer);
    timer =  setTimeout(() => {
       sendingData(e) 
    }, 500);

}
searchBox.addEventListener('input', doSomething);
