
const btnPalindroma = document.getElementById("btn-palindroma");
const btnDispari = document.getElementById("btn-dispari");

btnPalindroma.addEventListener("click", function(){
    let word = prompt("Inserisci parola per vedere se è palindroma");

    palindroma(word);

});

btnDispari.addEventListener("click", function(){
    let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    while(isNaN(userNumber) || userNumber > 5 || userNumber < 1){
        userNumber = parseInt(prompt("NUMERO INSERITO ERRATO! Inserisci un numero da 1 a 5"));
    }
    let userPoD = prompt(`Scegli "pari" o "dispari"`);
    while(userPoD != "pari" && userPoD != "dispari"){
        userPoD = prompt(`NON HAI INSERITO UN VALORE CORRETTO. Inserisci "pari" o "dispari"`);
    }
    console.log("Numero utente: " + userNumber);
    console.log("Scelta utente: " + userPoD);

    let somma = userNumber + getRandomNumber(1,5);
    console.log("Somma: " + somma);
    console.log("Scelta utente: " + userPoD + "La somma è: " + ParioDispari(somma));

    
    if(userPoD == ParioDispari(somma)){
        alert("Complimenti, HAI VINTO!");
    }else{
        alert("RITENTA! Sarai più fortunato");
    }
})



