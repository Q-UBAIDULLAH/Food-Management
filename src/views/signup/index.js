import '../../App.css';
import image from '../../assets/Fast-Food-Free-PNG-Image.png'
import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import { register } from '../../config/firebase';
function Signup()
{
    const navigate=useNavigate()
 const[fullname,setfullname]=useState()
 const[email,setemail]=useState()
 const[number,setnumber]=useState()
 const[password,setpassword]=useState()
 const user={fullname,email,password,number}
 const signup=async()=>{
     try {

        const registercall=await register(user)
        navigate('/login')
console.log(registercall,"registercall")
    } catch (error) {
        alert(error)
    }
  
}

return(
    <div className="signup">
        <div className='signup-1'>
<p className='food'>food</p>
<div>
 
    <img width={370} height={370} src={image}></img>
</div>

        <div className='sub-signup'>

       <p id='signup-1'>Sign Up</p> 
       <label className='label'>Fullname</label><input className='input' onChange={(e)=>setfullname(e.target.value)}  placeholder="Fullname"></input>
       <label className='label'>Email</label><input className='input' onChange={(e)=>setemail(e.target.value)} placeholder="Email"></input>
       <label className='label'>Number</label><input className='input' onChange={(e)=>setnumber(e.target.value)} type="number" placeholder="Number"></input>
       <label className='label'>Password</label><input className='input' onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>

<button id='sign-btn' onClick={signup}>Sign Up</button>
</div> 
    </div>
    </div>
)
}
export default Signup;