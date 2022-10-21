export function Burger() {
    const Popup = document.querySelector(".popup");
    const BurgerBtn = document.querySelector(".burger");
    const BurgerItem = document.querySelectorAll(".burger__item");
    const Nav = document.querySelector('.nav').cloneNode(1)
    const popupInner = document.querySelector(".popup_inner")

    BurgerBtn.addEventListener("click", function() {
	Popup.classList.toggle("visible-popup");

    BurgerItem.forEach((item) => {
       item.classList.toggle("burger__item--active_items")
    });
    Nav.classList.toggle("active")
    popupInner.appendChild(Nav)
})
    
}




