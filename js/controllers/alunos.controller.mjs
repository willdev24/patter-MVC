//essa class vai interligar entre o viewr e o service 
export default class alunosController{
    constructor(service,view){

        this.service = service.alunos
        this.view = view

        view.render(service.alunos)
    }

    add(_aluno ){
    
        this.render(_aluno)

         

    }

}