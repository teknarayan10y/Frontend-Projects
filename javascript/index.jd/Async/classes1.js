// Classes
// object orented Program
class Animal{
    constructor(name){
        this.name=name
        console.log("objected is created...")
    }

    eats(){
        console.log("kha pe ho bhai")
    }

    jumps(){
        console.log("ghar kab jaya ga")
    }

}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created..")
    }
}
let a= new Animal("Pawan");
console.log(a)

let  b= new Lion("siidharth")
console.log(b)
