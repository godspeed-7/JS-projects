const textArea = document.querySelector('#data');
const chipscontainer = document.querySelector('.chips');

function createChip(value) {
let button = document.createElement('button');
button.className = 'button';
button.innerText = value;
chipscontainer.append(button);

}
textArea.addEventListener('input', (e)=> {
    if(e.target.value === '') {
        chipscontainer.innerHTML='';
    }
    console.log(e);
    if(e.data === ',') {
let data = e.target.value.split(',');
createChip(data[data.length - 2]);
    }
})