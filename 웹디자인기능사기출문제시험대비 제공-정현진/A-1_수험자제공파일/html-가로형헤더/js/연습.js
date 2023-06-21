$(document).ready(function(){

    let count=0;

    // $("header>h1").click(function(){
    //     // alert("TT")
    //     count++
    //     if(count>2){
    //         count = 0
    //     }
    //     console.log(count)
    //     $(".train").css("transform","translate("+(-33.333*count)+"%)")
    // })

    setInterval(function(){
        count++
        if(count>2){
            count = 0
        }
        console.log(count)
        $(".train").css("transform","translate("+(-33.333*count)+"%)")
    },2500)

})

// "abc"+"def"
// "abcdef"
// "abc"
// 100+1
// 101

// let a = 10
// "name"+a
// "name10"
// let b = "me"
// "na"+b+"10"
// "nam"+a+"ae"
// "nam"+(a+10)+"ae"
// "nam20ae"