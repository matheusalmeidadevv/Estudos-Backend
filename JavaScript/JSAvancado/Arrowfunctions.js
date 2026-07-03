/*
Crie as seguintes arrow functions do zero (sem função pronta pra converter):

calcularArea — recebe largura e altura, retorna a área (multiplicação dos dois)
ePositivo — recebe um número, retorna true se for maior que zero, false se não
cumprimentar — recebe nome e periodo (ex: "manhã"), retorna "Bom(a) manhã, João!"
quadrado — recebe um número, retorna ele elevado ao quadrado (** 2)
*/

//Isso é um Arrow Function, uma forma alternativa de escrever funções, com sintaxe mais curta
const calcularArea = (largura, altura) => largura * altura;

//chamamos ela normalmente, a unica coisa que muda é a criação
console.log(calcularArea(3, 5));

//Por conta de > ser um simbolo que determina uma condicional ela ja vai retornar true ou false automaticamente
const ePositivo = (n) => n>0;

console.log(ePositivo(-3));

const cumprimentar = (nome, periodo) => `Bom(a) ${periodo}, ${nome}`;

console.log(cumprimentar("Matheus", "Dia"))

//Operação de potenciação
const quadrado = n => n ** 2;

console.log(quadrado(3));