/*
Atividade 4 — Closure com limite
Crie uma closure chamada criarContadorLimitado que:

Recebe um número limite
Retorna um objeto com:

incrementar() — soma 1, mas não passa do limite. Se já estiver no limite, imprime "Limite atingido"
valor() — retorna o valor atual
*/

function criarContadorLimitado(limite){
    let numero = 0;
    return {

        incrementar: () => {
            if(numero === limite){console.log("LIMITE ATINGIDO!!!");}
            else{numero++;}
        },
        valor: () => `Valor atual: ${numero}`


    }

}

const contador = criarContadorLimitado(5);


contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();


console.log(contador.valor());

