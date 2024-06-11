function palindromo(texto){
texto = texto.replace(/\s*/g, '');

return texto == texto.split('').reverse().join('');
}

console.log(palindromo('oso'));
console.log(palindromo('zorra'));
console.log(palindromo('ana'));
console.log(palindromo('ocho'));
console.log(palindromo('a n a'))

