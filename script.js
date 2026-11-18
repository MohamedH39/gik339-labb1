/*console.log("Hello, Worlds!!");*/

/*Uppgift 2*/
/*const car = "Audi A7";
let carPrice = 50000;

console.log(carPrice);
console.log(carValue);
console.log(carPriceNew);*/


/*{
 console.log(car);
 const carValue = 70000;
 let carPrice = 85500;

 var carPriceNew = 70500;
 console.log(carValue);
 console.log(carPrice); 
 console.log(carPriceNew);

}/*

/*console.log(carPrice);
console.log(carValue);
console.log(carPriceNew);*/


/* reflektion på uppgift 2:
1* När man skapar en let variablen inuti ett kodblock 
så finns den bara där inne och den är block scoped.

Och när man skapar en const variabel inuti ett kodblock så finns 
den också bara där inne och den är block scoped. alltså attbåde const och let bara 
kan användas inuti kodblocket där de är skapade.

var däremot är ett nyckelord som inte bryr sig om blocket och den går att användas
både inuti och utanför kodblocket. Men om man deklarerar den efter consolen.log() 
så blir den undefined eftersom den inte är definierad än.


2* Alla console.log() variabler från nyckelorden let, const och var skrevs ut när 
console.log( ) var inuti kodblocket { } där utskriften 
blev 70000, 85500 och 70500

När alla console.log () är efter kodblocket {} så skrevs bara variabeln carPrice 
från nyckelordet let som är utanför kodblocket, och utskriften blir 50000. 
Fast när jag använder devtool konsolen och skriver in manuellt console.log(carPriceNew) 
så skrivs även 70500 ut.

Och när alla console.log() är innan kodblocket så skrivs bara carPrice ut som blir 50000, 
där variabeln carValue ger ReferenceError eftersom carValue inte är defined. 
När det kommer till variablen carPriceNew så ger konsolen 
undefined eftersom carPriceNew deklareras efter console.log(carPriceNew)

*/

/*Uppgift 3 --- Uppgift 4*/
const add = (num1, num2) => {
 console.log(num1 == 0)
 console.log(num2 === "0")
 console.log(num2 === 0)
 console.log(num1 == NaN)

 console.log(num1 ? "truthy" : "falsy" )

 if(!(num1 === null || num1 === undefined )&& 
 !(num2 === null || num2 === undefined ) && 
 typeof num1=== "number" && typeof num2 === "number")
{
    console.log ("parametrarna stämmer öeverens med kraven")
    return num1+ num2;
}

else {console.log("det är någon av parametrarna som är felaktigt")}

    
}

console.log(add(23,19));


/*testning av let
let add = (num1, num2) => {
    return num1+ num2;
}
console.log(add(23,19));*/

/*reflektion på uppgift 3:*/
/* 
1. Det hände inget speciellt när jag använde nyckelordet let istället för 
const. Då jag fortfrande fick ut 42 som svar när jag körde.Men det som kan bli 
ett problem när man använder let är att man rikserar att av misstag skriva över
funktionens värde längre ner i koden. T.ex att man råkar skriva add=89, och då
försvinner själva funktionen permanent. Därför används cosnt för då blir funktionen
låst och går inte att skriva över. 

2. När man istället använder en funktionsdeklaration så ser det ut 
function add (num1, num2) {
    return num1+ num2;
}
console.log(add(23,19));

3.Det som return gör är att den skickar tillbaka värdet som man vill ha
där funktionen anropas. I denna kod såskickar den tillbaka summan 
av num1 och num2 som är 42. 
*/

