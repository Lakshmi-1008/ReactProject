import { useState } from "react";

const Loginpage = () => {
    let [username,setusername]=useState("")
    let [password,setpassword]=useState("")
   function login(){
    if(username==="abcd" && password==="1234"){
        alert("login successfull")
    }
    else{
        alert("invalid credential")
    }
   }

   
    return ( 
        <div className="username">
          UserName:  <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="enter user name" /> <br />
          Password: <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="enter password" /> <br />
           <button onClick={login}>Submit</button>

            </div>
            
     );
}
 
export default Loginpage;