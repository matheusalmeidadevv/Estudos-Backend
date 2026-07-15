function processarPagamento(valor, callback){
    console.log(`Processando pagamento de ${valor}`);

    setTimeout( () => {
        callback("Pagamento Aprovado");
    }, 2000);

}

function finalizarCompra(mensagem){

    console.log(mensagem);

}

console.log("Iniciando compra....");

processarPagamento(100, finalizarCompra);