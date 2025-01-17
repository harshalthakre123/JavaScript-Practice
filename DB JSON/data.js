// async await is used to make asynchronous synchronous
let fetchData= async ()=>{

  let url="http://localhost:3000/Engineers"

  let res= await fetch(url, {method:"GET"}) 
  let data= await res.json()
  console.log(data);


}