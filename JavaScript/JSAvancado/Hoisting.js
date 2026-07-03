//Entendendo a logica por tras do hoisting



// Situação 1 - Hoisting é quando você usa uma função antes de declarar ela, isso funciona porque o JS iça as declarações pro topo antes de rodar

console.log(somar(2, 3));

function somar(a, b) {
    return a + b;
}

//Hoisting só pode ser utilizado com function, com var ele funciona parcialmente

// Situação 2 - Nesse caso ele percebe que a variavel nome existe mas não enxerga o valor, gerando assim o undefined
console.log(nome);
var nome = "Matheus";

// Situação 3 - Não funciona com variaveis let nem const, então isso aqui da erro
console.log(cumprimentar("Matheus"));

const cumprimentar = nome => `Olá, ${nome}!`;