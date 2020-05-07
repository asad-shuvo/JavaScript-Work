/*let str = "+7(903)-123-45-67";

let regexp = /\d/g;

alert( str.match(regexp) ); // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// let's make the digits-only phone number of them:
alert( str.match(regexp).join('') ); // 79031234567*/


/*let str="hi what is that";
let str1="#$ a g";
let regexp=/\s/;//use to found space
let regexp1=/\w/gi;//latin,alphabet and digit
let arr2=str1.match(regexp1);
alert(arr2);

//let arr=str.match(regexp);
//alert(arr.index);*/
/*
let str="is there a CS4";
let regexp=/CS\d/;//search fora CS following by a digit

alert(str.match(regexp));

alert( "I love HTML5!".match(/\s\w\w\w\w\d/) ); // ' HTML5'*/
/*
//Incerse classes
let str = "+7(903)-123-45-67";

alert( str.match(/\d/g).join('') ); // 79031234567

alert(str.replace(/\D/g,""));// 79031234567*/

/*alert( "Z".match(/./) ); // Z
let regexp = /CS.4/;

alert( "CSS4".match(regexp) ); // CSS4
alert( "CS-4".match(regexp) ); // CS-4
alert( "CS 4".match(regexp) ); // CS 4 (space is also a character)

alert( "CS4".match(/CS.4/) ); // null, no match because there's no character for the do
alert( "A\nB".match(/A.B/) ); // null (no match)
alert( "A\nB".match(/A.B/s) ); // A\nB (match!)*/
/*
//Following 3 will work(match for any char);
alert("A\nB".match(/A[\s\S]B/));
alert("A\nB".match(/A[\d\D]B/));
alert("A\nB".match(/A[^]B/));*/

//Beware of space or spaces

alert("1-5".match(/\d-\d/));//1-5
alert("1 - 5".match(/\d-\d/));//null

//2 way to solve
alert("1 - 5".match(/\d - \d/));
alert("1 - 5".match(/\d\s-\s\d/));

