/*
Atividade 2 — Closure com estado
Crie uma closure chamada criarAcumulador que:

Não recebe parâmetro
Retorna uma função que recebe um número e o acumula ao total interno
Cada chamada soma ao total anterior
*/

function criarAcumulador(){
    let total = 0;
    
    return function(numero){

        return total += numero;

    }

}

const acumula = criarAcumulador();

console.log(acumula(2));
console.log(acumula(2));
console.log(acumula(2));
console.log(acumula(2));
console.log(acumula(2));