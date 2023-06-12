$(document).ready(function(){

    let count = 0;
    let perView = 1;
    //train클래스 너비를 변경 => train 클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시젹용
    let trainWidth = $(".train").width()
    $(".train").width(trainWidth/perview)

    $(window).resize(function(){
        let winWidth = $(window).width()
        //console.log(winWidth)
        if(winWidth >= 1024){
            console.log("pc사이즈입니다")
            perView = 2.5
            stationWidht = 
        }else if(winWidth>=)
    })

    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        if(count>4){count=0}
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=0}
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
    // moveSlider(2)



})