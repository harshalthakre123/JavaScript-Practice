// Browser object Model
// 1. Alert
// alert with ok button.
// 2. Confirm
// two buttons are there 1. ok(true)  2. cancel(false)
// 3. Prompt
// it holds the property of confirm with inclusion of input(ans of any question)

// function bom(){
//     // window.alert("Thanks for visiting")
//     let answer=window.confirm("Are you sure?") //Let answer is used to store the response of confirm in boolean datatype.
//     console.log(answer);
//  let ans= window.prompt("Enter your name")
//  console.log(ans);

// let n1= parseFloat(window.prompt("Enter number 1"))
// let n2= parseFloat(prompt("Enter number 2"))

// window.alert(n1+n2)


// {
//     let ok= confirm("Is website is good?")
// if(ok==true)
// {
//     alert("Thankyou for visiting");
    
// }
// else{
//     alert("Sorry for")
// }
// }

// } 

// bom()



function abc(){
   

// Q-1.

// let age=prompt("Enter you age");
//  age>=18? alert("you can vote"): alert("You can't vote");




// Q-2.

// let a=confirm("if you have completer the course confirm otherwise cancel");
// let b=confirm("do you have a certificate if yes confirm otherwise cancel");
// a==1 && b==1? alert("Completed"): alert("not completed")
// or other method is given below
// a==true && b==true? alert("Completed"): alert("not completed")




// Q-3.

// let price=prompt("enter your product price");
// let dis=confirm("Do you have 10% discount voucher");
// dis=true? alert("price is"+ price*.9): alert("NO Discount");




//Q-4.

// let math=parseFloat(prompt("Enter your Maths Marks"));
// let physics=parseFloat(prompt("Enter your Physics Marks"));
// let chemistry=parseFloat(prompt("Enter you Chemistry Marks"));
// let percent= (math+physics+chemistry)*100/300;

// if(percent>=33)
// {
//     alert("Pass with"+ percent+ "percentage.")
// }
// else{
//     alert("Fail")
// }

// method 2 ternary operator

// percent>=33? alert("Pass with"+ percent "percentage."): alert("Fail");




//Q-5.

    // let a=15;
    // if(a%2==0)
    // {
    //     alert("this is even")
    // }
    // else{
    //     alert("This is odd")
    // }




// Q-6.

// let del=confirm("Are you sure you want to delete.");
// if(del==true)
// {
//     alert("Deleted Successfully")
// }
// else{
//     alert("Cancelled ")
// }
// or by using ternary operator.

// del==true? alert("Deleted"): alert("Cancelled");




// Q-7.

//     let num=prompt("Enter any num");
// if(num>0)
// {
//     alert("positive")
// }
// else if(n=0)
// {
//     alert("Equal")
// }
// else{
//     alert("Negative")
// }




// Q-8.

// by While loop

// let a=1;
// while(a<=10)
// {
//     alert("NO. is " +a);
//     a++;
// }

// by For loop

for(let i=1; i<=10; i++)
{
    alert("the no. is " +i)
}




// Q-9.







}


abc();