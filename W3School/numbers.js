/*
var x = 100 / "Apple";
console.log(isNaN(x));//true

 console.log( typeof NaN);

 var x = "100";
var y = "10";
var z = x / y;       // z will be 10

var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)

var x = 100 / "10";     // x will be 10
*/
/*
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

console.log(x);
console.log(y);

typeof Infinity;     // returns "number"*/

//Base change

var myNumber = 32;
console.log( myNumber.toString(10) );
 // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000
/*
//number as Object
var x = new Number(500);             
var y = new Number(500);

// (x == y) is false because objects cannot be compared
*/
/*
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
console.log(x);
ar x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
*/
/*
var tf=123.7898;
console.log(tf.toFixed(2));
console.log(tf.toFixed(5));//return number written with a specified number of decimal
*/
/*
//The toPrecision

let x=53.678991;
console.log(x.toPrecision());//It will show whole
console.log(x.toPrecision(4));//lenght 4 , 53.67
*/
/*
//The valueOf

let y="45";
y.valueOf();
console.log(typeof y);

var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23
*/

//Converting var to Number
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

//it will change date data into milisecond
Number(new Date("2017-09-30"));    // returns 1506729600000

//pareseInt
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


//parseFloat
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
