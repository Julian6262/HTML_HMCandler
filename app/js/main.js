// BURGER ////////////////////
const menuList = document.querySelector('.header__menu');

document.onclick = function (e) {
    toggleTwoClasses(e, menuList, "menu--open", "menu--close", 500);
};

function toggleTwoClasses(e, element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first) &&
        e.target.className === "menu__btn-img") {
        element.classList.add(first);
        element.classList.remove(second);
    } else {
        if (e.target.className !== "menu__item-link") {
            element.classList.add(second);
            window.setTimeout(function () {
                element.classList.remove(first);
            }, timeOfAnimation);
        }
    }
}

// SWIPER/////////////////////////////////
let swiper1 = new Swiper(".reviews__slider", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".reviews__slider-pagination",
        clickable: true,
    },
});


let swiper2 = new Swiper(".certificates__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".certificates__slider-pagination",
        clickable: true,
    },
    breakpoints: {
        705: {
            slidesPerView: 3,
        },
        440: {
            slidesPerView: 2,
        },
    },
});