const recId=[123,34,45,6,7,89];
const newIds= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("error happened")
        resolve(recId);
    },1500);
});

const getRecipie=recID=>{
    return new Promise((resolve,reject)=>{
        setTimeout(ID=>{
            const recipe={
                title:"freash tomato",
                author:"Jonas"};
            resolve(`${ID}: ${recipe.title}`);
        },1500,recID);
    });
    };

    const getRelated = publisher=>{
        return new Promise((resolve,reject)=>{
            setTimeout(pub=>{
                console.log(publisher);
                const recipe={
                    title:"Italian Pizza",
                    publisher:"jonas"
                };
                resolve(`${pub}: ${recipe.title}`);
        },1500,publisher);
        });
    };

newIds.
then(ids=>{
    console.log(ids);
    return getRecipie(ids[2]);
})
.then(recipe=>{
    console.log(recipe);
    return getRelated("Jonas");
})
.then(recipe=>{
    console.log(recipe);
    
})
.catch(error=>{
    console.log(error);
    
});
