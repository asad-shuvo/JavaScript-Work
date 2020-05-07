class Book{
    constructor(title,author,year){
        this.title=title;
    this.author=author;
    this.year=year;
    }
   getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
}
    getAge(){
        const years = new Date().getFullYear()-this.year;
    return `${this.title} ${years}  years old`;
    }
    revise(newYear){
        this.year=newYear;
    this.revised=true;
    }
    
    static topBooksStore(){
        return 'Barnes & Noble';
    }
}

//Instate Object
const book1=new Book('Book 1','John','2014');
const book2=new Book('Book 2','John2','2015');

console.log(book1.revise("2020"));
console.log(book1);
console.log(Book.topBooksStore());