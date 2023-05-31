$(document).ready(function(){

    //1.btn1 을 클릭하면
    //2. textFrame클래스 태그가 선택돼서 글씨가 파란색이 되도록

    $(".btn1").click(function(){
        //버튼1 클릭했을 때 실행되는 소스코드
        $(".textFrame").css("color","blue")
    })


    //1. textFrame클래스 태그에 마우스를 올리면
    //2. textFrame클래스 태그에 밑줄 스타일이 들어갈 수 있도록

    $(".textFrame").mouseover(function(){
        $(".textFrame").css("text-decoration", "underline")
    })


    //1. textFrame클래스 태그에서 마우스를 바깥으로 빼면
    //. textFrame클래서 태그에 밑줄스타일이 없어지도록

    $(".textFrame").mouseout(function(){
        $(".textFrame").css("text-decoration", "none")
    })


    



})