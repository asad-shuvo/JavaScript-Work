/*const string ="base is belong to us";
const string1 ="base is belong to us base";
const regex=/base/;
const re=new RegExp("All");
const isExisting=regex.test(string);
console.log(isExisting);//True
console.log(re.test(string));//True


const regex1=/^base/;//string must start with regex1
const regex2=/$base$/;//string must end with regex2
console.log(regex1.test(string1));
*/
/*
let str = "We will, we will rock you";

alert( str.match(/we/gi) ); // We,we (an array of 2 substrings that match)*/
/*
const string ="We will, we will rock you";
const regex=/we/i;

let result=string.match(regex);

console.log(result);//We,we

console.log(result.index);//it will show index only flag is not global
console.log(result.input);//it will show input only flag is not global
let matches = "JavaScript".match(/HTML/) || [];//it will give us a null so for avoiding error we will use []

if (!matches.length) {
  alert("No matches"); // now it works
}
*/

//Replace
alert( "We will, we will".replace(/we/i, "I") ); // I will, we will
alert("We will ,we will rock you".replace(/we/gi,"I"));


