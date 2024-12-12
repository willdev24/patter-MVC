
import { alunos } from "../alunos.mjs"
import { calcular } from "../calc.mjs"
import alunoService from "../Services/aluno.services.mjs"

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
          console.log(alunos)
        
          function gerar(quantidade){ 
            const gerandoId = alunos.find( itensID => itensID._id == quantidadedeAlunos  )   ///se nao achar um valor retorna undefined se achar retorna o obj
            const id =  gerandoId !== undefined ? gerandoId._id : -1    
            const etapaUm =  id !== -1 ? id + 1 : id;
            return etapaUm
          }; 
const valorGerado = gerar(quantidadedeAlunos)


         if(valorGerado == -1 ){  
       
          return quantidadedeAlunos
        } else{
            const testar = 0
            const contador = 1
            console.log(valorGerado)
            do{
                const testarValor = valorGerado + contador
               console.log(testarValor)
                const final = gerar(testarValor) //errado
                
                testar = final
                contador++
           }while(testar !== -1 )
          return testar

         }
         

        }

};

