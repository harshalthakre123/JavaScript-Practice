let n=0;
let inc=()=>{
    let increment= document.querySelector("#num")
    n++;
    increment.innerHTML= n;

}


let dec=()=>{
    let decrement= document.querySelector("#num")
    if(n>0)
    {
        n--;
    }
    decrement.innerHTML= n;
}


let reset=()=>{
    let rset= document.querySelector("#num")
    n=0;
    rset.innerHTML= n;
}

