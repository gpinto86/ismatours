var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides:true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

    },
    breakpoints : {
        991 : {
            slidesPerView: 3
        }
    }

});

/*navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});*/





