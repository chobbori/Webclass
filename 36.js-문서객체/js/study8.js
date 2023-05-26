window.onload = function() {

    let tabTitle = document.querySelectorAll("tabTit>li")
    let tabDescription = [`<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta suscipit ex repudiandae, nam dolore temporibus odit quo facilis incidunt minus molestias ab reiciendis quasi ea cumque. Quam, quia sunt.</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta suscipit ex repudiandae, nam dolore temporibus odit quo facilis incidunt minus molestias ab reiciendis quasi ea cumque. Quam, quia sunt.</p>`,
    `<h3>title3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta suscipit ex repudiandae, nam dolore temporibus odit quo facilis incidunt minus molestias ab reiciendis quasi ea cumque. Quam, quia sunt.</p>`

]

    for(let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].addEventListener("click",function(){
            alert("test")
        })
    }



}