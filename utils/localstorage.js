
function getItemFromLocalStorage(key) {
return localStorage.getItem(key);
}


function setItemInLocalStorage(key, value) {
localStorage.setItem(key, value);
}

export {getItemFromLocalStorage, setItemInLocalStorage};