/*
    DESAFIO
- Criar um programa que determine se um número é:
    - Par ou ímpar
    - Positivo ou negativo
    - Maior ou menor que 100
*/

//Não tem muitos comentarios porque a sintaxe é muito parecida com a do Java

const readline = require("readline-sync");

let op;
let num = readline.question("Digite um numero: ");

num = Number(num); // Se eu colocar Number(num) o valor só se perde, ele não é armazenado em lugar nenhum pq Number() é uma função e ela retorna essa operação de conversão

console.log(typeof num);
op = readline.question("O que você deseja fazer: \n1-Verificar se o numero é par ou impar \n2-Verificar se o numero é positivo ou negativo \n3-Verificar se ele é maior ou menor que 100\n");

switch(op){

    case "1":

        if((num % 2) == 0){

            console.log("O numero que você digitou é par");

        }
        else{

            console.log("O numero que você digitou é impar");

        }

    break;

    case "2":
        
        if(num >= 0){

            console.log("O numero digitado é positivo")

        }else{

            console.log("O numero digitado é negativo");

        }
        
    break;

    case "3":
        if(num > 100){

            console.log("O numero digitado é maior que 100");

        }else if(num == 100){

            console.log("O numero digitado é igual a 100");

        }
        else{

            console.log("O numero digitado é menor que 100");

        }
    break;

    default:
        console.log("Opção invalida");
    break;
}