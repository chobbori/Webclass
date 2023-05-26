window.onload = function(){

    let station1 = new Swiper(".station1",{
        loop:true,
        direction:"horizontal",
        // slidesPerView:3.2, //슬라이드 개수의 반만큼 최대 적용 가능
        // spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true
        },
        navigation: {
            nextEl: ".csNextBtn",
            prevEl: ".csPrevBtn",
        },
        autoplay:{
            delay:1000,
            pauseOnMouseEnter:true
        },
        speed:3000,
        breakpoints:{
            320:{
                slidesPerView: 1,
                spaceBetween: 0
            },
            480:{
                slidesPerView: 2,
                spaceBetween: 10
            },
            640:{
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
   
    

}