function soma(...valores) {
    let res = 0
    for (let v of valores) {
        res+=v
    }
    return res
}
console.log(soma(5,20,2,3,10))

// A variavel v recebe os valores que estão dentro do array valores
/*
Parametros REST Permite criar uma função sem um número determinado de valores. Propriedade length da o comprimento deste array.
Parâmetros rest nos permite representar um número indefinido de argumentos como um array.
*/
