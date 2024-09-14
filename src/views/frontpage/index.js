import '../../App.css';
import { useNavigate } from 'react-router-dom';
function Frontpage(){
  const navigate=useNavigate()
return(
    <>
    <div className='welcome'>
   
  <div className='heading'>

<h1>WELCOME TO FOOD CENTER</h1>


<div className='paragraph' >
<h3 id='delicious' >Delicious Food</h3>  

<h3> We serve delicious food, made with love.<br></br> From classic favorites to new twists,<br></br>
     there's something for everyone. Come and enjoy!</h3>  
</div>


<button onClick={()=>navigate('signup')} id='button-goto'>GO TO SIGNUP</button>
</div>

<div className='special-offer' >
<h2>Special Offer<br></br>15% OFF</h2>

</div>

</div>


</>
)

}
export default Frontpage