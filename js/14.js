//Eventos de DOM-----Inputs

const inputNombre=document.querySelector(".nombre")

//inputNombre.placeholder="Un place holder desde JS"

inputNombre.addEventListener("input", function(){
    //console.log("Escribiendo en el input")
    inputNombre.addEventListener("input", function(e){
        console.log(e.target.value)
    })
})

const inputPassword=document.querySelector(".password")
inputPassword.addEventListener("input", funcionPassword)

function funcionPassword(){
    inputPassword.type="text"

    setTimeout(()=>{
        inputPassword.type="password"   
    }, 100)
}