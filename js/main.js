
let btnPalindroma = document.getElementById("btn-palindroma");
let btnDispari = document.getElementById("btn-dispari");

btnPalindroma.addEventListener("click", function(){
    let word = prompt("Inserisci parola per vedere se è palindroma");

    palindroma(word);
})

function palindroma(string1){

    let risultato = true;
    let string2 = "";

    for( let c = string1.length-1 ; c >= 0 ; c--){
        string2 += string1[c];
    }

    for( let i = 0 ; i < string1.length ; i++){
        if(string1[i] != string2[i]){
            risultato = false;
        }
    }

    if(risultato){
        alert("palindroma");
    }else{
        alert("NON palindroma");
    }
    
}

btnDispari.addEventListener("click")