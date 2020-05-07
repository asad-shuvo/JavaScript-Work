//alert("toll or roll".match(/[tr]oll/gi));
//
//// find "V", then [o or i], then "la"
//alert( "Voila".match(/V[oi]la/) ); // null, no matches
//
//alert("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/gi));
//
//alert("alice@gmail.com".match(/[^\d\sA-Z]/gi));
////alert( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) ); // @,.

//alert("hi + - () / -".match(/[-().^+]/g));
//let regexp = /[\-\(\)\.\^\+]/g;
//
//alert( "1 + 2 - 3".match(regexp) ); // also works: +, -
/*
//Exact range

alert("12345 123".match(/\d{3}/));//123
alert("12345 123".match(/\d{1,}/g));//1 or more digit
alert("12345 123".match(/\d{1,3}/));//1-3*/

//short hand
//+
/*
let str = "+7(903)-123-45-67";
alert(str.match(/\d+/g));*/
//?
let str = "Should I write color or colour?";

alert( str.match(/colou?r/g) ); // color, colour
//*
alert( "100 10 1".match(/\d0*/g) ); // 100, 10, 1

//decimal
alert( "0 1 12.345 7890".match(/\d+\.\d+/g) ); // 12.345
