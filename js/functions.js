function getRandomNumber(min, max){
    min = parseInt(min);
    max = parseInt(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ParioDispari(num){
    num = parseInt(num);

    if(num % 2 == 0){
        return "pari";
    }else{
        return "dispari";
    }

}

function palindroma(string1){
    
    let result = true;
    let string2 = "";

    for( let c = string1.length-1 ; c >= 0 ; c--){
        string2 += string1[c];
    }

    for( let i = 0 ; i < string1.length ; i++){
        if(string1[i] != string2[i]){
            result = false;
        }
    }

    if(result){
        alert("palindroma");
    }else{
        alert("NON palindroma");
    }
}