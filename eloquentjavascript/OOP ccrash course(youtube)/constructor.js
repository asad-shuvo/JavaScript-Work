//Constructor ES5

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getSummary= function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
};
}

//Instate an Object
const book1=new Book('Book 1','John','2014');
const book2=new Book('Book 2','John2','2015');

console.log(book1.getSummary());
console.log(book2.getSummary());

