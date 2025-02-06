// 1 crea una funzione che controlli due numeri interi. ritorna 'true' se uno dei due è 50 o se la somma di loro due è 50

function checkNumbers(a, b) {

    let num1 = a
    let num2 = b
    return (num1 === 50 || num2 === 50 || num1 + num2 === 50);
}


console.log(checkNumbers(25, 25))


/* 2 crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
passa la stringa e la posizione come parametri e ritorna la stringa modificata */

/*
    Rimuove il carattere in una specifica posizione da una stringa.
    
    Parametri:
    - string: La stringa di input.
    - pos: La posizione del carattere da rimuovere (indice basato su 0).
    
    Restituisce:
    - La stringa con il carattere rimosso.
*/
function removeCharacterFromPosition(string, pos) {
    // Verifica che la posizione sia valida (tra 0 e la lunghezza della stringa - 1)
    if (pos < 0 || pos >= string.length) {
        return string; // Se la posizione è fuori range, ritorna la stringa originale
    }

    // Utilizza il metodo slice() per creare una nuova stringa senza il carattere alla posizione specificata
    // let newString = string.slice(0, pos) + string.slice(pos + 1);

    // Restituisce la stringa modificata
    return string.slice(0, pos) + string.slice(pos + 1); 
}

// Esempio di utilizzo
let inputString = "ciambella";
let position = 3;
let result = removeCharacterFromPosition(inputString, position);

console.log(result);

/* 3 crea una funzione che controlli se due numeri siano compresi tra tra 40 e 60 o tra 70 e 100.
ritorna 'true' se rispecchiano queste condizioni altrimenti ritorna 'false'. */

/*
    Controlla se due numeri sono compresi tra 40 e 60 oppure tra 70 e 100.
    
    Parametri:
    - num1: Il primo numero.
    - num2: Il secondo numero.
    
    Restituisce:
    - true se entrambi i numeri rispettano una delle condizioni, altrimenti false.
*/
function areNumbersInRange(num1, num2) {
    // Funzione di supporto per controllare se un numero è nel range specificato
    function isInRange(num) {
        return (num >= 40 && num <= 60) || (num >= 70 && num <= 100);
    }

    // Controlla se entrambi i numeri sono nei range specificati
    return isInRange(num1) && isInRange(num2);
}

// Esempio di utilizzo
console.log(areNumbersInRange(45, 55)); // true
console.log(areNumbersInRange(75, 95)); // true
console.log(areNumbersInRange(30, 80)); // false
console.log(areNumbersInRange(50, 105)); // false


// 4 crea una funzione che accetti il nome di città come parametro e ritorni il nome stesso se inizia con 'Los' o 'New' , altrimenti ritorna 'false' 

/*
    Controlla se il nome di una città inizia con "Los" o "New".
    
    Parametri:
    - cityName: Il nome della città da controllare.
    
    Restituisce:
    - Il nome della città se inizia con "Los" o "New", altrimenti "false".
*/
function checkCityName(cityName) {
    // Verifica se la città inizia con "Los" o "New"
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
        return cityName;
    }
    return false;
}

// Esempi di utilizzo
console.log(checkCityName("Los Angeles")); // "Los Angeles"
console.log(checkCityName("New York")); // "New York"
console.log(checkCityName("Chicago")); // false


/* 5 crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. l'array deve essere passato come parametro */

/*
    Calcola la somma di tutti gli elementi di un array.
    
    Parametri:
    - numbers: Un array di numeri.
    
    Restituisce:
    - La somma di tutti gli elementi dell'array.
*/
function sumArray(numbers) {
    let acc = 0; // Inizializza l'accumulatore a 0

    // Itera attraverso tutti gli elementi dell'array
    for (let num of numbers) {
        acc += num; // Aggiunge il valore corrente all'accumulatore
    }

    return acc; // Restituisce la somma totale
}

// Esempi di utilizzo
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -2, 8, 4])); // 20
console.log(sumArray([])); // 0

/* 6 crea una funzione che controlli che un array NON contenga i numeri 1 o 3. se non li contiene ritorna 'true', altrimenti ritorna 'false'. */

/*
    Controlla se un array NON contiene i numeri 1 o 3.
    
    Parametri:
    - numbers: Un array di numeri.
    
    Restituisce:
    - true se l'array NON contiene 1 o 3, altrimenti false.
*/
function checkArray(numbers) {
    // Controlla se l'array include 1 o 3
    if (numbers.includes(1) || numbers.includes(3)) {
        return false;
    }
    return true;
}

// Esempi di utilizzo
console.log(checkArray([2, 4, 5, 6])); // true
console.log(checkArray([1, 2, 3, 4])); // false
console.log(checkArray([7, 8, 9])); // true
console.log(checkArray([3, 6, 9])); // false

// esercizio 6

