alert('chapter 5.1'.match(/\d\.\d/));
alert( "Chapter 511".match(/\d\.\d/) ); // null (looking for a real dot \.)
//Parenthesis
alert( "function g()".match(/g\(\)/) ); // "g()"

//Backlash
alert( "1\\2".match(/\\/) ); // '\'