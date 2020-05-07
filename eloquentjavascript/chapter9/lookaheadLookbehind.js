let str = "1 turkey costs 30€";

alert( str.match(/\d+(?=€)/) ); // 30, the number 1 is ignored, as it's not followed by €
//negative look ahead
alert( str.match(/\d+(?!€)/) );
alert( str.match(/\d+(?=\s)(?=.*30)/) ); // 1

//Look behind

//positive look behind
alert( str.match(/(?<=\$)\d+/) ); // 30 (skipped the sole number)
//negative look behind
alert( str.match(/(?<!\$)\d+/) ); // 2 (skipped the price)
