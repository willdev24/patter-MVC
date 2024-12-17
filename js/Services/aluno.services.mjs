import alunoModel from "../Models/aluno.model.mjs"

// o aluno service vai conter a funçoes que iram tratar dos dados que estao armazenados dentro do array aluno
export default class alunoService{

     constructor(){
              this.alunos =[]
     }

     add(aluno){

           if(!aluno instanceof alunoModel ) throw new Error("erooouuuuuuuuuuuuu");
         // const listAtualizada = this.localStorag(aluno)
          this.alunos.push(
               aluno
          )
     }

     edit(aluno){
          return aluno
     }

     localStorag(aluno){
       
          const local = localStorage.getItem("dados")
          const localstrin = JSON.parse(local)
          const obj = [aluno, ...localstrin] 
          this.alunos.push(
               aluno
          )            
          localStorage.setItem("dados", JSON.stringify(obj))
     }

}