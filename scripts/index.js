const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__link-catalog')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.body.querySelector('.menu__icon')
const iconMenuBlock = document.body.querySelector('.menu__icon-block')

if (iconMenu) {
    const menuBody = document.body.querySelector('.menu__body')
    iconMenuBlock.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}
$(document).ready(function() {
    $('.reviews-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1225, // - от какой ширины изменять настройки(1024 и ниже)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480, // - от какой ширины изменять настройки(1024 и ниже)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    let array1 = document.querySelectorAll('.trainers-item');
    for (let i = 3; i < array1.length; i++) {
        array1[i].classList.add('none');
    }
    const button1 = document.querySelector('#trainers_btn');
    button1.addEventListener('click', () => {
        let elements1 = document.querySelectorAll('.trainers-item.none');

        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove('none');
        }
        button1.classList.add('none');
    });
});
