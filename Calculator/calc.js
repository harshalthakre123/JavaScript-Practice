let store=""; //"1+2"

let pressed=(value)=>{

    let disp=document.querySelector("#display");
    store=store+value; //1
    disp.innerHTML=store
}

let equall=()=>{

    let disp=document.querySelector("#display");

    disp.innerHTML=eval(store) //"1+2"=> 3 //number
    store=eval(store) //3 number
    store.toString(); //"3" string
}

let allclear=()=>{
    let disp=document.querySelector("#display");

    disp.innerHTML=""; 
    store="";
    store.toString(); //"0" string

}