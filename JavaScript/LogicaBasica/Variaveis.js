// Variaveis em JavaScript

let cidade = "Salvador";    //let serve pra declarar uma variavel temporaria, que poderá ser alterada, diferente de outras linguagens em JS você não precisa definir o tipo da variavel
cidade = "Camaçari";

const pais = "Brasil";      //const serve para declarar uma variavel constante, que nunca poderá ser alterada depois de sua definição

// Tipos Primitivos

let idade = 25;     //Criei uma variavel do tipo number para entender como funciona os tipos primitivos em JS
let nome;           //Aqui eu não coloquei um valor pra ver o tipo dela como undefined

console.log(typeof idade);      //typeof serve para verificar o tipo da variavel, passando o nome dela
console.log(typeof nome);

// Entrada e Saida de dados

const readline = require("readline-sync");      //Importando a biblioteca para entrada de dados

nome = readline.question("Qual é o seu nome? ");        //Imprime o texto, pausa o programa esperando o usuário digitar, e retorna o que foi digitado
idade = readline.question("Qual é sua idade? ");

Number(idade);              //Converte o valor que esta em idade como (String por conta da question) e para number

console.log(`${nome} tem ${idade} anos e faltam `, 100 - idade, "anos para os 100 anos de idade");