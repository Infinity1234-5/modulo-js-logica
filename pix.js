const prompt = require("prompt-sync")();

let saldo = Number(prompt("Quanto de saldo você tem na conta?:"));
let valor = Number(prompt("Qual o valor do pix?:"));
let hora = Number(prompt("Que horas são agora?:"));
let limite = 999999999999999

if (hora >= 20 || hora <= 5) {
    limite = 1000
}

if (valor > limite) {
    console.log("Pix bloqueado, ultrapassou o limite da noite de R$", limite);
} 

if (valor <= 0) {
    console.log("Valor inválido.")
} 

if (saldo >= valor) {
    saldo = saldo - valor
    console.log("Saldo:", saldo);
} else {
    console.log("Pix bloqueado!, motivo: saldo insuficiente.");
}