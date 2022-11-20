//Manipundo elementos HTML con JS

const heading=document.querySelector(".heading")

heading.textContent="Probando un nuevo heading"

console.log(heading.textContent)

console.log("================")

const inputNombre=document.querySelector("#nombre")
inputNombre.value="un por default"

//console.log(inputNombre)

const enlaces=document.querySelectorAll(".navegacion a")

enlaces.forEach( enlace => enlace.textContent="Probando Elemento")

//enlaces.textContent="Nuevo elemento"