/*let d=new Date();
console.log(d);//Wed Apr 29 2020 20:25:25 GMT+0600 (Bangladesh Standard Time)

let d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d1);

console.log(new Date(2018));

var d2 = new Date("October 13, 2014 11:13:00");
console.log(d2);

var d3 = new Date("2015-03-25");
console.log(d3);

//we can descibe it only using e=year
var d4=new Date("2015");
console.log(d4);
var msec = Date.parse("March 21, 2012");
console.log(msec);

console.log(d.getFullYear());

let sd=new Date();
sd.setFullYear(2020);
console.log(sd);
*/
//compare Date

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

console.log(text);






