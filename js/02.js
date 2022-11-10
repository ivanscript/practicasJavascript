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

const{nombre, precio, disponible}=(producto)
const{nombre:nombreCliente, id, premium}=(cliente)

console.log(nombre)
console.log(nombreCliente)