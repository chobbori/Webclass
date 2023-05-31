$(document).ready(function(){

    let count = 0;
    //다음버튼을 눌렀을 때
    $(".btnNext").click(function(){
        count++;
        if(count>3){count=3}
        $(".train").css("transform", "translateX(-"+(count*25)+"%)")
        $("train>li").removeClass("on")
        $("train>li").eq(count).addclass("on")
        $("pagination>li").removeClass("on")
        $("pagination>li").eq(count).addclass("on")
    })
    
    function slidMove(idx){
        $(".train").css("transform", "translateX(-"+(count*25)+"%)")
    }
    



})

