function num(n){
for(let i = 1; i <= 2*n-1; i++){
console.log((Math.abs((n-i))+1).toString().repeat(n));
}
} 
console.log();
num(5);
