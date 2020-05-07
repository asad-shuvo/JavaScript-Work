let okIterator ="OK"[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());


class Matrix{
    constructor(width, height, elemnt = (x,y)=>undefined){
        this.width=width;
        this.height=height;
        this.content=[];
        
        for(let y=0;y<height;y++){
            for(let x=0;x<width;x++){
                this.content[y*width+x];
            }
        }
    }
    
    get(x,y){
        return this.content[y*this.width+x];
    }
    set(x,y,value){
        this.content[y*this.width+x]=true;
    }
}

let matrix=new Matrix(2,2,(x,y)=>`value ${x} ${y}`);

console.log(matrix);

for(let{x,y,value} of matrix){
    console.log(x,y,value);
}