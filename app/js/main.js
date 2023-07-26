const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__menu');


// menuBtn.addEventListener("click", () => {
//     toggleTwoClasses(menuList, "menu--open", "menu--close", 500);
// })

// BURGER ////////////////////
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
///////////////////////////