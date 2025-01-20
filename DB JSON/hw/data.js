
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
                    <td onclick="deletee('${e.id}')"> Delete </td}
                </tr>                
                
                `
            })
}

    let deletee=(id)=>{
        let url=`http://localhost:3000/Renter-Detail/${id}`

        fetch(url,{method: "DELETE"})
    }