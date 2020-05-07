//Object of Protos

const bookProtos = {
    getSummary: function(){
         return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear()-this.year;
    return `${this.title} ${years}  years old`;
    }
}

//Create Object

//const book1=Object.create(bookProtos);
//book1.title='Book One';
//book1.author='John';
//book1.year='2014';
const book1=Object.create(bookProtos,{
    title:{value:'Book One'},
    author:{value:'John'},
    year:{value:'2014'}
});
console.log(book1);