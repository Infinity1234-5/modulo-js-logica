// const aluno = "gabriel";
// const media = mediaescola
//;

// if (media >= mediaescola){
//     console.log("Aprovado");
// }else {
//     console.log("Reprovado");
// }
// const aluno2 = "joão";
// const media2 = mediaescola
//;

// if (media >= mediaescola){
//     console.log("Aprovado");
// }else {
//     console.log("Reprovado");
// }

// const aluno3 = "Maria";
// const media3 = mediaescola
//;

// if (media >= mediaescola){
//     console.log("Aprovado");
// }else {
//     console.log("Reprovado");
// }
// const aluno4 = "Fernanda";
// const media4 = mediaescola
//;

// if (media >= mediaescola){
//     console.log("Aprovado");
// }else {
//     console.log("Reprovado");
// }

// const aluno5 = "Richard";
// const media5 = mediaescola
//;

// if (media >= mediaescola){
//     console.log("Aprovado");
// }else {
//     console.log("Reprovado");
// }
// const aluno6 = "Guilherme";
// const media6 = mediaescola
//;



// const media = [8, 5, 6, 5, 9.2, 4, 8]
// const nomes = ["Gabriel", "Jurandir", "Jorge", "Joao", "Jurema", "Joselvan"]

// console.log("Aluno: "+ nomes[3] + " Media: "+ media[3])
// for (let i = 0; i < media.length; i++) {
//    if(media[i]>= 7){
//      console.log(nomes[i] + " Aprovado")
//    }else{
//     console.log(nomes[i] + " Reprovado")
//    }
    
// }
// let soma = 0
// if (media >= mediaescola){
//     console.log("Aprovado");
// //}else {
//     console.log("Reprovado");
// }
// for (let i = 0; i < media.length; index++) {

 
const prompt = require("prompt-sync")()
const medias = []
let input;
while (input != -1){
    input = Number(prompt("Próxima média: "))
    if(input >= 0){
        medias.push(input)
    }
}

let soma = 0
let aprovados = 0
for (let i = 0; i < medias.length; i++) {
   soma = soma + medias[i]
  
   if(medias[i]>=7){
    aprovados++
   }
}
console.log("Aprovados: " + aprovados);
console.log("Média da turma: " + (soma/ medias.length).toFixed(2));
