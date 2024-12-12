import { alunos } from "./alunos.mjs";
import alunosController from "./controllers/alunos.controller.mjs";
import alunoModel from "./Models/aluno.model.mjs";
import alunoService from "./Services/aluno.services.mjs";
import alunosViws from "./Views/alunos.views.mjs";
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

const alunoWiew = new alunosViws(document.querySelector("[data-table-alunos]"))

const alunoControll = new alunosController(alunoServici, alunoWiew)

  

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