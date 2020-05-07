var marksMass=100, marksHeight=6;
var johnsMass=120,johnsHeight=6;
var markBMI=marksMass/(marksHeight*marksHeight);
var johnBMI=johnsMass/(johnsHeight*johnsHeight);
if(markBMI>johnBMI)
console.log("Mark BMI is higher then John");
else
    console.log("Mark BMI is lower then Jihn");

var ismarried="Single";
if(ismarried==="Single")console.log("He is single");

//Ternary Operations
var age =18;
age>18?console.log("He is more than 18"):console.log("He is <=18");

//switch operetions
var profession="Instructer";
switch(profession){
    case "Teacher":
    case "Instructer":
        console.log("He is a techer");
        break;
    case "Driver":
        console.log("He is a Driver");
        break;
    case "Cook":
        console.log("He is a Cook");
        break;
    default:
        console.log("Other something");
}