const menuBar = document.querySelector(".header-top>1")
const closeBtn = document.querySelector(".header-top ul i")
menuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transfrom = " translateX(0%);"
    document.querySelector(".header-top ul").style.opacity = "1"
})
closeBtn.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transfrom = " translateX(100%);"
    document.querySelector(".header-top ul").style.opacity = "0"
})