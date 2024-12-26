function q1(){
    const arr1=[3, 7, 1, 9, 2];
    arr1.sort();
    console.log(arr1);

    let arr2= arr1.map(function(num)
    {
        return num*2;
    })
    console.log(arr2)
    

}

// q1()


function q2(){
    let a=confirm("Do you want to see the numbers from 1 to 10?");
    if(a==true)
    {
        let arr=[];
        for(let i=1; i<=10; ++i)
        {
            arr[i-1]=i;
        }
        alert(arr);

    }
    else{
        alert("you cancelled the action");
    }
}

// q2()

function q3(){
    let ans2="Hello, Javascript";
    
    
}
// q3()


function q5(){
    let b=prompt("Enter the no. whose table you want to print:");
    let d="";
    for(let i=1; i<=10; ++i)
    {
        d+=(`${b} * ${i} = ${i*b}`);
    }
    alert(d);
}
q5()


