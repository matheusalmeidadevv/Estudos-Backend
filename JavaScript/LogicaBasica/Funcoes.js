/*Atividade prática
Crie funções para as 4 operações matemáticas básicas:

somar(a, b)
subtrair(a, b)
multiplicar(a, b)
dividir(a, b)
*/

//Diferente do JAVA, no JS você precisa dizer que é uma função colocando o "function"
//E dentro dos parametros você não precisa definir o tipo, por ser tipagem dinamica, ele converte o tipo automaticamente

function Somar(a, b){

    return console.log(`A soma entre ${a} e ${b} é ${a + b}`);

}

function Subtrair(a, b){

    return console.log(`A Subtração entre ${a} e ${b} é ${a - b}`);

}

function Multiplicar(a, b){

    return console.log(`A Multiplicação entre ${a} e ${b} é ${a * b}`);

}

function Dividir(a, b){

    if(a === 0 || b == 0){

        return console.log("ERRO!!!!!!\nA divisão de qualquer número por zero é indefinida");

    }else{
    
        return console.log(`A Divisao entre ${a} e ${b} é ${a / b}`);
    
    }
}

const readline = require("readline-sync");

do{
let num1 = readline.question("digite o primeiro numero: \n");

let num2 = readline.question("digite o segundo numero: \n");

//Precisei converter os valores recebidos em num1 e num2, para number porque sem isso ele estava concatenando
num1 = Number(num1); 
num2 = Number(num2);

var op = readline.question("O que você deseja fazer: \n1-Somar \n2-Subtrair \n3-Multiplicar \n4-Dividir \n5-Sair \n");

op = Number(op);


switch(op){

    case 1:
        Somar(num1, num2);
    break;
    
    case 2:
        Subtrair(num1, num2);
    break;
    
    case 3:
        Multiplicar(num1, num2);
    break;
    
    case 4:
        Dividir(num1, num2);
    break;
    
    case 5:
        console.log("Obrigado por usar o meu sistema :)");
    break;

    default:
        console.log("Você não digitou uma opção valida!!");
    break;


};
}while(op != 5);
