import { alunos } from "./alunos.mjs";
import { calcular } from "./calc.mjs";
const infor = document.querySelector("#infor")
const inforAlunos = document.querySelector("#inforAluno")

const htmlMaterias = Object.keys(alunos[0].notas).map(materias =>{
  return `<td>${materias}</td>`
}).join(" ");

const Html = document.createElement("tr")
Html.classList.add(".superior")

Html.innerHTML = "<td>nome</td>"
Html.innerHTML += htmlMaterias
infor.appendChild(Html)


alunos.forEach( alunos =>{

  alunos.media = {}
const Htmlnome = document.createElement("tr")
Htmlnome.innerHTML = `<td id="nome">${alunos.nome}</td>`
      

//pego o nome de cada materia para tirar a media
      for(let notas in alunos.notas){
        
      alunos.media[notas] = calcular(alunos.notas[notas])        
}
//media de cada alunos
   const notas =  Object.values(alunos.media).map( notas =>{ 
    const nots = notas.toFixed(2)
    console.log(nots)
    console.log(notas)

       return `<td>${nots}</td>`
   }).join("")

   Htmlnome.innerHTML += notas
   inforAlunos.appendChild(Htmlnome)


});
