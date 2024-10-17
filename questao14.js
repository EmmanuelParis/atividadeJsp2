function ehPalindromo(string) {

    const palavraInvertida = string.split('').reverse().join('');
    console.log(string);
    
    console.log(palavraInvertida);
    
    return string.toLowerCase() === palavraInvertida.toLowerCase();
    
}

console.log(ehPalindromo("Otto"));
console.log(ehPalindromo("Emmanuel"));