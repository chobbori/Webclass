$(document).ready(function(){

    $(".btnNext").click(function(){
        e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장 위로 올라가는 현상 방지)
        $(".train").css("transform", "translateX(-20%)")


        $(".train").css("transform", "translateY("+(count*-20)+"%)")
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--;
        if(count<0){
            count=4;
        }
        $(".train").css("transform", "translateY("+(count*-20)+"%)")
    })
    
})

