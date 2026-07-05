function criarSomador(numero) {

    return function (num){
        
        return num + numero;

    }

}

const somaDe10 = criarSomador(10);
console.log(somaDe10(5) );  

const somaDe100 = criarSomador(100);
console.log(somaDe100(5));
