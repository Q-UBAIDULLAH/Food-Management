import "./index.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Card(props){

  // const[addprice,setaddprice]=useState()

  const navigate=useNavigate()
    const{idCategory,strCategoryThumb,strCategoryDescription,strCategory}=props.item
    let discription=strCategoryDescription.slice(0,70)
    
    let price=props.item.prices= 1350
    
 const move=()=>{
// navigate('detail/'+idCategory)
navigate(`/detail/${idCategory}`)
 }


return <div onClick={move} className="main">


<div  className="card">
  <div className="card-img"><img width={280} src={strCategoryThumb} alt={strCategory} /></div>
    <div className="card-dis">
    {/* <h2>{idCategory}</h2> */}
    <h2 id="text-left">Category:{strCategory}</h2>
    <h2 id="text-left">Discription:{discription}</h2>
    <h2 id="text-left">Rs:{price}</h2>
    </div>
    

</div>

</div>


}
export default Card;