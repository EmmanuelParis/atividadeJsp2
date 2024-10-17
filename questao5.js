const numeros = [1, 2, 3, 4, 5, 6];

function dobrarPares(numeros){
    const numerosPares = numeros.filter(num => num % 2 == 0)
    const paresDobrados = numerosPares.map(num => num * 2)

    return paresDobrados
}



console.log("Lista de Numeros:", numeros);


console.log("Numeros Pares Dobrados:", dobrarPares(numeros));
