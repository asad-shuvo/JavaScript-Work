const years=[1998,1978,1988,1999,1976];

var ages5=years.map(function(el){
                    return 2020-el;
                    });
console.log(ages5);

let ages6 = years.map(el => 2020-el);

console.log(ages6);


ages6 = years.map((el, index) =>
                 `Age element ${index + 1}: ${2020 - el}.`
                 );


console.log(ages6);


ages6 = years.map((el,index)=>{
    const now = new Date().getFullYear();
    const age=now -el;
    return `Age element ${index + 1}: ${age}.`
})

console.log(ages6);