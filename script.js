
// STEGEN
/*

SET variabel mål till 1 // SET mål = 1 // Skapa variabel mål och sätt till 1
SET variabel nmbrOfThrows till 0

WHILE mål < 7 // mål är mindre än 7
    SET varabel tärning slumpat tal mellan 1 och 6
    Öka varabel nmbrOfThrows med 1 // nmbrOfThrows++ // nmbrOfThrows = nmbrOfThrows + 1
    IF tärning är lika med mål
        Öka variabel mål med 1
    END IF
END WHILE
PRINT Grattis du vann på nmbrOfThrows kast!

*/

/*
Skapa variabel för mål och sätt till 1
Skapa variabel för antalKast och sätt till 0

Loopa tills mål är större än 6
    Skapa varabel tärning och tilldela slumpat värde mellan 1 och 6
    Öka på variabel antalKast med 1
    Om tärning är lika med mål
        Öka på varabel mål med 1
Skriv ut vinstmeddelande till användare

WHILE (mål > 6)
    SET dice = random (1-6)
    antalKast++;
    IF(dice === mål)
        mål++;
    END IF
END WHILE

*/

// let goal = 1;
// let nmbrOfThrows = 0;

// while (goal < 7) {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     nmbrOfThrows++;
//     console.log(`Kast ${nmbrOfThrows}: ${dice}`);
//     if (dice === goal) {
//         goal++;
//         console.log('Träff!');
//     }
// }

// console.log(`Grattis du vann på ${nmbrOfThrows} kast!`);

// Söka efter likheter mellan ord
/*

SET variabel firstWord till INPUT från användaren
SET variabel secondWord till INPUT från användaren
SET variabel matchCount till 0;

IF firstWord och secondWord har olika många bokstäver
    PRINT Båda orden måste innehålla lika många bokstäver
END IF

FOR varje tecken i startWord, räkna med index `i`
    IF firstWord plats i är lika med secondWord plats i // IF firstWord[i] === secondWord[i] Funkar också!
        Räkna upp variabel matchCount med 1
    End IF
END FOR

PRINT Det fanns matchCount likheter mellan orden

*/

let firstWord = prompt('Skriv in första ordet');
let secondWord = prompt('Skriv in andra ordet');
let matchCount = 0;

if (firstWord.length !== secondWord.length) {
    console.log('Båda orden måste innehålla lika många bokstäver');
}

for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === secondWord[i]) {
        matchCount++;
    }
}
alert(`Det fanns ${matchCount} likheter mellan orden`);
