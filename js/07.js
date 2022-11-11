let name="Danielle"
let age=25
const grades=[5, 3.4, 4.6, 5, 3.9, 4.5, 2.2]
const techs=["Javascript", "POO", "Java", "Mongo", "MySQL", "Spring Boot", "Node.js" ]
const notes={
    foreignLenguage: "Advanced English",
    personalSkills:"Reflexive, awakened imagination, purposeful, great relationships",
    weakeness:"Everything and nothing in unison"
}


/*console.log(name);
console.log(age);
console.table(grades)
console.table(techs)
console.table(notes)*/

//For calculating mean grade using for cycle
let counter=0
for(let i=0; i<grades.length; i++){
    counter+=grades[i];
}

let mean=(counter/grades.length)
console.log(mean)

const arrayAux=grades.filter(function(gradesAux){
    return gradesAux != 5
})

//console.table(arrayAux)

//to filter in a new array
const arrayAux2=grades.map(function(gradesAux2){
    return gradesAux2===3.9;
})
console.table(arrayAux2)

