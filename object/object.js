let text="This is string"; //string.
let arr1=["Harshal", 20, "Bhopal"]; //Array

// Object

let student={
    name:"Harshal",
    age: 20,
    city:"Bhopal",
    welcome: function(){
        console.log(`Welcome To ${this.name} Home.`)
    },
    fruits:["Apple", "Mango", "Banana", "DragonFruit"]

    // name:"harsh"  //it always overwrite because of  
}

// console.log(student.fruits[3]);


// console.log(student.name); //access the object.

// Adding in object.

student.email="harshalthakre0403@gmail.com"; //new added data.
// console.log(student);
student.age=25;   // update b using key.
// console.log(student.age);

delete student.city; //delete. 
// console.log(student);

student.welcome(); //calling function.
