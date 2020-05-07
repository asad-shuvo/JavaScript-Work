
/*Every character in Unicode has a lot of properties. They describe what “category” the character belongs to, contain miscellaneous information about it.

For instance, if a character has Letter property, it means that the character belongs to an alphabet (of any language). And Number property means that it’s a digit: maybe Arabic or Chinese, and so on.

We can search for characters with a property, written as \p{…}. To use \p{…}, a regular expression must have flag u.

For instance, \p{Letter} denotes a letter in any of language. We can also use \p{L}, as L is an alias of Letter. There are shorter aliases for almost every property.*/
/*
let str = "A ბ ㄱ";
alert(str.match(/\p{L}/gu));
alert(str.match(/\p{L}/g));// null (no matches, as there's no flag "u")*/
/*
//Hexadecimal number

let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

alert("number: xAF".match(regexp)); // xAF
*/
/*
//chinese
let regexp = /\p{sc=Han}/gu; // returns Chinese hieroglyphs

let str = `Hello Привет 你好 123_456`;

alert( str.match(regexp) ); // 你,好
*/
//Currency
let regexp = /\p{Sc}\d/gu;

let  str = `Prices: $2, €1, ¥9`;

alert( str.match(regexp) ); // $2,€1,¥9