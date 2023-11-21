
let score = "33abc"
let score1= null
let score2=undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)           // NaN

let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1))
console.log(valueInNumber1)          //0

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)         // NaN


/*
Number

"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)    // true
 
/*

Boolean

1 => true;
0 => false;
"" => false;
"Krati" => true;

*/

let s= 33

let stringNumber = String(s)
console.log(stringNumber)
console.log(typeof(stringNumber))

// **************** OPERATIONS ******************* //

let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3);
console.log(2+2);


let str1="hello"
let str2=" krati"
let str3= str1+str2
console.log(str3);

console.log("1"+2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(2+2+"3");





