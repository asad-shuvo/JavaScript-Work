//let str = `1st place: Winnie
//2nd place: Piglet
//3rd place: Eeyore`;
//
//alert( str.match(/^\d/gm) ); //1,2,3
//let str = `1st place: Winnie
//2nd place: Piglet
//3rd place: Eeyore`;
//
//alert( str.match(/^\d/g) ); //only 1

//let str = `Winnie: 1
//Piglet: 2
//Eeyore: 3`;
//
//alert( str.match(/\d$/gm) ); // 1,2,3

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

alert( str.match(/\d\n/gm) ); // 1\n,2\n