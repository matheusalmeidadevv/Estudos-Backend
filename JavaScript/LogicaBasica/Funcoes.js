/*Atividade prática
Crie funções para as 4 operações matemáticas básicas:

somar(a, b)
subtrair(a, b)
multiplicar(a, b)
dividir(a, b)
*/

//Diferente do JAVA, no JS você precisa dizer que é uma função colocando o "function"
//E dentro dos parametros você não precisa definir o tipo, por ser tipagem dinamica, ele converte o tipo automaticamente

//BOAS PRATICAS 01:
// Um metodo deve fazer apenas 1 coisa, ele não pode, por exemplo, somar e imprimir essa soma, ele deve só somar ou imprimir
function Somar(a, b){

    return a + b;

}

function Subtrair(a, b){

    return a - b;

}

function Multiplicar(a, b){

    return a * b;

}

function Dividir(a, b){

    return a / b;

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
        
        console.log(`A soma entre ${num1} e ${num2} é ${Somar(num1, num2)}`);
    break;
    
    case 2:
        
        console.log(`A subtração entre ${num1} e ${num2} é ${Subtrair(num1, num2)}`);
    break;
    
    case 3:
        console.log(`A Multiplicação entre ${num1} e ${num2} é ${Multiplicar(num1, num2)}`);
    break;
    
    case 4:
        
        if(num1 === 0 || num2 === 0){

        console.log("ERRO!!!!!!\nA divisão de qualquer número por zero é indefinida");

    }else{
    
        
        console.log(`A Divisão entre ${num1} e ${num2} é ${Dividir(num1, num2)}`);
    
    }
    
    break;
    
    case 5:
        console.log("Obrigado por usar o meu sistema :)");
    break;

    default:
        console.log("Você não digitou uma opção valida!!");
    break;


};
}while(op != 5);
