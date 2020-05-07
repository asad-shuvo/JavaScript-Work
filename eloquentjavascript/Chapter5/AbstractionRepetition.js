//let repeat=(n,action)=>{
//    for(let i=1;i<=n;i++){
//        action(i);
//    }
//}

//repeat(10,console.log);
//
//let labels =[];
//repeat(5,i=>{
//   labels.push(`Unit ${i+1}`); 
//});
//
////console.log(labels);
//
//function greaterThan(n){
//    return m=>m>n;
//}
//let greaterThan10=greaterThan(10);
//console.log(greaterThan10(11));
//
//function noisy(f){
//    return (...args)=>{
//        console.log("calling with",args);
//        let result=f(...args);
//        console.log("called with",args,"returned",result);
//        return result;
//    }
//}
//
//noisy(Math.min)(3,2,1);
//
//function unless(test,then,then3){
//    if(test%2==1){
//        if(test%3==0){
//            then3();
//        }
//    }
//    else then();
//}
//repeat(10,n=>{
//   unless(n,()=>{
//     console.log(n,"is even");  
//   },()=>{
//       console.log(n,"its divide by 3");
//   });
//});
let repeat=(n,action)=>{
    for(let i=1;i<=n;i++){
        action(i);
    }
}
function fizzBizz(n1,f1,f2,f3){
    if(n1%3==0 && n1%5==0){
        f1();
    }
    else if(n1%3==0 && n1%5!=0){
        f2();
    }
    else if(n1%3!=0 && n1%5==0){
        f3();
    }
}

repeat(20,n=>{
   fizzBizz(n,()=>{
       console.log(n, ' fb');
   },()=>{
       console.log(n,' Fiz');
   },()=>{
       console.log(n,' Bizz');
   }
       );
});