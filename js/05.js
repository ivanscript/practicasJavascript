const tecnologías=["Python", "Javascript", "React", "Mern"]

const nuevoArreglo=[...tecnologías,"Java Spring Boot"]

//tecnologías.pop() así se elimina el último elemento de un array
//tecnologías.shift() así se elimina el primer elemento de un array
//console.table(tecnologías)
//console.table(nuevoArreglo)

const  newObject = tecnologías.filter( function (tech) {
    //console.log(tech)
    return tech !== "Python"
})

console.log(tecnologías)
console.table(newObject)

const otroObjeto= tecnologías.filter( function(tech){
    return tech === "React"
})
console.log(otroObjeto)