let journal = [];

let addEntry = (events,squirrel)=>{
    journal.push({events,squirrel});
};

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


console.log(journal[0].events);
console.log(journal[1].squirrel);
console.log(journal[2]);


let tableFor =(event,journals)=>{
  let table=[0,0,0,0];
    for(let i=0;i<journals.length;i++){
        let entry=journals[i],index=0;
        if(entry.events.includes(event))index+=1;
        if(entry.squirrel)index+=2;
        table[index]+=1;
    }
    return table;
};

console.log(tableFor('pizza',journal));

var Person=[];
let addEntry2=(name,age,dateOfBirth,job)=>{
    Person.push({name,age,dateOfBirth,job});
};
addEntry2('John',23,1998,'Teacher');
addEntry2('Jake',24,1978,'Player');
addEntry2('bob',25,1990,'Doctor');
addEntry2('merry',26,1988,'Eng');

console.log(Person);

for(let entry of Person){
    console.log(`${entry.name}, ${entry.age} ${entry.dateOfBirth} ${entry.job}`);
}


let againIteratinOfJournal= (journal)=>{
  let events=[];
    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
};

console.log(againIteratinOfJournal(journal));