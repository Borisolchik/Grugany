$(document).ready(function() {
    PopUpHide();

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

});

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

$('.news_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
});

$('.article_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path d="M7.97535 15.6834C7.81701 15.6834 7.65868 15.6251 7.53368 15.5001L2.47535 10.4418C2.23368 10.2001 2.23368 9.8001 2.47535 9.55843L7.53368 4.5001C7.77535 4.25843 8.17535 4.25843 8.41702 4.5001C8.65868 4.74176 8.65868 5.14176 8.41702 5.38343L3.80035 10.0001L8.41702 14.6168C8.65868 14.8584 8.65868 15.2584 8.41702 15.5001C8.30035 15.6251 8.13368 15.6834 7.97535 15.6834Z" fill="#161414" />\n' +
        '  <path d="M17.0836 10.625H3.05859C2.71693 10.625 2.43359 10.3417 2.43359 10C2.43359 9.65833 2.71693 9.375 3.05859 9.375H17.0836C17.4253 9.375 17.7086 9.65833 17.7086 10C17.7086 10.3417 17.4253 10.625 17.0836 10.625Z" fill="#161414" />\n' +
        '</svg>Предыдущая</div>',
    nextArrow: '<div class="next">Следующая<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path d="M12.0251 15.6834C11.8668 15.6834 11.7084 15.6251 11.5834 15.5001C11.3418 15.2584 11.3418 14.8584 11.5834 14.6168L16.2001 10.0001L11.5834 5.38343C11.3418 5.14176 11.3418 4.74176 11.5834 4.5001C11.8251 4.25843 12.2251 4.25843 12.4668 4.5001L17.5251 9.55843C17.7668 9.8001 17.7668 10.2001 17.5251 10.4418L12.4668 15.5001C12.3418 15.6251 12.1834 15.6834 12.0251 15.6834Z" fill="#FCFCFC" />\n' +
        '  <path d="M16.942 10.625H2.91699C2.57533 10.625 2.29199 10.3417 2.29199 10C2.29199 9.65833 2.57533 9.375 2.91699 9.375H16.942C17.2837 9.375 17.567 9.65833 17.567 10C17.567 10.3417 17.2837 10.625 16.942 10.625Z" fill="#FCFCFC" />\n' +
        '</svg></div>',
});

$('.albums_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
});

$('.gallery_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path d="M7.97535 15.6834C7.81701 15.6834 7.65868 15.6251 7.53368 15.5001L2.47535 10.4418C2.23368 10.2001 2.23368 9.8001 2.47535 9.55843L7.53368 4.5001C7.77535 4.25843 8.17535 4.25843 8.41702 4.5001C8.65868 4.74176 8.65868 5.14176 8.41702 5.38343L3.80035 10.0001L8.41702 14.6168C8.65868 14.8584 8.65868 15.2584 8.41702 15.5001C8.30035 15.6251 8.13368 15.6834 7.97535 15.6834Z" fill="#161414" />\n' +
        '  <path d="M17.0836 10.625H3.05859C2.71693 10.625 2.43359 10.3417 2.43359 10C2.43359 9.65833 2.71693 9.375 3.05859 9.375H17.0836C17.4253 9.375 17.7086 9.65833 17.7086 10C17.7086 10.3417 17.4253 10.625 17.0836 10.625Z" fill="#161414" />\n' +
        '</svg>Предыдущая</div>',
    nextArrow: '<div class="next">Следующая<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path d="M12.0251 15.6834C11.8668 15.6834 11.7084 15.6251 11.5834 15.5001C11.3418 15.2584 11.3418 14.8584 11.5834 14.6168L16.2001 10.0001L11.5834 5.38343C11.3418 5.14176 11.3418 4.74176 11.5834 4.5001C11.8251 4.25843 12.2251 4.25843 12.4668 4.5001L17.5251 9.55843C17.7668 9.8001 17.7668 10.2001 17.5251 10.4418L12.4668 15.5001C12.3418 15.6251 12.1834 15.6834 12.0251 15.6834Z" fill="#FCFCFC" />\n' +
        '  <path d="M16.942 10.625H2.91699C2.57533 10.625 2.29199 10.3417 2.29199 10C2.29199 9.65833 2.57533 9.375 2.91699 9.375H16.942C17.2837 9.375 17.567 9.65833 17.567 10C17.567 10.3417 17.2837 10.625 16.942 10.625Z" fill="#FCFCFC" />\n' +
        '</svg></div>',
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

function PopUpShow(){
    $("#popup-item").show();
    const menuBody = document.body.querySelector('.menu__body')
    menuBody.classList.remove('_active');
}
function PopUpHide(){
    $("#popup-item").hide();
}
function PopUpHide2(){
    $("#popup-item-success").hide();
}

