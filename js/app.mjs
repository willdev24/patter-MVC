import { alunos } from "./alunos.mjs";
import alunosController from "./controllers/alunos.controller.mjs";
import alunoModel from "./Models/aluno.model.mjs";
import alunoService from "./Services/aluno.services.mjs";
import alunosViws from "./Views/alunos.views.mjs";

const alunoServici = new alunoService()

function render(dados){
  
dados.forEach( aluno =>{
    const model = new alunoModel(aluno)
    alunoServici.add(model)
  //localStorage.setItem("dados", JSON.stringify(alunoServici.alunos))
})
}
render(alunos)

const alunoWiew = new alunosViws(document.querySelector("[data-table-alunos]")) //passo a tabela do html table la pro alunosViwer
const alunoControll = new alunosController(alunoServici, alunoWiew) //aq ele renderiza so alunos na tela
  

//adicionar aluno 
const formuario = document.querySelector("#formu")
formuario.addEventListener("submit",function(e){

e.preventDefault()
  const cadastro = document.forms["formu"].nomes.value 




  const obj ={ 
    nome:cadastro
}
alunoControll.add( new alunoModel(obj))

location.href ="http://127.0.0.1:8080/"  
})


//editar aluno
