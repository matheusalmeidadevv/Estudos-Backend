    /*
    ATIVIDADE

    O que é:
    Um sistema de estoque de uma loja precisa verificar, antes de confirmar um pedido, 
    se tem quantidade suficiente do produto disponível. 
    Essa verificação demora um pouco (imagina que é uma consulta a um banco de dados ou a um sistema de estoque físico), 
    então ela precisa ser tratada como uma operação assíncrona.

    Como funciona:
    Você cria uma função verificarEstoque(quantidadeEstoque, quantidadePedida) que simula essa consulta.
    Ela recebe quanto tem disponível no estoque e quanto o cliente está pedindo, 
    e depois de um tempo (simulado com setTimeout) responde se o pedido pode ser confirmado ou não.

    Regras:

    Se quantidadePedida for menor ou igual a quantidadeEstoque, resolva com a mensagem "Pedido de X unidades confirmado".
    Se quantidadePedida for maior que quantidadeEstoque, rejeite com a mensagem "Estoque insuficiente".

    */

    function verificarEstoque(qtdEstoque, qtdPedida){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {

                if(qtdPedida <= qtdEstoque){
                resolve(`Pedido de ${qtdPedida} unidades confirmado!`);        
                }
                else{
                    reject(`Pedido Negado!!\nEstoque Insuficiente, você tem ${qtdEstoque} unidades disponivel no estoque`);
                }

            },2000
            );
        }); 
    }

    verificarEstoque(100, 10).then((msg) => console.log(msg)).catch((erro) => console.log(erro)).finally(() => console.log("Operação finalizada\n"));
    verificarEstoque(100, 120).then((msg) => console.log(msg)).catch((erro) => console.log(erro)).finally(() => console.log("Operação finalizada\n"));
    verificarEstoque(100, 100).then((msg) => console.log(msg)).catch((erro) => console.log(erro)).finally(() => console.log("Operação finalizada\n"));

    console.log("Iniciando Operação...\n");