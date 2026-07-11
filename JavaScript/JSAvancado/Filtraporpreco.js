/*
ATIVIDADE
    Use filter pra pegar só os produtos que custam menos de 100
    Use map em cima do resultado do filter pra criar um array só com os nomes desses produtos
    Use reduce pra calcular o preço total de todos os produtos
    Use find pra buscar um produto pelo id — crie uma função chamada buscarPorId(id) que recebe um id e retorna o produto
*/
const produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90, categoria: "roupas" },
    { id: 2, nome: "Calça", preco: 129.90, categoria: "roupas" },
    { id: 3, nome: "Tênis", preco: 299.90, categoria: "calcados" },
    { id: 4, nome: "Meia", preco: 19.90, categoria: "calcados" },
    { id: 5, nome: "Boné", preco: 59.90, categoria: "acessorios" }
];

function buscarPorID(n){

    return produtos.find(e => n === e.id);

}

console.log("Produtos que custam menos de 100:");
const menos100 = produtos.filter(n => n.preco<100);
console.log(menos100);

console.log("Nomes dos produtos que custam menos de 100:");
const menos100nomes = menos100.map(n => n.nome);
console.log(menos100nomes);

console.log("Preço total dos produtos:");
const precoTotal = produtos.reduce((acc, n) => acc + n.preco, 0);
console.log(precoTotal);

console.log("Busca por ID: ");
console.log(buscarPorID(3));