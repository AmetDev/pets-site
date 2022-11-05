export function scroll() {
    let links = document.querySelectorAll(".nav");
    links.forEach((char) => {
      char = document.querySelectorAll(".nav__link");
      console.log(char);
      let footerArr = document.querySelectorAll(".wrapper");
      footerArr.forEach((footerChar) => {
        footerChar = document.querySelectorAll("#footer");
        console.log(footerChar);
      })
    });

    // function CurrentLinks(event) {
    //     let CurrentLinks = event.target.closest(".nav__link");
    //     let navArr = document.querySelectorAll('.nav');
    //     navArr.forEach((char) => {
    //         let charall = char.indexOf();
    //         console.log(charall);
    //     })
        

    // }
}