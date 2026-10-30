// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];
// console.log("");
// console.log(nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");
const controleDoJogo = {
    jogando : true,
    combate : false,
}
const heroi = {
    nome : "Magno",
    dano : 6,
    vida : 10,
    veneno : 0,
    critico : 0.2,
    dano_critico : 2,
    inventario : [],
    sorte : Math.random
}

const aranha = {
    nome : "aranha da caverna",
    vida : 10,
    dano : 2,
    veneno : 0.4,
    danoVeneno : 3,
}
// // console.log(heroi.vida)
// // heroi.vida = 15;
// // heroi = 15; // erro de constante sendo mudada (TypeError: Assignment to constant variable.)
// // console.log(heroi.vida);
// heroi.inventario.push("moeda furada");

// console.log(heroi.inventario)
// console.log("O heroi: ", heroi.nome + `recebeu o item: ` + heroi.inventario[8])
//  calculodano()
 function tomarDano(heroi, inimigo){
    heroi.vida = heroi.vida - inimigo.dano
    let chance = Math.random()
    if(heroi.sorte > chance){
        console.log("Deu sorte, cara")
    }
    else if(chance <= inimigo.chance){
        heroi.veneno = inimigo.danoVeneno
      console.log("A aranha te injeta o veneno em você", + heroi.veneno + "O heroi se sente mal...")
    }
    if(heroi.vida <= 0){
        console.log("Foi ver se no seu tem pão")
    }
 }
 tomarDano (heroi, aranha)