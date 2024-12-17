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
       
        this.tableBody.innerHTML = ""

        alunos.forEach( aluno => { 
         let Htmlnome = document.createElement("tr")
             Htmlnome.innerHTML = `<td id="nome">${aluno.nome}</td>`
               
               Object.values(aluno.medias).forEach(notas =>{
                    const netas = notas.toFixed(2)
                    Htmlnome.innerHTML += `<td>${netas}</td>`
                })
                
          this.tableBody.appendChild(Htmlnome)

        });
    }
}