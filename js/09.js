/*function sumar(numero1, numero2, numero3){
    console.log(numero1 + numero2 + numero3)
}
sumar(2, 5, 2)
sumar(0,10, 0)

function sumar(x, y=1, z){
    console.log(x+y)
    console.log(x/y + z)
}

sumar(9)
sumar(1,4,3)
sumar(10, 12)*/

function sumar(numero1, numero2, numero3){
    return [ numero1+numero2, "Hello"]
}

const [resultado, holaMundo]=sumar(1,3,4)

console.log(resultado)
console.log(holaMundo)
