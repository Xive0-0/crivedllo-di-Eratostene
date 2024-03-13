function eratostene() {
    // Generate an array to mark prime numbers
let numero = document.getElementById('numero').value;
let tabella=document.getElementById('tabella');
let risultato = parseInt(numero);
    let n=risultato;
    let numeri = [];
    for (let i = 0; i <= n; i++) numeri.push(true);

    numeri[0] = false;
    numeri[1] = false;

    // Sieve of Eratosthenes algorithm
    for (let i = 2; i * i <= n; i++) {
        if (numeri[i] === true) {
            for (let j = i * 2; j <= n; j += i) {
                if (numeri[j] === true && j % i == 0) numeri[j] = false;
            }
        }
    }

    for (let i = 0; i <= numeri.length; i++) {
        if (numeri[i]) console.log(i);
        tabella.innerHTML+= `<div>${i}<div>`;
        
    }


    return numeri;
}
