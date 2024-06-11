function esPrimo(numero) {
    if(numero < 2){
        return 'no es numero primo';
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return 'no es numero primo'
        }
        return 'Si es numero primo'
    }
}

let result = esPrimo(33);
console.log(result)