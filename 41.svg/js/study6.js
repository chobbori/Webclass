$(document).ready(function(){




    let pathLength = $("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let fixedTop = $(".fixedFrame").offset().top
        let distance = winTop-fixedTop
        let movingAreaHeight = $(".movingArea").height()

        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }
        if(distance>=0 && distance <= 8000-movingAreaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
            console.log(distance)

            let percent = (distance/(8000-movingAreaHeight)*100)
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")

            let percent2 = (distance/(8000-movingAreaHeight)*87.5)
            $(".train").css("transform","translateX(-"+percent2+"%)")

            let count = Math.(distance/(8000-movingAreaHeight)*8)
            let count2 = (distance/(8000-movingAreaHeight)*8)-count 
            console.log(count+"번째 리스트의 애니메이션이 "+count2+"%만큼 진행되었습니다")
        }
        if(distance>8000-movingAreaHeight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(8000-movingAreaHeight)+"px")
        }


    })


})