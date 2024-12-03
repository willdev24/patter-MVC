import { alunos } from "./alunos.mjs";
import { calcular } from "./calc.mjs";
const infor = document.querySelector("#infor")

let i = 0;
alunos.forEach( alunos =>{

   // console.log(alunos.notas)


    alunos.media = {}
    //pego o nome de cada materia para tirar a media
    for(let notas in alunos.notas){
        alunos.media[notas] = calcular(alunos.notas[notas])
    

}

})

const htmlMaterias = Object.keys(alunos[0].notas).map(materias =>{
 
  return "<td>"+ materias +"</td>"
}).join("         ")

infor.innerHTML = htmlMaterias