class Book{
    constructor(title,author,year){
        this.title=title;
    this.author=author;
    this.year=year;
    }
   getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
}
   
}
//Magazine Subclass

class Magazine extends Book{
    constructor(title,author,year,month){
    super(title,author,year);
    this.month=month;
    }
}

//Instate Magazine

const mag1=new Magazine('Book 1','John','2014','Jan');
console.log(mag1);

console.log(mag1.getSummary());