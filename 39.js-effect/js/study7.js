$(document).ready(function(){

    $(".btnNext").click(function(){
        e.preventDefault() 
        $(".train").css("transform", "translateX(-20%)")


        $(".train").css("transform", "translateY("+(count*-20)+"%)")
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count++;
        if(count<4){
            count=0;
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--;
        if(count<0){
            count=4;
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    })
    
})