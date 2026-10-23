const showBtn = document.querySelector('#dog-btn');
const dogImg = document.querySelector('#dog-img');

showBtn.addEventListener('click', async function () {
    showBtn.disabled = true;
    showBtn.textContent = 'Загружаю…';

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        dogImg.src = data.message;
        dogImg.classList.add('visible');
    } catch (error) {
        console.error(error);
        alert('Не получилось загрузить картинку');
    }

    showBtn.disabled = false;
    showBtn.textContent = 'Показать';
});