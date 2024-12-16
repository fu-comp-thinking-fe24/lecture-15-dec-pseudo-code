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

*/

let goal = 1;
let nmbrOfThrows = 0;

while (goal < 7) {
    let dice = Math.floor(Math.random() * 6) + 1;
    nmbrOfThrows++;
    console.log(`Kast ${nmbrOfThrows}: ${dice}`);
    if (dice === goal) {
        goal++;
        console.log('Träff!');
    }
}

console.log(`Grattis du vann på ${nmbrOfThrows} kast!`);