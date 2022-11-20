//Eventos del DOM .......Clicks

const heading=document.querySelector(".heading")
heading.addEventListener("click", function(){
    console.log("Diste click en heading")
})

const enlaces= document.querySelectorAll(".navegacion a")

enlaces.forEach(enlace => {
    enlace.addEventListener("click", ()=>{
        console.log("Clickeaste en enlace")
    })
})
