let num = [10,20,30,40,50]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
// Percorrendo a coleção com for in e imprimindo os elementos
for (n in num) {
    console.log(num[n])
}

// Os dois loops são exatamente iguais
// Já o for of itera diretamente os elementos dentro da coleção.

for (n of num) {
    console.log(n)
}