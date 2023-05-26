window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
          },
        
    });
    breakpoints:{
        340:{
            slidesPerView: 1,
            spaceBetween: 0
        },
        768:{
            slidesPerView: 3,
        },
        
    }


}