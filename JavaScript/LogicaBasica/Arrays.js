/*
    Atividade prática
    Crie um programa que:

    Declare um array com 5 nomes quaisquer
    Imprima o primeiro e o último nome usando índices
    Adicione um novo nome no final do array
    Remova o primeiro nome do array
    Imprima o array completo depois das modificações
    Verifique se um nome específico existe no array com includes, e imprima o resultado

*/

//Diferente do JAVA, em JS você não precisa definir o tipo do array
const nomes = ["Matheus", "Julia", "Joao", "Erick", "Felipe"];

console.log(`Primeiro nome - ${nomes[0]} ------ Ultimo nome - ${nomes[4]}`);

//Adiciona um valor na ultima posição do array
nomes.push("Alef");

//Remove um valor da primeira posição do array
nomes.shift();


for(let nome of nomes){
    console.log(nome);
}

//Verifica se tem determinado elemento no array
console.log(nomes.includes("Julia"));
console.log(nomes.includes("Matheus"));