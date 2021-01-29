function imgSlider(image){
    document.querySelector('.nasipadang').src=image;

}
function changeCircleColor(color){
const circle=document.querySelector('.circle');
circle.style.background=color;
}
function show(opacity){
    const circle=document.querySelector('.menu-box');
    circle.style.opacity=opacity;
    }

//  let stockpadang1=10;
//  let stockpadang2=20;
//  let stockpadang3=30;   
//  let peoplepadang1=30
//  let peoplepadang2=50
//  let peoplepadang3=70

 function beli(stock,people){
     let stock1=document.querySelector(`#${stock}`).innerHTML--
     let people1=document.querySelector(`#${people}`).innerHTML++
     if(stock1===1){
         const opashow=document.getElementById('card-show1')
         opashow.style.opacity=0
     }
     if(stock2===1){
        const opashow=document.getElementById('card-show2')
        opashow.style.opacity=0
    }
    if(stock3===1){
        const opashow=document.getElementById('card-show3')
        opashow.style.opacity=0
    }
     console.log(stock1)
 }



 window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    if(scroll>50){
        console.log(scroll)
        const header1=document.querySelector('header');
        header1.style.backgroundColor='white';
        header1.style.boxShadow='1px 1px 10px rgba(139, 139, 139, 0.3)';
    }
    else if(scroll<50){
        console.log(scroll)
        const header1=document.querySelector('header');
        header1.style.boxShadow='none';

    }
   
});

//  console.log(nav)

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 20) {
//           $("nav-colored").css("background" , "blue");
//         }
//     })
//   })
// window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 280) {
//         myNav.classList.add("scroll");
//     } else {
//         myNav.classList.remove("scroll");
//     }
// };