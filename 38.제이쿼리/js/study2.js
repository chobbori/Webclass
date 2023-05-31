$(document).ready(function(){
    //문서가 쭉 읽힌 뒤 실행될 소스코드
    $("p").css("color", "green")
    $("p").css("font-weigth", "bold")
    $("p").css("color", "navy").css("font-weight", "normal")
    //체이닝기법으로도 메서트를 활용할 수 있다

    $(".naverlink").attr("href","https://www.naver.com/")
    let link = $(".naverlink").attr("href")
    console.log(link)


    $(".textframe>p").text("<i>text()함수</i>는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.")

    let textP = $(".textframe>p:nth-of-type(2)").text()
    alert.log(textP)

    $("#a").addClass("on")
    $("#a").removeClass("on")

    $("list>li").css("border-bottom","1px solid black")
    $(".list").children().css("color","blue")
    $(".list").parent().css("background","skyblue")
    



})