//responsavel por renderozar na tela 
export default class alunosViws{

    constructor(table){
        this.tableList = table
        this.tableHeader = this.tableList.querySelector("thead")
        this.tableBody = this.tableList.querySelector("tbody")
        this.materias = ["portugues","matematica","historia","ciencias"]

        this.renderHeader()
    }

    renderHeader(){ //renderizando header
      
            const htmlMaterias = this.materias.map(materias =>{
            return `<td>${materias}</td>`
            }).join(" ");

            const Html = document.createElement("tr")
            Html.innerHTML = "<td>nome</td>"
            Html.innerHTML += htmlMaterias
            
             this.tableHeader.appendChild(Html)

    }

    render(alunos){

        alunos.forEach( aluno => { 
            const Htmlnome = document.createElement("tr")
            Htmlnome.innerHTML = `<td id="nome">${aluno.nome}</td>`

            const notas =  Object.values(aluno.media).map( notas =>{ 
                const nots = notas.toFixed(2)
                return `<td>${nots}</td>`
            }).join("")
            
            Htmlnome.innerHTML += notas
            inforAlunos.appendChild(Htmlnome)

        });
    }
}