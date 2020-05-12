let bookArr=[];
let cnt=0;
let el=document.getElementById('btnid1');
el.addEventListener("click",myFunction);

function myFunction(){
    let author = document.getElementById('inputid1').value;
    let title = document.getElementById('inputid2').value;
    let ISBN = document.getElementById('inputid3').value;
    let details={
        Author: author,
        Title:title,
        isbn:ISBN,
        id :++cnt
    };
    // let details=author+"  "+title+"   "+ISBN;
    bookArr.push(details);
    let print="";
    for (let i=0;i<bookArr.length;i++){
       let k= "<table><tr><td>'bookArr[i].Author'</td></tr></table>";
       print += k+"<br>";        
    }
    document.getElementById("pid1").innerHTML = print;
}