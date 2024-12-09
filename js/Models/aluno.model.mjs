import { alunos } from "../alunos.mjs"



//todas as operaçoes nos alunos, irao ser de responsabilidade de Services
export default class alunoServices{
     idds = 0
  
    constructor({nome,_id,notas} = {notas:{}}){
     this.nome = nome
     this.id = _id !== undefined ? _id : this.generateID()
        }

        generateID(){
          const quantidadedeAlunos = alunos.length 

          function gerar(quantidade){
            const gerandoId = alunos.findIndex( itensID => itensID._id == quantidadedeAlunos)           
            const etapaUm =  gerandoId !== -1 ? gerandoId + 1 : gerandoId;
            return etapaUm
          } 

         const valorGerado = gerar(quantidadedeAlunos)
       
         if(valorGerado == -1 ) return valorGerado
         else{
            const testar = Number
            const contador = 1
            do{
                const testarValor = valorGerado + contador
                const final = gerar(testarValor)
                
                testar = final
                contador++
           }while(testar !== -1 )
          return testar

         }
         

        }

}