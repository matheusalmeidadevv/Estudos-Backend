/*

Atividade 5 — Closure com histórico
Crie uma closure chamada criarHistorico que:

Não recebe parâmetro
Retorna um objeto com:

adicionar(valor) — adiciona um valor ao histórico
ultimo() — retorna o último valor adicionado
todos() — retorna todos os valores adicionados

*/

function criarHistorico(){
let processos = [];

    return {

        adicionar: (valor) => processos.push(valor),
        ultimo: () => `${processos[processos.length - 1]}`,
        todos: () =>  processos

    }

}

const historico = criarHistorico();

historico.adicionar("Login");
historico.adicionar("Compra");
console.log(historico.ultimo());

console.log("HISTORICO:");
console.log(historico.todos());
