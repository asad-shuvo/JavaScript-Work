function interviewQuestior(job){
    if(job==='teacher'){
        return function(name){
            console.log("What subject do you teach? "+name);
        }
    }
    else if(job==='designer'){
        return function(name){
            console.log("What do you design? "+name);
        }
    }
    else{
        return function(name){
            console.log("What  do you do? "+name);
        }
    }
}

var returnVal=interviewQuestior('teacher');
returnVal('john');

interviewQuestior('designer')('mark');