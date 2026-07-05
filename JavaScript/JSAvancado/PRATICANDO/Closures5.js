/*

Atividade 3 — Closure com objeto
Crie uma closure chamada criarPlacar que:

Não recebe parâmetro
Retorna um objeto com:

marcarTime1() — adiciona 1 ponto ao time 1
marcarTime2() — adiciona 1 ponto ao time 2
placar() — retorna uma string com o placar atual, ex: "Time 1: 2 x 1 :Time 2"

*/

function criarPlacar(){
    let time1 = 0;
    let time2 = 0;

    return {

        marcarTime1: () => time1++,
        marcarTime2: () => time2++,
        placar: () => `Time 1: ${time1} \nTime 2: ${time2}`

    }

}

const partida = criarPlacar();

partida.marcarTime1();
partida.marcarTime1();

partida.marcarTime2();
partida.marcarTime2();
partida.marcarTime2();

console.log(partida.placar());