let submit1=()=>{
    let name=document.querySelector("#name").value;
    let numm=document.querySelector("#numm").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;

    let ename=document.querySelector("#ename");
    let enumm=document.querySelector("#enumm");
    let eemail=document.querySelector("#email");
    let epass=document.querySelector("#epass");
    let ecpass=document.querySelector("#ecpass");

    if(name===""){
        ename.innerHTML="Please Enter your Name";
        ename.Style.color="red";
        return false;
    }

    else if(numm===""){
        enumm.innerHTML="Please Enter Number";
        enumm.Style.color="red";
        return false;
    }

    else if(email===""){
        email.innerHTML="Please Enter your Email";
        email.Style.color="red";
        return false;
    }

    else if(cpass!==pass){
        ename.innerHTML="Password Not Matched";
        ename.Style.color="red";
        return false;
    }
}

    