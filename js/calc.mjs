
export function calcular(notas){ //retorna a media de cada materia

let media = 0
 
for(let i = 0 ; i < notas.length; ++i){

media += notas[i]

}

//console.log(media)
return media / 4

}