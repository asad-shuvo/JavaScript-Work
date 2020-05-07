alert(' a "gredy" and "lazy" broom'.match(/".+"/g));//Greedy
alert(' a "gredy" and "lazy" broom'.match(/".+?"/g));//Lazy

//alternative way
let regexp = /"[^"]+"/g;

let str = 'a "witch" and her "broom" is one';

alert( str.match(regexp) ); // witch, broom