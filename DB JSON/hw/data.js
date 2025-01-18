
    let getdata= async ()=>{

        let url="http://localhost:3000/Renter-Details"

        let res= await fetch(url,{method: "GET"})
        let data=await res.json()
        console.log(data);
    
    
        // CRUD read
        let show=document.querySelector('#displayy')

        // data.map is high order function and internal function is call back function
        
        data.map((e)=>{

            show.innerHTML+=`
                <div>
                    <h1> ${e.Rentername}</h1>
                    <h1>${e.Age}</h1>
                    <h1>${e.Aadhar}</h1>
                    <h1>${e.DL}</h1>
                    <h1>${e.Mob}</h1>
                    <h1>${e.Email}</h1>
                    <h1>${e.Address}</h1>
                    <h1>${e.CarName}</h1>
                    <h1>${e.CarReg}</h1>


                </div>
                
                `
            })
    

            //  on click("deletee("${e.id}")")
            // let deletee
    
    
    }

