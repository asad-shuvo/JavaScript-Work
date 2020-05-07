var john ={
  name: 'john',
    age:26,
    job:'teacher',
    presentation: function(style, timeOfDay){
        if(style=='formal'){
            console.log('Good '+timeOfDay+', Ladies and gentleman! I\'m '+this.name +', I\'m a '+this.age+' years old.');
        }
        else if(style=='friendly'){
             console.log('Hey! waht\'s up? I\'m '+this.name +', I\'m a '+this.age+' years old. Have a nice '+timeOfDay+'.');
        }
    }
};
john.presentation('formal','morning');
var mary={
    name:'mary',
    age:29,
    job:'designer'
};
john.presentation.call(mary,'friendly','afternoon');

//john.presentation.apply(mary,['friendly','afternoon']);

var johnFriendly= john.presentation.bind(john,'friendly');

johnFriendly('afternoon');
johnFriendly('morning');

var maryFriendly=john.presentation.bind(mary,'friendly');
maryFriendly('evening');
maryFriendly('morning');






var years=[2001solveso,1991,1980,1978,1977];
function arrayCal(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calAge(arr){
    return 2020-arr;
}

function isFullAge(limit,el){
return (el>=limit);
}

var ages=arrayCal(years,calAge);
var fullAgeJapan=arrayCal(ages,isFullAge.bind(this,20));

console.log(fullAgeJapan);






