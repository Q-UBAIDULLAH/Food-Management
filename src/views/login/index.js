import '../../App.css';
import { useState } from 'react';
import Imagelogin from '../../assets/Fast-Food-Free-PNG-Image.png'
import imageback from '../../assets/shutterstock_780888979.jpg'
import { Login } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
function Signin(){
    const navigate=useNavigate()
const[email,setemail]=useState()
const[password,setpassword]=useState()
const user={email,password}
const LOGIN=async()=>{
  
     try {
        await Login(user)
        navigate('/dashboard')

     } catch (error) {
        alert(error.message)
     }
}
    return(

    <div className="signup">
        <div className='signup-1'>

        <p className='food'>food</p>

<div>
<img width={370} height={370} src={Imagelogin}></img>
</div>

<div className='sub-signup'>


            <p id='signup-1'>Login</p>
           <label className='label'>Email</label> <input className='input' placeholder='Email' onChange={(e)=>setemail(e.target.value)}></input>
          <label className='label'>Password</label>  <input type='password' className='input' placeholder='Password'onChange={(e)=>setpassword(e.target.value)} ></input>
            <button id='sign-btn' onClick={LOGIN}>LOGIN</button>
            </div>
        </div>
        </div>
        
    )
}
export default Signin