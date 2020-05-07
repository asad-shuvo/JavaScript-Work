let regexp=/html|CSE|JAVA(script)?|c/gi;
let str = "First HTML appeared, then CSS, then JavaScript";
alert(str.match(regexp));

//Time regexp

let regexpTime=/([01]\d|2[0-3]):[0-5]\d/g;

alert("00:00 10:10 23:59 25:99 1:2".match(regexpTime));