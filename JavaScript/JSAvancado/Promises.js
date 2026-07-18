/*
Atividade — Promises
Crie uma função chamada verificarSaldo(saldo, valorSaque) que retorna uma Promise. Dentro dela:

Se valorSaque for menor ou igual ao saldo, resolva a Promise com a mensagem "Saque de R$X aprovado".
Se valorSaque for maior que o saldo, rejeite a Promise com a mensagem "Saldo insuficiente".

Depois, chame essa função duas vezes: uma vez com um saque que deve dar certo, 
e outra com um saque que deve falhar — usando .then(), .catch() e .finally() pra tratar os dois casos.
*/

function verificarSaldo(saldo, valorSaque){

return new Promise((resolve, reject) =>{

    setTimeout(() => {

    if(valorSaque <= saldo){
        resolve(`Saque de R$${valorSaque} aprovado`);
    }
    else{
        reject(`Saldo Insuficiente`);
    }
    
}, 2000);
});

}

//Aqui é necessario que o then e catch tratem da mesma operação para verificar 
// e retornar o resultado independente de ter passado no teste ou não
verificarSaldo(100, 10)
.then((msg) => console.log(msg))
.catch((erro) => console.log(erro))
.finally(() => console.log("---- // ----"));

verificarSaldo(10, 100).then((msg) =>  console.log(msg))
.catch((erro) => console.log(erro))
.finally(() => console.log("---- Encerrando o programa ----"));

//Coloquei isso embaixo para que possa comprovar que a operação é assincrona
console.log("---- Iniciando o programa ---- ");