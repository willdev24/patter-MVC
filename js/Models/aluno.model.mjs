
import { calcular } from "../calc.mjs"

//todas as operaçoes nos alunos, irao ser de responsabilidade de Services
export default class alunoModel{
     idds = 0
  
    constructor({nome,_id,notas} = {notas:{}}){
     this.nome = nome
     this.id = _id !== undefined ? _id : alunoModel.generateID()
     this.notas = {...notas}
     this.medias = {}

      for(let notas in this.notas){//pego o nome de cada materia para tirar a media
                this.medias[notas] = calcular(this.notas[notas]) 
          }

      }

       static generateID(){ //responsavel por gerar um id 
          const quantidadedeAlunos = alunos.length 

          function gerar(quantidade){
            const gerandoId = alunos.findIndex( itensID => itensID._id == quantidade)           
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

};

