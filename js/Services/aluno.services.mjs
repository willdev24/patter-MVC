import alunoModel from "../Models/aluno.model.mjs"

// o aluno service vai conter a funçoes que iram tratar dos dados que estao armazenados dentro do array aluno
export default class alunoService{

     constructor(){
              this.alunos =[]
     }

     add(aluno){

           if(!aluno instanceof alunoModel ) throw new Error("erooouuuuuuuuuuuuu");
           
          this.alunos.push(aluno)
     }

     edit(aluno){
          return aluno
     }

}