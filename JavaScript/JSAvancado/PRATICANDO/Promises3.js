/*
ATIVIDADE 2

O que é:
Um sistema de controle de acesso de um evento precisa validar, na entrada, 
se o código do ingresso digitado é válido antes de liberar a pessoa. 
Essa validação simula uma consulta a um servidor remoto, que demora um pouco pra responder.

Como funciona:
Você cria uma função validarIngresso(codigoValido, codigoDigitado) 
que recebe o código correto (o que está cadastrado no sistema) e o código que a pessoa digitou na entrada.
Depois de um tempo (simulado com setTimeout), a função responde se o acesso deve ser liberado ou não.

Regras:

Se codigoDigitado for igual a codigoValido, resolva com a mensagem "Acesso liberado".
Se codigoDigitado for diferente de codigoValido, rejeite com a mensagem "Código inválido, acesso negado".

*/

function validarIngresso(codigoValido, codigoDigitado){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(codigoDigitado === codigoValido){

                resolve("Acesso liberado");

            }
            else{

                reject("Codigo Invalido, acesso negado");

            }

        }, 1000);

    }
    
    );

};

console.log("Verificando Ingresso...");

//Descobri que usar uma chamada isolada inves de /n no meio do texto é uma boa pratica
//Então vou começar a aplicar mais isso
console.log();

validarIngresso(2728, 6407).then((msg) => console.log(msg)).catch((erro) => console.log(erro)).finally(() => console.log("Ingresso Verificado"));
validarIngresso(2728, 2728).then((msg) => console.log(msg)).catch((erro) => console.log(erro)).finally(() => console.log("Ingresso Verificado"));