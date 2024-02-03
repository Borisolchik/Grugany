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
// $(document).ready(function() {
//     $("#news-items").slick({
//         slidesToScroll: 1,
//         centerPadding: '60px',
//         slidesToShow: 4,
//         responsive: [
//             {
//                 breakpoint: 1351,
//                 settings: {
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 1157,
//                 settings: {
//                     centerPadding: '5px',
//                     slidesToShow: 2
//                 }
//             }
//         ]
//     });
// });