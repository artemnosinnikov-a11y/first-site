const from = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

from.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === '') return;

    const item = document.createElement('li');
    item.textContent = text;

 item.addEventListener('click', function () {
        item.classList.toggle('done');
    });

    list.appendChild(item);

console.log('пунктов в списке:', list.children.length);

    input.value = '';
    input.focus();
});