let safeMissile = function(){
    console.log('Its 1');
}
safeMissile();
safeMissile =2;
console.log(safeMissile);

safeMissile = function(){
    console.log("its 2");
}
safeMissile();