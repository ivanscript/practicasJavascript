const tecnologias=["Python", "Java", "MySQL", "Spring  Boot"]

const backupTecnologias=tecnologias.map(function(tech){
    if(tech==="Python"){
        return "Thymeleaf"
    }else{
        return tech
    }
})

console.log(tecnologias)