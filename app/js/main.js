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


// ACCORDEON/////////////////////////////////
const accordeon = document.querySelector('.questions__items');
const accordeonTitles = accordeon.querySelectorAll('.questions__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {
        const currentText = accordeonTitle.parentElement.querySelector('.questions__text')
        accordeonTitle.classList.toggle('questions__title--active');
        currentText.classList.toggle('questions__text--visible');

        if (currentText.classList.contains('questions__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
        } else {
            currentText.style.maxHeight = null;
        }
    });
});


// MODAL////////////////////////////////////////////////
const modal = document.querySelector('.modal');

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modals-btn")) {
        modal.classList.add('modal--active');
    }
    if (e.target.classList.contains("modal") || e.target.classList.contains("modal__svg")) {
        modal.classList.remove('modal--active');
    }
});


// SCROLL/////////////////////////////////////////////
const menu = document.querySelectorAll(".menu__item-link");

menu.forEach((item) => {
    item.addEventListener("click", (e) => {

        e.preventDefault();
        let elem = document.getElementById(e.target.getAttribute('href').slice(1));

        window.scrollBy({
            top: elem.getBoundingClientRect().top - 50,
            behavior: 'smooth'
        });
    });
});