var marksMass=100, marksHeight=6;
var johnsMass=120,johnsHeight=6;
var markBMI=marksMass/(marksHeight*marksHeight);
var johnBMI=johnsMass/(johnsHeight*johnsHeight);
var higherBMI=markBMI>johnBMI;
console.log("Is Mark BMI higher then John?"+higherBMI);