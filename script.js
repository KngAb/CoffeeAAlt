const menuOpenButton = document.querySelector("#menu-open-button");
const navLinks =document.querySelectorAll(".nav-menu .nav-link");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    //Toggle Mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

//Close menu when the nav link is clicked
navLinks.forEach(link=>{
    link.addEventListener("click", ()=>menuOpenButton.click());
})

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click())

// //initialize swiper
// const swiper = new Swiper('.slider-wrapper', {

//     //If we need pagination
//     pagination:{
//         el: '.swiper-pagination',
//     },
//     //Navigation arrows
//     navigation: {
//         nextEL: '.swiper-button-next',
//         prevEL: '.swiper-button-prev',
//     },
   
// });


const swiper = new Swiper('.slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    grabCursor:true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 25,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
