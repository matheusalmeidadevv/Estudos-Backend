/*
Implemente uma fila de atendimento (como uma fila de banco ou consultório):

Crie uma fila vazia
Adicione 4 pessoas na fila (pode ser só nomes, strings simples)
Imprima quem está sendo atendido agora (primeiro da fila) sem remover
Atenda (remova) as pessoas uma por uma, imprimindo "Atendendo: [nome]" a cada vez
Depois que todo mundo for atendido, verifique se a fila está vazia e imprima o resultado
*/

const fila = [];

fila.push("Matheus", "Joao", "Erick", "Julia");

while(fila.length > 0){

    console.log(`Proximo da fila: ${fila[0]}`);

    console.log(`Sendo atendido no momento: ${fila.shift()} \n`);

}

console.log(fila);
