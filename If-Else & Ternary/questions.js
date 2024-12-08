// Q-1.

function Q1()
{
    let age=prompt("Enter you age");

// By Ternary Operator.

    // age>=18? alert("you can vote"): alert("You can't vote");

//If-Else.
    if(age>=18)
    {
        alert("you can vote"); 
    }
    else
    {
        alert("You can't vote");
    }

}

Q1();




// Q-2.

function Q2()
{
    let a=confirm("if you have completer the course confirm otherwise cancel");
    let b=confirm("do you have a certificate if yes confirm otherwise cancel");

// Ternary Operator
    // a==1 && b==1? alert("Completed"): alert("Not Completed")
// OR
    // a==true && b==true? alert("Completed"): alert("Not Completed")

// Method 2. If-Else
    if((a==1 && b==2)|| (a==true && b==true))
    {
        alert("Completed");
    }
    else
    {
        alert("Not Completed");
    }
}

Q2();




// Q-3.

function Q3()
{
    let price=prompt("enter your product price");
    let dis=confirm("Do you have 10% discount voucher");

// Ternary Operator
    // dis=true? alert("price is"+ price*.9): alert("NO Discount");

// Method 2. If-Else.
    if(dis=true)
    {
        alert("price is"+ price*.9);
    }
    else
    {
        alert("NO Discount");
    }

}

Q3();




//Q-4.

function Q4()
{
    let math=parseFloat(prompt("Enter your Maths Marks"));
    let physics=parseFloat(prompt("Enter your Physics Marks"));
    let chemistry=parseFloat(prompt("Enter you Chemistry Marks"));
    let percent= (math+physics+chemistry)*100/300;

// If-Else.
    // if(percent>=33)
    // {
    //     alert("Pass with"+ percent+ "percentage.");
    // }
    // else{
    //     alert("Fail");
    // }

// Method 2. Ternary Operator

    percent>=33? alert("Pass with"+ percent+ "Percentage."): alert("Fail");

}

Q4();




//Q-5.

function Q5()
{
    let ab=15;
    if(ab%2==0)
    {
        alert("this is even")
    }
    else{
        alert("This is odd")
    }

}

Q5();




// Q-6.

function Q6()
{
    let del=confirm("Are you sure you want to delete.");

// If-Else.
    // if(del==true)
    // {
    //     alert("Deleted Successfully")
    // }
    // else{
    //     alert("Cancelled ")
    // }

//Method 2: By Using Ternary Operator.

    del==true? alert("Deleted"): alert("Cancelled");
}

Q6();




// Q-7.

function Q7()
{
let num=prompt("Enter any num");

if(num>0)
{
    alert("positive");
}
else if(n=0)
{
    alert("Equal");
}
else{
    alert("Negative");
}


}

Q7();




// Q-8.

function Q8()
{
// By While Loop

    let ac=1;
    // while(ac<=10)
    // {
    //     alert("NO. is " +ac);
    //     ac++;
    // }

// By For Loop

    for(let i=1; i<=10; i++)
    {
        alert("the no. is " +i)
    }

}

Q8();




// Q-9.

function Q9()
{
    let num2=0;
    do{
        num2=prompt("Enter no greater then 10:");
    }
    while(num2<10)
}

Q9();


// Q-10.

function Q10()
{
    let day=parseInt(prompt("Enter the day no. b/w 1 to 7:"));
    switch(day)
    {
        case 1: alert("Monday");
        break;
        case 2: alert("Tuesday");
        break;
        case 3: alert("Wednesday");
        break;
        case 4: alert("Thursday");
        break; 
        case 5: alert("Friday");
        break;
        case 6: alert("Saturday");
        break;
        case 7: alert("Sunday");
        break;
        default: alert("Invalid Input");
        break;
    }
    
}

Q10();