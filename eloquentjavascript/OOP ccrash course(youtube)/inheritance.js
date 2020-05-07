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
//Magazine constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;
}


//Inherit Pototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine
const mag1 = new Magazine('mag 1','john','2014','Jan');

console.log(mag1);


Magazine.prototype.constructor =Magazine;
console.log(mag1);