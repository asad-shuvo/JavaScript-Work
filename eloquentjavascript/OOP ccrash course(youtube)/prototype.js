//Constructor ES5

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}

//getSummary
Book.prototype.getSummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
};
//GetAge
Book.prototype.getAge=function(){
  const years = new Date().getFullYear()-this.year;
    return `${this.title} ${years}  years old`;
};

//Revise/ Change Year

Book.prototype.revise = function(newYear){
    this.year=newYear;
    this.revised=true;
}


//Instate an Object
const book1=new Book('Book 1','John','2014');
const book2=new Book('Book 2','John2','2015');

console.log(book1.getSummary());
console.log(book2.getSummary());

book2.revise('2018');
console.log(book2);