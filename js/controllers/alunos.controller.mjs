//essa class vai interligar entre o viewr e o service 
export default class alunosController{
    constructor(service,view){

        this.service = service 
        this.view = view

        view.render(service.alunos)
    }


}