//DOM Elements
/*
document.getElementById("demo").innerHTML="Hello World";

let x=document.getElementsByTagName("p");

for(data of x){
    console.log(data.innerHTML);
    
}

let getClass=document.getElementsByClassName("intro");



console.log(getClass[0].innerHTML);



let z=document.querySelectorAll("div.intro");

for(data of z){
    console.log(data.innerHTML);
    
}
*/
let frm=document.forms["frm1"];
function myFunction(){
var text = "";
  var i;
  for (i = 0; i < frm.length ;i++) {
    text += frm.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

//DOM HTML
document.write(Date());
  
//DOM CSS
document.getElementById("demo").style.color = "blue";
