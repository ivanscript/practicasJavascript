//Uniendo 2 objetos
const producto={
    nombre:"Tablet",
    precio: 500,
    disponible:true
}

const cliente={
    nombre:"Iván",
    id: 5,
    premium: true
}

/*producto.cliente=cliente

console.log(producto)*/

//los tres puntos ... son para decirle a JS que haga un copia de producto y de cliente,
//así el objeto nuevoObjeto imprime en consola nombre de producto y nombre de cliente
//sin tener que entremezclarlos y modificar la info o el objeto dado.
const nuevoObjeto={
    producto:{...producto},
    cliente:{...cliente}
}

console.log(nuevoObjeto)
console.log("--------")
console.log(producto)
console.log(cliente)