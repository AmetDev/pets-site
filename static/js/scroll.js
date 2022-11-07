export function scroll() {
  const Links = document.querySelectorAll(".nav__link")
  console.log(Links)
  Links.forEach((value, indexNav) => {
    value.addEventListener("click", function() {
      console.log(indexNav)
      
      const footerChar = document.querySelectorAll("#footer");
      
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
   
    });
   
  });
}