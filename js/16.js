
const formulario= document.querySelector("#formulario")
formulario.addEventListener("submit", e =>{
    e.preventDefault()

    const nombre=document.querySelector(".nombre").value
    const password=document.querySelector(".password").value

    if(nombre==="" || password===""){
        console.log("Todos los campos son obligatorios")
    }else{
        console.log("Enviando correctamente........")
    }

    console.log(nombre)
    console.log(password)
    console.log("enviaste formulario")
})
