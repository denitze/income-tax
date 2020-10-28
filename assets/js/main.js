

/* Wenn zwei Personen im Haushalt ein zweites Input:text einfügen */

let radio2 = document.getElementById("two-people");
let radio1 = document.getElementById("one-person");
let incomeTwo = document.getElementById("einkommen2");

radio2.addEventListener("click", function() {
    incomeTwo.style.opacity =1;
});

radio1.addEventListener("click", function() {
    incomeTwo.style.opacity =0;
});


// Est von einer oder zwei Personen
function oneOrTwo() {
    if (!radio2.checked) {
        result.innerHTML = `<h2>Ihre Einkommenssteuer für eine Person beträgt:</h2>
            <h3>${Est} €</h3>`
        } else {
            Est = Est*2;
            result.innerHTML = `<h2>Ihre Einkommenssteuer für zwei Peronen beträgt:</h2>
            <h3>${Est} €</h3>`
        }
}


function calculateIncome() {
// variablen für Berechnung und vom string zur Number umwandeln
    let year = document.getElementById("years").value;
    year = Number(year);
    let income1 = document.getElementById("income1").value;
    income1 = Number(income1);
    let income2 = document.getElementById("income2").value;
    income2 = Number(income2);
    let result = document.getElementById("result");
        console.log("Test");
    var zvE = 0;

            // eine oder zwei personen versteuern? 
        if (!radio2.checked) {
            var zvE = income1;
            console.log("Ein Einkommen " + zvE);

        } else {
            var zvE = (income1+ income2)/2;
            console.log("Zwei Einkommen " + zvE);
        }


        
        // jahr 2020?!  
        if (year === 2020) {
            console.log("Wir berechnen für 2020");
            console.log(typeof year);

                if(zvE<= 9408) {
                    Est= 0;
                    result.innerHTML = `<h2>Ihre Einkommenssteuer beträgt:</h2>
                    <h3>${Est} €</h3>`
                }  else if (zvE >= 9409 && zvE <= 14532) {
                    y = (zvE - 9408)/10000;
                    Est= (972.87 * y + 1400)*y
                    Est = Est.toFixed(2)
                    oneOrTwo()

                   
                } else if (zvE >= 14533 && zvE <= 57051) {
                    z = (zvE - 14532)/10000;
                    Est= (212.02 * z + 2397)* z + 972.79;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else if (zvE >= 57052 && zvE <= 270500) {
                    Est= 0.42*zvE - 8963.74
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else{
                    Est = 0.45 * zvE - 17078.74;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                }

                // 2019?!
        } else if (year === 2019) {
            console.log("Wir berechnen für 2019");
                if(zvE<= 9168) {
                    Est= 0;
                    result.innerHTML = `<h2>Ihre Einkommenssteuer beträgt:</h2>
                    <h3>${Est} €</h3>`
                }  else if (zvE >= 9169 && zvE <= 14254) {
                    y = (zvE - 9168)/10000;
                    Est= (980.14 * y + 1400)*y
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else if (zvE >= 14255 && zvE <= 55960) {
                    z = (zvE - 14254)/10000;
                    Est= (216.16* z + 2397)* z + 965.58;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else if (zvE >= 55961 && zvE <= 265326) {
                    Est= 0.42*zvE - 8780.90
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else {
                    Est = 0.45 * zvE - 16740.68;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                }

                // 2018?!
        } else {
            console.log("Wir berechnen für 2018");
                if(zvE<= 9000) {
                    Est= 0;
                    result.innerHTML = `<h2>Ihre Einkommenssteuer beträgt:</h2>
                    <h3>${Est} €</h3>`
                }  else if (zvE >= 9001 && zvE <= 13996) {
                    y = (zvE - 9000)/10000;
                    Est= (997.80 * y + 1400)*y
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else if (zvE >= 13997 && zvE <= 54949) {
                    z = (zvE - 13996)/10000;
                    Est= (220.13* z + 2397)* z + 948.49;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else if (zvE >= 54940 && zvE <= 260532) {
                    Est= 0.42*zvE - 8621.75
                    Est = Est.toFixed(2)
                    oneOrTwo()
                } else {
                    Est = 0.45 * zvE - 16437.7;
                    Est = Est.toFixed(2)
                    oneOrTwo()
                }
        }
}