/*
    Determina il tipo di angolo in base ai gradi forniti.
    
    Parametri:
    - degrees: Il valore dell'angolo in gradi.
    
    Restituisce:
    - "acuto" se l'angolo è minore di 90°.
    - "ottuso" se l'angolo è tra 90° e 180° (esclusi i limiti).
    - "retto" se l'angolo è esattamente 90°.
    - "piatto" se l'angolo è esattamente 180°.
*/
function getAngleType(degrees) {
    if (degrees < 90) {
        return "acuto";
    } else if (degrees === 90) {
        return "retto";
    } else if (degrees > 90 && degrees < 180) {
        return "ottuso";
    } else if (degrees === 180) {
        return "piatto";
    } else {
        return "Angolo non supportato";
    }
}

// Esempi di utilizzo
console.log(getAngleType(45)); // "acuto"
console.log(getAngleType(90)); // "retto"
console.log(getAngleType(120)); // "ottuso"
console.log(getAngleType(180)); // "piatto"
console.log(getAngleType(200)); // "Angolo non supportato"

// esercizio 7
/*
    Crea un acronimo a partire da una frase.
    
    Parametri:
    - phrase: Una stringa contenente più parole.
    
    Restituisce:
    - Una stringa con le iniziali di ogni parola, in maiuscolo.
*/
function createAcronym(phrase) {
    return phrase
        .split(" ") // Divide la frase in parole
        .map(word => word[0].toUpperCase()) // Prende la prima lettera di ogni parola e la converte in maiuscolo
        .join(""); // Unisce le lettere in una stringa
}

// Esempi di utilizzo
console.log(createAcronym("fabbrica italiana automobili torino")); // "FIAT"
console.log(createAcronym("national aeronautics space administration")); // "NASA"
console.log(createAcronym("hyper text markup language")); // "HTML"


// EXTRA


// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

/*
    Trova il carattere più usato in una stringa.
    
    Parametri:
    - str: La stringa di input.
    
    Restituisce:
    - Il carattere che appare più volte nella stringa.
*/
function mostFrequentCharacter(str) {
    let charCount = {}; // Oggetto per memorizzare la frequenza di ogni carattere
    let maxChar = ''; // Carattere più frequente
    let maxCount = 0; // Conta massima

    // Conta la frequenza di ogni carattere nella stringa
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;

        // Aggiorna il carattere più frequente
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    //return maxChar;
    return {
        charCount: charCount,
        maxChar: maxChar,
        maxCount: maxCount
    }

}


// Esempi di utilizzo
console.log(mostFrequentCharacter("barallo"));
console.log(mostFrequentCharacter("banana"));
console.log(mostFrequentCharacter("hello world"));


/* 2 Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`*/

function anagramma(sderenga1, sderenga2) {
    const res1Strip = sderenga1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    const res2Strip = sderenga2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    const res1 = mostFrequentCharacter(res1Strip)
    const res2 = mostFrequentCharacter(res2Strip)

    console.log(res1.charCount)
    console.log(res2.charCount)

    return JSON.stringify(res1) === JSON.stringify(res2);
}
console.log(anagramma("ann,a", "an*!? .;--na"))

// esercizio extra 3
/* Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. 
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
*/

let anagrammi = ["carenti", "incerta", "espatrio"]

let parola = "cartine"


function drograDramma(arr, str) {
    const res = []

    arr.map(word => anagramma(str, word) && res.push(word))

    return res
}

console.log(drograDramma(anagrammi, parola))


/* esercizio 4 extra

    Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

    Controlla se una stringa è palindroma.
    Ignora spazi, punteggiatura e rende la stringa in minuscolo.
    
    Parametri:
    - str: La stringa di input.
    
    Restituisce:
    - true se la stringa è palindroma, altrimenti false.
*/
function isPalindrome(str) {
    // Rimuove spazi e caratteri non alfanumerici, poi converte in minuscolo
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Confronta la stringa originale con la sua versione invertita
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Esempi di utilizzo
console.log(isPalindrome("Anna")); // true
console.log(isPalindrome("A Santa at NASA")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("12321")); // true



/* esercizio extra 5
    Inverte l'ordine delle cifre di un numero intero.
    
    Parametri:
    - num: Il numero intero da invertire.
    
    Restituisce:
    - Il numero con le cifre in ordine inverso.
*/
function reverseNumber(num) {
    // .toString() onverte il numero in stringa, .split('') lo divide in caratteri, .reverse() lo inverte e lo riconverte in numero
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    
    // Mantiene il segno corretto per i numeri negativi
    return num < 0 ? -reversed : reversed; // questo punto qui devo approfondirlo
}

// Esempi di utilizzo
console.log(reverseNumber(189)); // 981
console.log(reverseNumber(-567)); // -765
console.log(reverseNumber(1200)); // 21

    /* esrcizio 7 
    rea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”*/

    /*
    Inverte l'ordine dei caratteri di una stringa.
    
    Parametri:
    - str: La stringa di input.
    
    Restituisce:
    - La stringa con i caratteri in ordine inverso.
*/
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Esempi di utilizzo
console.log(reverseString("Ciao")); // "oaiC"
console.log(reverseString("Javascript")); // "tpircsavaJ"
console.log(reverseString("12345")); // "54321"