
    let getdata= async ()=>{

        let url="http://localhost:3000/Renter-Details"

        let res= await fetch(url,{method: "GET"})
        let data=await res.json()
        console.log(data);
    }