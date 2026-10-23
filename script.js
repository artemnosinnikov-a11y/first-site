const button = document.querySelector('#count-btn');
const output = document.querySelector('#count-out');

let count = 0;

button.addEventListener('click', function () {
    count = count + 1;
    output.textContent = 'Нажато: ' + count;
});