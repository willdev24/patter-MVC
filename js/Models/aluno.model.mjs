
import { alunos } from "../alunos.mjs"
import { calcular } from "../calc.mjs"


//todas as operaçoes nos alunos, irao ser de responsabilidade de Services
//alunomodel criamos o medelo a ser executado!!
export default class alunoModel{
     idds = 0
  
    constructor({nome,_id,notas} = {notas:{}}){
     this.nome = nome
     this.id = _id !== undefined ? _id : alunoModel.generateID()
     this.notas = {...notas}
     this.medias = {}


      for(let notas in this.notas){//pego o nome de cada materia para tirar a media
              /// console.log()
                this.medias[notas] = calcular(this.notas[notas]) //armazeno valor das medias dentro de um obj 
               // console.log(this.medias)                         // cada vez que roda o lop notas ele armazena o as medias na materia especifica
                                                                    // ex: primeira passada 
                                                                    // portugues: 7.75 . eai vai pro proximo loop ate chegar na ultima materia 
                                                                    // e por fim  vai pro proximo aluno depois de retornar a resposta pro app.mjs onde o mesmo salva os dados em service
          };

      }

      
       static generateID(){ //responsavel por gerar um id 
        
        const  locastora = localStorage.getItem("dados")
        const parse = JSON.parse(locastora)
        const quantidadedeAlunos = parse.length
        
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
                     //  console.log(valorGerado)
                        do{
                            const testarValor = valorGerado + contador
                       //   console.log(testarValor)
                            const final = gerar(testarValor) //errado
                            
                                    testar = final
                                    contador++
                              }while(testar !== -1 )
                              return testar

                            }
                            

      };

};

