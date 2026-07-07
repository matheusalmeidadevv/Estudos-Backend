/*

ATIVIDADE

Use filter pra criar um array só com produtos da categoria "roupas"
Use filter pra criar um array só com produtos que custam menos de 100
Use filter pra criar um array com produtos da categoria "calcados" e que custam mais de 50

*/

const produtos = [
    { nome: "Camiseta", preco: 49.90, categoria: "roupas" },
    { nome: "Calça", preco: 129.90, categoria: "roupas" },
    { nome: "Tênis", preco: 299.90, categoria: "calcados" },
    { nome: "Meia", preco: 19.90, categoria: "calcados" },
    { nome: "Boné", preco: 59.90, categoria: "acessorios" }
];

//Estrutura do filter: elemento => condicao
const roupas = produtos.filter(roupa => roupa.categoria === "roupas");
console.log(roupas);

const baratos = produtos.filter(produto => produto.preco < 100);
console.log(baratos);

const calcados = produtos.filter(calcado => calcado.categoria === "calcados" && calcado.preco > 50);
console.log(calcados);
