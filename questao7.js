const frutas = ['maçã', 'laranja', 'banana'];

function ordenarFrutas(frutas){
    const frutasAlfa = frutas.sort(Intl.Collator().compare)

    console.log(frutasAlfa);
}

console.log(frutas);

ordenarFrutas(frutas);