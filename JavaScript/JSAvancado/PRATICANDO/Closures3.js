/*
Atividade 1 — Closure simples com parâmetro
Crie uma closure chamada criarMultiplicador que:

Recebe um número fator
Retorna uma função que recebe um número e o multiplica pelo fator
*/

function criarMultiplicador(numero){

    return function(multi){

        return numero * multi;
        
    }
}

const multiplicaPor2 = criarMultiplicador(2);

console.log(multiplicaPor2(10));