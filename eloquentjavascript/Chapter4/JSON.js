let string=JSON.stringify({
    squriell: false,
    events:["Weekends"]
})

console.log(string);

console.log(JSON.parse(string).events);