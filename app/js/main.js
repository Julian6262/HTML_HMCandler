const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__menu');


menuBtn.addEventListener("click", () => {
    toggleTwoClasses(menuList, "menu--open", "menu--close", 500);
})


document.onclick = function (e) {
    if (e.target.className !== "menu__btn-img"
        && e.target.className !== "menu__item-link") {
        menuList.classList.add('menu--close');
        window.setTimeout(function () {
            menuList.classList.remove('menu--open');
        }, 500);
    }
};


function toggleTwoClasses(element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first)) {
        element.classList.add(first);
        element.classList.remove(second);
    } else {
        element.classList.add(second);
        window.setTimeout(function () {
            element.classList.remove(first);
        }, timeOfAnimation);
    }
}

