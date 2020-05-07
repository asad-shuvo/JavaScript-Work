function calculateAge(year){
    return 2020-year;
}
function calculateYearsUntillRetirement(year,Name){
    var Time=65-calculateAge(year);
    if(Time>0){
        console.log("Retiers in "+Time);
    }
    else console.log("Already retired");
}
calculateYearsUntillRetirement(1998,"John");
calculateYearsUntillRetirement(1928,"Kyle");
calculateYearsUntillRetirement(1988,"Mike");

//Function Expressions
var whatDoYouDo=function(job,name){
    switch(job){
        case 'teacher':
            return name+' is a '+job;
        case 'driver':
            return name+' is a '+job;
        case 'instructor':
            return name+' is a '+job;
        case 'pilot':
            return name+' is a '+job;
}
}
        console.log(whatDoYouDo('teacher','john'));