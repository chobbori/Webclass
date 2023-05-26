window.onload = function(){
    let dtlist = document.querySelectorAll(".tabMenu>dt")
    
    if(let i=0; i<dtlist.length; i++){
        dtlist[0].addEventListener("click", function(){
            for(let j=0; j<dtlist.length; j++){
                dtlist[j].classList.remove("on")
                //클릭하는 맥락안에서 클릭한 태그를 this로 표현 가능
        })
            }
            
    }
    
   
}