const list = document.querySelector('ul');
const input = document.querySelector('.input input');
console.log(input);
input.addEventListener('input', updateValue);
console.log(input);
const button = document.querySelector('button');

function updateValue(e) {
    input.textContent = e.target.value;
}

button.onclick = function() {
    let myItem = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;

    input.focus();
}