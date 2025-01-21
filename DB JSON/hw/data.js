
    let getdata= async ()=>{

        let url="http://localhost:3000/Renter-Detail"

        let res= await fetch(url,{method: "GET"})
        let data=await res.json()
        console.log(data);
    
    
        // CRUD read
        let show=document.querySelector('#tablee')

        // data.map is high order function and internal function is call back function
        
        data.map((e)=>{

            show.innerHTML+=`
                <tr>
                    <td>${e.Rentername}</td>
                    <td>${e.CarName}</td>
                    <td>${e.Aadhar}</td>
                    <td>${e.CarReg}</td>
                    <td>${e.Address}</td>
                    <td>${e.Mob}</td>
                    <td onclick="deletee('${e.id}')"> Delete </td>
                    <td onclick="formupdate('${e.id}')"> update </td>
                </tr>                
                
                `
            })
}

    let deletee=(id)=>{
        let url=`http://localhost:3000/Renter-Detail/${id}`

        fetch(url,{method: "DELETE"})
    }

let inserted=()=>{
    let inpname= document.querySelector("#inpname").value;
    let inpcar= document.querySelector("#inpcar").value;
    let inpaadhar= document.querySelector("#inpaadnum").value;
    let inpcarnum= document.querySelector("#inpcarnum").value;
    let inpaddress= document.querySelector("#inpaddress").value;
    let inpmob= document.querySelector("#inpmob").value;

    let url="http://localhost:3000/Renter-Detail"

    fetch(url,
        {   
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(
                {
                    Rentername: inpname,
                    CarName: inpcar,
                    Aadhar: inpaadhar,
                    CarReg: inpcarnum,
                    Address: inpaddress,
                    Mob: inpmob
                }
            )
    })
    location.href="index.html"
    return false        
}


let formupdate= async (id)=>{
    let url=`http://localhost:3000/Renter-Detail/${id}`

    let res= await fetch(url)
    let data= await res.json()
    console.log(data)


    let datafill=`
        Enter name: <input type="text" id="upname" value="${data.Rentername}"><br><br>
        car rented: 
        <select id="upcar">
            <option value="s11" selected>scorpio s11</option>
            <option value="verna">verna</option>
            <option value="vw v">virtus gt</option>
            <option value="endevour">endevour</option>
        </select ><br><br>
        aadhar number: <input type="number" id="upaadnum" value="${data.Rentername}"><br><br>
        car registered num: <input type="text" id="upcarnum" value="${data.CarReg}" ><br><br>
        address: <input type="text" id="upaddress" value="${data.Rentername}"><br><br>
        mobile: <input type="number" id="upmob" value="${data.Rentername}" ><br><br>
        
        <input type="submit" value="update" onclick="return finalupdate(${data.id})">`

    document.querySelector('#formdata').innerHTML=datafill

    let finalupdate=(id)=>{
        let name=document.querySelector("#upname").value
        let carrent=document.querySelector("#upcar").value
        let aadnum=document.querySelector("#upaadnum").value
        let carnum=document.querySelector("#upcarnum").value
        let address=document.querySelector("#upaddress").value
        let mob=document.querySelector("#upmob").value
    
        let url=`http://localhost:3000/Renter-Detail/${id}`

        fetch(url,
            {   
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(
                    {
                        Rentername: upname,
                        CarName: upcar,
                        Aadhar: upaadhar,
                        CarReg: upcarnum,
                        Address: upaddress,
                        Mob: upmob
                    }
                )
        })
        location.href="index.html"
        return false
    
    
    }

}