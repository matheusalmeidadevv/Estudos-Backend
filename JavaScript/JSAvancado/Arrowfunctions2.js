 
/*crie um array de números e use arrow functions pra processar ele:

Crie um array com 5 números quaisquer (positivos, negativos, misturados)
Crie uma arrow function dobrar que recebe um número e retorna ele multiplicado por 2
Crie uma arrow function eMaiorQueCinco que recebe um número e retorna true se for maior que 5
Chame as duas funções pra cada elemento do array usando for...of e imprima os resultados
*/

const numeros = [10, -2, -15, 5, 100];

const dobrarNumero = n => n * 2; 
const eMaiorquecinco = n => n > 5;

for(let numero of numeros){

    console.log(dobrarNumero(numero));

    console.log(eMaiorquecinco(numero));

}
