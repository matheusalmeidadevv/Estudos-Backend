
/* 
Closures é quando uma função "lembra" e acessa variáveis de um escopo externo,
 mesmo depois que essa função externa já foi finalizada.
 No exemplo abaixo, a função interna continua lembrando o valor de "numero"
 porque ele foi capturado pelo closure quando a função criarSomador foi chamada.
*/

function criarSomador(numero) {

    return function (num){
        
        return num + numero;

    }

}

const somaDe10 = criarSomador(10);
console.log(somaDe10(5) );  

const somaDe100 = criarSomador(100);
console.log(somaDe100(5));
