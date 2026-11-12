/*console.log("Hello, Worlds!!");*/

const car = "Audi A7";
let carPrice = 50000;

/*console.log(carPrice);
console.log(carValue);
console.log(carPriceNew);*/


{
 console.log(car);
 const carValue = 70000;
 let carPrice = 85500;

 var carPriceNew = 70500;
/*console.log(carValue);
 console.log(carPrice); 
 console.log(carPriceNew);*/

}

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