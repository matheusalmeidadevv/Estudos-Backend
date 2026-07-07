/*
ATIVIDADE:

Use map pra criar um novo array só com os nomes dos produtos
Use map pra criar um novo array com os preços com 10% de desconto
Use map pra criar um novo array de objetos com nome e precoComDesconto
*/

const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 129.90 },
    { nome: "Tênis", preco: 299.90 },
    { nome: "Meia", preco: 19.90 }
];

//Aqui você utiliza a mesma variavel que você passou por parametro como elemento
// para receber o valor da propriedade do objeto
const nomesP = produtos.map(produto => produto.nome);
const precos = produtos.map(desconto => desconto.preco * 0.90)

console.log(nomesP);
console.log(precos);

//novo array de objetos utilizando arrow function, pra criar um objeto com arrow functions:
//É só você colocar () e dentro {} representando que é um objeto
const estoque =  produtos.map(produto => ({nome: produto.nome, preco: produto.preco * 0.90}));

console.log(estoque);