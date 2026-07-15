function enviarNotificacao(usuario, callback){

    setTimeout( ()=> {

        callback(usuario, "Curtiu sua foto!");

    }, 1500);

}

function exibirNaTela(nome, acao){

    console.log(`NOTIFICAÇÃO \n${nome}, ${acao} `);

}

enviarNotificacao("Ana", exibirNaTela);