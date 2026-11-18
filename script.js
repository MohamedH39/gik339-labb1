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

/* -----------reflektion på uppgift 2-----------------:
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

/*------------reflektion på uppgift 3:-------------*/
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


/*------------reflektion på uppgift 4:-------------*/
/*
  1. En ternary operator är en kortare version av en if sats. Där både en if sats och 
  en ternary operator gör samma sak. Alltså att de kollar om ett villkor är sant eller falskt.
  Skillanden är att i en if sats kan man lägga hur mycket kod man vill i blocket.
  Där en ternary operator är mer kompakt och man använder när man vill bestämma ett
    värde på en variabel beroende på ett villkor.

 2. Skillanden mellan == och === är att == tittar om värderna är lika med varandra och 
 === kollar strikt om både värderna och datatyperna är lika med varnadra.

 3. Det jag gjorde för att lösa if stasten var att jag använde en ! framför parantserna
 som betyder "inte" och då krävs det från if satsen att båda variablerna inte är
 null eller undefined. För att den sedan ska gå vidare och kolla om dtatyperna är number genom 
 att använda typeof operatorn. Använde också && för att koppla ihop alla villkor.

 */

/*uppgift 5*/

const num1 = 0;
let arg1;
let sum = false ;
// test 1
console.log (add(sum, 1));
sum = add ("0", 3);
console.log(sum);

//test 2
console.log(add("0", 3));
sum = add (3, "num1");
console.log(sum);

//test3
console.log(add(3, "num1"));
sum = add (-5, num1);
console.log(sum);

//test4
console.log(add(-5, num1));
sum = add (arg1, 7)
console.log(sum)

//test 5
console.log(add(arg1, 7));

//test6
console.log (add())

console.log(num1)
console.log(sum)

/*--------------reflektion av uppgift 5---------------*/ 

/*
1. Skillnaden mellan parameter, variabel och ett argument är att en variabel 
är som en behållare som man ger ett nman till och sparar i datorns minne.
En parameter liknar typ en mottagare eller en platshållare inuti funktions-
definition som t.ex dem jag använde num1 och num2.
Där ett argument är det riktiga värdet man skickar in i funktionen när man 
anropar den som t.ex add(3,"num1")

2. På den sista värdet som är num1 så får jag ut siffran 0 eftersom jag 
skapade den globala variablen const num1 =0 längst upp. Där det också finns 
en annan num1 och den är ju inne i sitt eget scope så man inte får något
annat värde än 0.

3.Jag väljer att förklara test 4 som är add(-5, num1)
Först får parametrarna värderna, och dem argument jag skickar in är -5 och den 
globala variablen num1 som är 0. Och Inne i funktionen får parametern num1 
värdet -5 och parametern num2 värdet 0, eftersom variablen num1 är 0 och global.

Och ifall om jämförelsena släpps igenom så blir det
-5 == 0 som ger false
0 === "0" ger false
0 === 0 här ges true
-5 == NaN ger också false 

Och om ternary operator släpps igenom så värderas num1 parametern som -5
vilket ger "truthy" enligt javascript. Alltså att alla siffror förutom 0 är truthy

if-satsen kollar efter om värderna är siffror alltså att dem inte är null eller 
undefined. Där både -5 och 0 är siffror så fungerar koden in i if-blokcet. 
Och det som returneras blir -5. 

Returvärderna för dem dem andra anropen

//Test1 add (sum, 1) returnerar undefined för att sum är en boolean eller
undefined alltså ingen siffra

//Test2 add ("0", 3) returnerar undefined för att en sträng finns med

//Test3 add(3, "num1") returnerar undefined för ett värde med sträng
finns med

// Test 5 add (arg1, 7 ) returnerar undefined eftersom arg1 saknar ett värde, null

//Test6 add( ) returnerar undefined för att inga rgument har skickats in



*/