/*

ATIVIDADE
Use find pra buscar o produto com id === 3
Use find pra buscar o primeiro produto da categoria "roupas"
Use find pra buscar um produto com id === 99 — imprima o resultado e observe o que retorna

*/

const produtos = [

    { id: 1, nome: "Camiseta", preco: 49.90, categoria: "roupas" },
    { id: 2, nome: "Calça", preco: 129.90, categoria: "roupas" },
    { id: 3, nome: "Tênis", preco: 299.90, categoria: "calcados" },
    { id: 4, nome: "Meia", preco: 19.90, categoria: "calcados" },
    { id: 5, nome: "Boné", preco: 59.90, categoria: "acessorios" }

];

const busca = produtos.find(n => n.id === 3);
console.log(busca);

const buscaRoupa = produtos.find(n => n.categoria === "roupas");
console.log(buscaRoupa);

const busca99 = produtos.find(n => n.id === 99);
console.log(busca99);

