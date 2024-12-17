function q1(){
    let name=prompt("Enter Your Name:");
    alert("Hello "+name+"!");
}

// q1()


function q2(){
    let a=confirm("Do you like JavaScript?");
    a==1? alert("That's Great!"): alert("No. Worries, Keep Learning.");
}
// q2()

function q3(){
    let b="JavaScript is easy. I love JavaScript!";
    let c=b.replace(/JavaScript/ig, "Coding");
    console.log(c);
}

// q3()

function q4(){
    for(let i=1; i<=10; ++i)
    {
        console.log(i);
    }
}
// q4()

function q5(){
    let fruit=[];
    for(let i=0; i<3; ++i)
    {
        fruit[i]=prompt("Enter your favourite Fruit name:");
    }
    document.write(fruit);
    
}

// q5()

function q6(){
    
}