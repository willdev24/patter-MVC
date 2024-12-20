import alunoModel from "../Models/aluno.model.mjs"

//essa class vai interligar entre o viewr e o service 
export default class alunosController{
    constructor(service,view){
        this.localStorag = service.localStorag
        this.service = service.alunos
        this.view = view

        view.render(service.alunos)
    }

    add(_aluno){ 
        this.view.render(this.localStorag( this.service, _aluno))

    }

}