let go=()=>{
    // alert("Button Clicked");
    let name= document.querySelector("#text");
    name.innerHTML= "hello world";
    
}

let go1=()=>{
    let name1= document.querySelector("#text");
    name1.innerHTML= "Harshal Thakre"
}

// // H.W

let red=()=>{
    let box=document.querySelector("#color")
    box.style.backgroundColor="red";
}
let blue=()=>{
    let box=document.querySelector("#color")
    box.style.backgroundColor="blue";
}
let green=()=>{
    let box=document.querySelector("#color")
    box.style.backgroundColor="green";
}
let yellow=()=>{
    let box=document.querySelector("#color")
    box.style.backgroundColor="yellow";
}



// Practice========================================================
let a=(imageSrc)=>{
    let a1=document.querySelector("#main");
    a1.innerHTML= `<img src="${imageSrc}" alt="" height="50%" width="50%">`;
}
