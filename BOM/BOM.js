//-----------------------------------------------Browser Object Model-
// 

// 1. Alert
// alert with ok button.

window.alert("Thanks for visiting")


// 2. Confirm
// two buttons are there 1. ok(true)  2. cancel(false)

let answer=window.confirm("Are you sure?"); //answer is used to store the response of confirm in boolean datatype.
console.log(answer);


// 3. Prompt
// it holds the property of confirm with inclusion of input(ans of any question)

let ans= window.prompt("Enter your name");
console.log(ans);


function bom(){



// sum of two numbers

let n1= parseFloat(window.prompt("Enter number 1"));
let n2= parseFloat(prompt("Enter number 2"));

window.alert(n1+n2);


// Confirm Question

let ok= confirm("Is website is good?");
if(ok==true)
{
    alert("Thankyou for visiting");
    
}
else{
    alert("Sorry for")
}

} 

bom()
  