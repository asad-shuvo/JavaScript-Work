//ES5

var box5 ={
    color: 'green',
    position: 1,
    clickMe: function(){
        
       var self= this; document.querySelector('.green').addEventListener('click',function(){
           var str = 'This is box '+self.position +' and it is '+self.color;
            alert(str);
        });
    }
}
//box5.clickMe();
const box6 ={
    color: 'green',
    position: 1,
    clickMe: function(){
 document.querySelector('.green').addEventListener('click',()=>{
           var str = 'This is box '+this.position +' and it is '+this.color;
            alert(str);
        });
    }
}
//box6.clickMe();

//const box66 ={
//    color: 'green',
//    position: 1,
//    clickMe: ()=>{
// document.querySelector('.green').addEventListener('click',()=>{
//           var str = 'This is box '+this.position +' and it is '+this.color;
//            alert(str);
//        });
//    }
//}
//box66.clickMe();

function Perosn(name){
    this.name=name;
}

Perosn.prototype.myFriends5 = function(friends){
//    var self=this;
    var arr=friends.map(function(el){
        return this.name+' is friends with '+el;
    }.bind(this));
console.log(arr);
}
var friends=['A','B','C'];
new Perosn('john').myFriends5(friends);



Perosn.prototype.myFriends6 = function(friends){
//    var self=this;
    let arr=friends.map(el =>{
        return `${this.name} is friends with ${el}`;
    });
console.log(arr);
}
let friends6=['A','B','C'];
new Perosn('Mike').myFriends5(friends6);