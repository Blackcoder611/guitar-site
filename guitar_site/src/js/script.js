window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})
$(document).ready(function() {
    // Обработчик клика на якорные ссылки
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        
        var target = $(this.hash); // Получаем элемент, к которому ведет ссылка
        
        // Плавно прокручиваем страницу до элемента
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // 800 - время анимации в миллисекундах
    });
});

