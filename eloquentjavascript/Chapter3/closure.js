function fun(active){
    let n=active;
//    let insideFun = (insideActive)=>{
//        return n+insideActive;
//    }
    return ()=> n;
       
//    return insideFun(3);
}

console.log(fun(10));

function wrapValue(n) {
  let local = n;
  return () => local;
}

console.log(wrapValue(10));
console.log(wrapValue(11));



