class Student{

    
    constructor(id,fname,lname,dob){
        this.id =id;
        this.firstName = fname;
        this.lastName = lname;
        this.dob =dob;

    } 

        static myMethod(){
            console.log("This is a static Method");
        }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set setFirstName(value){
        this.firstName=value;
    }
    get age(){
        let current = new Date().getFullYear();
        return current - this.dob;
    }

    get studentRecord(){
        return `First Name : ${this.firstName} , Last Name: ${this.lastName} , Age: ${this.age} `;
    }


}


class MathStudent extends Student{

    constructor(path ,id, firstName, lastName,dob=1999){
        super(id,firstName,lastName,dob);
        this.path = path;
    }

}

class Shape{
    constructor(type ="shape"){
        this.type = type;
    }
    draw(){
        console.log("draw shape");
    }
}
class Circle extends Shape{

    constructor(type){
        super(type);
    }
    draw(){
        console.log("draw circle");
    }
}
class Triangle extends Shape{

    constructor(type){
        super(type);
    }
    draw(){
        super.draw();
        console.log("draw triangle");
    }
}
let Polygon = class extends Shape{
    
}

//let lamyaa = new Student(117,"lamyaa","alqahtani",1999,4.9);
//console.log(lamyaa.fullName);
//lamyaa.setFirstName= "amjad";
//console.log(lamyaa.studentRecord);
//console.log(lamyaa.age);

// we can't print out #gpa directly because it is decleared private

//Student.myMethod();
//-----------------------------------------

/*
let mstd = new MathStudent("algebra",777,"sara","ali");
console.log(mstd);
console.log(mstd.id);

let circle = new Shape("circle");
console.log(mstd instanceof Student);
console.log(circle instanceof Student); */

//-----------------------------------------

let c = new Circle("circle");
let t = new Triangle("Triangle");

function drawShape(s){
s.draw();
}

drawShape(c);
drawShape(t);
drawShape(new Shape());
