window.onload = function(){

    let nextBtn = document.querySelector(".buttonNext")
    let prevBtn = document.querySelector(".buttonPrev")
    let Train = document.querySelector(".train")
    let pageList = document.querySelectorAll(".pagiNation>li")
    let TrainList = Train.children
    let count = 0
    nextBtn.addEventListener("click",function(){
        //train클래스를 선택해서 왼쪽으로 500픽셀 이동
        count++
        if(count>3){count=0}
        Train.style.transform = "translateX(-"+25*count+"%)"
        for(let i=0 ; i<TrainList.length ; i++){
            TrainList[i].classList.remove("on")
            pageList[i].classList.remove("on")
        }
        TrainList[count].classList.add("on") 
        pageList[count].classList.add("on")
    })

    prevBtn.addEventListener("click", function () {
        //train클래스를 선택해서 오른쪽으로 500픽셀 이동
        count--
        if (count < 0) { count = 3 }
        Train.style.transform = "translateX(-" + 25 * count + "%)"
    
    
        for (let i = 0; i < trainList.length; i++) {
          trainList[i].classList.remove("on")
          pageList[i].classList.remove("on")
        }
    
        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
    
      })
    
      pageList[0].addEventListener("click", function () {
        for (let i = 0; i < trainList.length; i++) {
          trainList[i].classList.remove("on")
          pageList[i].classList.remove("on")
        }
    
        trainList[0].classList.add("on")
        pageList[0].classList.add("on")
    
        Train.style.transform = "translateX(-" + 25 * count + "%)"
      })
    
      pageList[1].addEventListener("click", function () {
        for (let i = 0; i < trainList.length; i++) {
          trainList[i].classList.remove("on")
          pageList[i].classList.remove("on")
        }
    
        trainList[1].classList.add("on")
        pageList[1].classList.add("on")
    
        Train.style.transform = "translateX(-" + 25 * 1 + "%)"
      })
    
    
    
    
    }