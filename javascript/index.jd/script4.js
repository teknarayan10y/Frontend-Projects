// Event
let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
   document.querySelector(".box").innerHTML = "<b> my self it will be change of the click of my style of js </b> enjoy this click"
})

button.addEventListener("contextmenu",()=>{
    alert("don hack me ")
 })

 document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
 })