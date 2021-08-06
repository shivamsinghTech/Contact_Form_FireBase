import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TextField from '@material-ui/core/TextField';



const ContactUs=()=>{



    const[data,setData]=useState({
        name:"",
        email:"",
        mobileNumber:"",
        address:"",
    message:""
    })

const enterData=(event)=>{

    const name=event.target.name;
    const value=event.target.value;
    console.log(name,value);

    // setData((preVal)=>{
    //     return{
    //          preVal,
    //          [name]:value
    //         }
    //           })
    setData({...data,[name]:value})
   console.log(data)


}

const submit=async(e)=>{
    e.preventDefault();

    const{name,email,mobileNumber,address,message}=data;

    if(name && email && mobileNumber && address && message)
    {
    

       const res =await fetch("https://reactform-78f5c-default-rtdb.firebaseio.com/reactform.json",{
           method:"POST",
           headers:{
               "Content-Type":"aplication/json",
           },
           body:JSON.stringify({
            name,
            email,
            mobileNumber,
            address,
        message

           })

 
       });
       if(res){
           setData({
            name:"",
            email:"",
            mobileNumber:"",
            address:"",
        message:""

           })
           alert("Data stored successfully")

    }        
}
else{alert("please filled all the field")}  


        }
   
    return(<>

<div className="main" >
<h2>ContactUs</h2>
<form  method="POST">
<div class="row mb-4">
    <div class="col-sm">

  
    <TextField id="outlined-basic" label="Name" variant="outlined"  name="name" value={data.name} onChange={enterData}/>
        
    </div>
    <div class="col-sm">

    <TextField id="outlined-basic" label="YourEmail" variant="outlined" name="email" value={data.email}   onChange={enterData} />
       
    </div>
   
  </div>


{/* another row */}

<div class="row mb-4">
  
    <div class="col-sm">
    <TextField id="outlined-basic" label="Your Number" type="number" variant="outlined" name="mobileNumber" onChange={enterData} value={data.mobileNumber}/>
   
    </div>
    <div class="col-sm ">
    <TextField id="outlined-basic" label="Your Address" variant="outlined"  name="address" value={data.address}  onChange={enterData}  />
         
    </div>
   
  </div>
  {/* one more row */}

  <div class="col-sm">


  <TextField id="outlined-basic" label="Enter message....." variant="outlined" name="message" value={data.message} onChange={enterData} />

    </div>

    <span>
    <button onClick={submit}>Submit</button>

    </span>
</form>

</div>


    </>)
}
export default  ContactUs;