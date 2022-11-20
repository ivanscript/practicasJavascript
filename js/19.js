//Fetch api y promesas

const url="https://jsonplaceholder.typicode.com/comments"

fetch(url)
    .then((respuesta)=>{
    return respuesta.json()
})
.then((resultado)=>{
    resultado.forEach(comentario => {
        console.log(comentario)
    });
})

