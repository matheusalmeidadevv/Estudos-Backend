/*
ATIVIDADE

Use reduce pra calcular o preço total de todos os produtos (sem considerar quantidade)
Use reduce pra calcular o valor total do estoque
Use reduce pra descobrir o produto mais caro (o resultado deve ser o objeto inteiro, não só o preço)

*/

const produtos = [
    { nome: "Camiseta", preco: 49.90, estoque: 3 },
    { nome: "Calça", preco: 129.90, estoque: 1 },
    { nome: "Tênis", preco: 299.90, estoque: 2 },
    { nome: "Meia", preco: 19.90, estoque: 5 }
];

const precoTotal = produtos.reduce((acc, produto) => acc + produto.preco, 0);
console.log(`PREÇO TOTAL = ${precoTotal}`);

const patrimonio = produtos.reduce((acc, produto) => acc + produto.preco * produto.estoque, 0);
console.log(`PATRIMONIO ATUAL DA EMPRESA = ${patrimonio}`); 

const maisCaro = produtos.reduce((acc, produto) => {return (produto.preco > acc.preco) ? produto : acc;});
console.log(maisCaro);