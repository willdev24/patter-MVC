import { alunos } from "./alunos.mjs";
import alunoModel from "./Models/aluno.model.mjs";
import alunoService from "./Services/aluno.services.mjs";
const infor = document.querySelector("#infor")
const inforAlunos = document.querySelector("#inforAluno")


const alunoServici = new alunoService()

function render(){
alunos.forEach( alunos =>{
    const model = new alunoModel(alunos)
    alunoServici.add(model)
    
})
}

render()
console.log(alunoServici.alunos)

/* contruir cabeçalho do programa
const htmlMaterias = Object.keys(alunos[0].notas).map(materias =>{
  return `<td>${materias}</td>`
}).join(" ");

const Html = document.createElement("tr")
Html.classList.add(".superior")

Html.innerHTML = "<td>nome</td>"
Html.innerHTML += htmlMaterias
infor.appendChild(Html)
*/

  /*
const Htmlnome = document.createElement("tr")
Htmlnome.innerHTML = `<td id="nome">${alunos.nome}</td>`
*/      
//pego o nome de cada materia para tirar a media

 



 
/*
// renderizar media de cada alunos
   const notas =  Object.values(alunos.media).map( notas =>{ 
    const nots = notas.toFixed(2)
 
       return `<td>${nots}</td>`
   }).join("")

   Htmlnome.innerHTML += notas
   inforAlunos.appendChild(Htmlnome)
}

render()


//adicionar aluno 

const formuario = document.querySelector("#formu")
formuario.addEventListener("submit",function(e){

  e.preventDefault()
  const cadastro = document.forms["formu"].nomes.value
  
  const obj ={ 
          _id:4,
          nome:cadastro,
          notas:{
              portuques:[10,7,8,4],
              matematica:[5,7,3,4],
              historia:[7,9,7,9],
              ciencia:[10,7,7,9],
              },
      }

  alunos.push(
    obj
  )

  inforAlunos.innerHTML =" "
  render()


})

console.log(alunos.length)

*/