// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// console.log(pos);


// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate");
// console.log(pos);


// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var sln = txt.length;
// console.log(sln);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate", 15);

// The search() method searches a string for a specified value and returns the position of the match:
// The search() method cannot take a second start position argument.
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
/*
console.log(str.slice(4,20));//start,end

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);//2nd parameter is length

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);//it starts form last*/
/*
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);
str = "Please visit Microsoft!";
var n = str.replace(/MICrosoft/i, "W3Schools");
console.log(n);
/*
/*
*/
str = "Please visit Microsoft microsoft!";
var n = str.replace(/Microsoft/gi, "W3Schools");
console.log(n);
/*
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
*/

/*
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);*/

// var str = "       Hello World!        ";
// alert(str.trim());

var str="hello world";
console.log(str.charAt(0));//return h
console.log(str[0]);//return h


var str = "HELLO WORLD";




str.charCodeAt(0);         // returns 72, return unicode



