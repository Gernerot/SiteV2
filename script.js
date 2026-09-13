// 1. Находим элементы на странице по их ID
const title = document.getElementById('main-title');
const button = document.getElementById('magic-btn');

// 2. Добавляем "слушатель событий" на кнопку
button.addEventListener('click', function() {
    // Этот код выполнится только тогда, когда произойдет клик
    title.textContent = 'Ура! JavaScript работает!';
    title.style.color = '#28a745'; // Меняем цвет текста на зеленый
});