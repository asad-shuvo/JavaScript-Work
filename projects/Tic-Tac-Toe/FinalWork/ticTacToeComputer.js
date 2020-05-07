//Inially Array Declare
let arr = [];
for(let i=0;i<9;i++){
    arr.push(3);
}
let cnt=0,flag=0,flag2=0;
let playerScore1 = 0, playerScore2 = 0 , tie =0;

//Initial Function
let init = (option)=>{

    
    for(let i=0;i<9;i++){
        arr[i]=3;
    }
    for(let i=0;i<9;i++){
        document.getElementById("wb"+i).src="whiteBackground.jpg";
       }
    let element=document.getElementById("id1");
   element.innerHTML=``;
    element.style.color="";
    element.style.border="";
    
    cnt=0;
    flag=0;
    if(option==='human'){
        document.getElementById('thid1').innerHTML='P(0)';
        document.getElementById('thid3').innerHTML='P(X)';
    }
    else if(option==='computer'){
        document.getElementById('thid1').innerHTML='You';
        document.getElementById('thid3').innerHTML='Computer';
    }
}


let humanVsHuman=()=>{

    init('human');
    
let imageType = ()=>{
    let imgName;
    if(cnt%2===0){
        imgName="zeroImage.jpg";
    }
    else{
        imgName="crossImage.jpg";
    }
    cnt++;
    return imgName;
}

let scoreUpdate=(player,result)=>{
    if(result===false){
        tie++;
        document.getElementById("scoreTie").innerHTML=tie;
    }
    else{
        if(player===1){
            playerScore1++;
        document.getElementById("score"+player).innerHTML=playerScore1;
        }
        else if(player===2){
            playerScore2++;
        document.getElementById("score"+player).innerHTML=playerScore2;
        }
    }
}

//Set the image
let setImage = (id) =>{
    let imgName=imageType();
    document.getElementById("wb"+id).src=imgName;
    arr[id]=cnt%2;
     if(checkWinner(cnt%2)){
         console.log("Winner "+id);
         winningFunction(cnt%2);
        
        flag=1;
     }
     if(arr.indexOf(3)===-1 && flag===0){
         drawFunction();
         scoreUpdate(false,false);
     }
     console.log(arr);
}


//Print the final message
let printItems = (text,element,id)=>{

    element.innerHTML=text;
    if(id)
    element.style.color="red";
    else{
        element.style.color="green";  
    }
    element.style.border="solid";
    element.style.fontSize="20px";
    element.style.width="30%";
    element.style.margin="auto";
    element.style.padding="10px";
}


//Winning function 
let winningFunction=(id)=>{
    for(let i=0;i<9;i++){
        arr[i]=2;
    }
    let player=(id===0)?2:1;
    let element=document.getElementById("id1");
    let text=`Winner is Player ${player}`;
    scoreUpdate(player,true);
    printItems(text,element,true);  
     
}


//Draw function
let drawFunction=()=>{
    let element=document.getElementById("id1");
    let text=`It's a Draw`;
    printItems(text,element,false);
   
}


//DOM method for every images
for(let i=0;i<9;i++){

    document.getElementById("wb"+i).addEventListener("click",function(){     

    document.getElementById("startId").innerHTML="Restart";

        if(arr[i]===3){   
            setImage(i); 
        }
     });
}

//Check winning condition
    let checkWinner=(id)=>{
        console.log(id);
        
        if(arr[0]===id && arr[1]===id && arr[2]===id)return true;
        if(arr[3]===id && arr[4]===id && arr[5]===id)return true;
        if(arr[6]===id && arr[7]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[3]===id && arr[6]===id)return true;
        if(arr[1]===id && arr[4]===id && arr[7]===id)return true;
        if(arr[2]===id && arr[5]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[4]===id && arr[8]===id)return true;
        if(arr[2]===id && arr[4]===id && arr[6]===id)return true;
    return false;
    }
}

let humanVsComputer=()=>{
    init('computer');
    // if(flag2===1)humanVsComputer();
    //Determine which type of image will be used
let imageType = ()=>{
    let imgName;
    if(cnt%2===0){
        imgName="zeroImage.jpg";
    }
    else{
        imgName="crossImage.jpg";
    }
    cnt++;
    return imgName;
}

let scoreUpdate=(player,result)=>{
    if(result===false){
        tie++;
        document.getElementById("scoreTie").innerHTML=tie;
    }
    else{
        if(player===1){
            playerScore1++;
        document.getElementById("score"+player).innerHTML=playerScore1;
        }
        else if(player===2){
            playerScore2++;
        document.getElementById("score"+player).innerHTML=playerScore2;
        }
    }
}

//Set the image
let setImage = (id) =>{
    let imgName=imageType();
    document.getElementById("wb"+id).src=imgName;
    arr[id]=cnt%2;
     if(checkWinner(cnt%2)){
         console.log("Winner "+id);
         winningFunction(cnt%2);
        
        flag=1;
     }
     if(arr.indexOf(3)===-1 && flag===0){
         drawFunction();
         scoreUpdate(false,false);
     }
     console.log(arr);
}


//Print the final message
let printItems = (text,element,id)=>{

    element.innerHTML=text;
    if(id)
    element.style.color="red";
    else{
        element.style.color="green";  
    }
    element.style.border="solid";
    element.style.fontSize="20px";
    element.style.width="30%";
    element.style.margin="auto";
    element.style.padding="10px";
}


//Winning function 
let winningFunction=(id)=>{
    for(let i=0;i<9;i++){
        arr[i]=2;
    }
    let player=(id===0)?2:1;
    let element=document.getElementById("id1");
    let text=`Winner is Player ${player}`;
    scoreUpdate(player,true);
    printItems(text,element,true);  
     
}


//Draw function
let drawFunction=()=>{
    let element=document.getElementById("id1");
    let text=`It's a Draw`;
    printItems(text,element,false);
   
}


//DOM method for every images
for(let i=0;i<9;i++){

    document.getElementById("wb"+i).addEventListener("click",function(){     

    document.getElementById("startId").innerHTML="Restart";

        if(arr[i]===3){   
            setImage(i); 

            while(true){
               
                
                let rand=Math.floor(Math.random()*9);
                console.log("computer",rand);
                if(arr[rand]===3){
                    setImage(rand);
                    break;
                }
            }
        }
     });
}

//Check winning condition
    let checkWinner=(id)=>{
        console.log(id);
        
        if(arr[0]===id && arr[1]===id && arr[2]===id)return true;
        if(arr[3]===id && arr[4]===id && arr[5]===id)return true;
        if(arr[6]===id && arr[7]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[3]===id && arr[6]===id)return true;
        if(arr[1]===id && arr[4]===id && arr[7]===id)return true;
        if(arr[2]===id && arr[5]===id && arr[8]===id)return true;
        if(arr[0]===id && arr[4]===id && arr[8]===id)return true;
        if(arr[2]===id && arr[4]===id && arr[6]===id)return true;
    return false;
    }
}