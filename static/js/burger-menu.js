export function Burger() {
    const Popup = document.querySelector(".popup");
    const BurgerBtn = document.querySelector(".burger");
    const BurgerItem = document.querySelectorAll(".burger__item");
    const Nav = document.querySelector('.nav').cloneNode(1)
    const popupInner = document.querySelector(".popup_inner")
    const footerChar = document.querySelectorAll("#footer");

    BurgerBtn.addEventListener("click", function() {
	Popup.classList.toggle("visible-popup");

    BurgerItem.forEach((item) => {
       item.classList.toggle("burger__item--active_items")
    });
    Nav.classList.toggle("active")
    popupInner.appendChild(Nav)
    const navLinkChar = Array.from(document.querySelectorAll(".nav__link"))
    const NavLinkCharSlice = navLinkChar.slice(7, 14)
    NavLinkCharSlice.forEach((element, indexNav) => {
        element.addEventListener("click", ()=> {
            Popup.classList.remove("visible-popup");
            BurgerItem.forEach((item) => {
                item.classList.remove("burger__item--active_items")
             });
             Nav.classList.remove("active")
             popupInner.appendChild(Nav)
             
             footerChar.forEach((value, index1) => {
                if (indexNav === index1) {
                 function scrollTo(element2) {
                   window.scroll({
                     left: 0,
                     top: element2.offsetTop,
                     behavior: 'smooth'
                   });
                  
                 };
                 scrollTo(value);
                };
                
             });
            
        })
    })
    
   
    
})
    
}




