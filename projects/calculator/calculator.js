let cnt=0;
let firstShow="";
let secondShow="";
let numres,secNum;
let flag=0;
let work="";

let init=()=>{
    flag=0;

}


for(let i=0;i<24;i++){
    document.getElementById("tdid"+i).addEventListener("click",function(){
      
        if(i>=0 && i<=9){
            if(flag===0){
                let num=i;
                num=num.toString();
                console.log(num);
                
                // let str=toString(i);
                // console.log(str);
                
                firstShow+=(num);
                document.getElementById('show1').innerHTML=firstShow;
            }
            else if(flag===1){
                let num=i;
                num=num.toString();
                console.log(num);
                
                // let str=toString(i);
                // console.log(str);
                
                secondShow+=(num);
                document.getElementById('show2').innerHTML=secondShow;
            }
        }
        else if(i>=10 && i<=13){
            flag=1;
            let num="";
            if(i===10){
                work="/";
                num="/";
            }
           else if(i===11){
                num="X";
                work="X";
            }
            else if(i===12){
                num="-";
                work="-";
            }
            else if(i===13){
                num="+";
                work="+";
            }
            numres=parseInt(firstShow);
            num=" "+num;
            firstShow+=(num);

                document.getElementById('show1').innerHTML=firstShow;
        }
        else if(i===23){
             secNum=parseInt(secondShow);
            let res;
if(work==='/'){
    res=numres/secNum;
}
else if(work==='+'){
    res=numres+secNum;
}
else if(work==='-'){
    res=numres - secNum;
}
else if(work==='X'){
    res=numres * secNum;
}
document.getElementById('show2').innerHTML=res;
        }
    });
}