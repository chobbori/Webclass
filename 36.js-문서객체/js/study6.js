window.onload = function() {
    let menuState = "닫혀있음"
    //문서를 끝까지 읽은 뒤 실행할 소스코드
    let btnMenu = document.querySelector(".btnMenu")
    btnMenu.addEventListener("click",function(){
        if(menuState == false){
            btnMenu.classList.add("close")
            menuState = true
        }else{
            btnMenu.classList.remove("close")
            menuState = false
        }
        
    })
}