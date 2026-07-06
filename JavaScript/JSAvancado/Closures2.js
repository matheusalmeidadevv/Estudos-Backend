/*Crie uma closure chamada criarContador que:

Não recebe parâmetro nenhum
Retorna um objeto com três funções:

incrementar — soma 1 ao contador
decrementar — subtrai 1 do contador
valor — retorna o valor atual do contador
*/

function criarContador(){
    let conta = 0;
    return {

        
        incrementar: function() {conta ++;},
        decrementar: function() {conta --;},
        valor: function() {return conta}
       

    };

}

const contador = criarContador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.decrementar();
console.log(contador.valor()); // 2