  import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect} from "react";
import './index.css'
function Detailcards(){
    //  const {idCategory }=useParams();
   const navigate=useNavigate()
    const[addto,setaddto]=useState(0)
    // setaddtosetAddTo
    const[cancel,setcancel]=useState(0)
    // setcancel
    const params = useParams();
    // const {adId}=props
    let price=1350
     const [detail,setdetail]=useState([])
     
    useEffect(() => {
        
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then(res => res.json())
          .then(res => {
 
            console.log("res",res)
            
          
           setdetail(res.categories)
          })
      }, [])
  

    //   console.log(detail)
       console.log("details",detail)


       useEffect(() => {
        const storedValue = localStorage.getItem('addtocart');
        if (storedValue) {
          setaddto(JSON.parse(storedValue));
        }
      }, []);
    
      /*
      const addtocart = () => {
        setAddTo((prevValue) => prevValue + price);
        localStorage.setItem('addtocart', JSON.stringify(addto + price));
      };
    
      const Cancelation = () => {
        if (addto > 0) {
          setAddTo((prevValue) => prevValue - price);
          setCancel((prevValue) => prevValue + 1);
          localStorage.setItem('addtocart', JSON.stringify(addto - price));
        }
        if (addto === 0) {
          setCancel(0);
          localStorage.removeItem('addtocart');
        }
      };
*/

function Cancelation(){

    if(addto>0){
  let Cancelation=addto-price
  setaddto(Cancelation)
  setcancel(cancel+1)
  let getvalue=localStorage.getItem("add")
console.log(getvalue)
localStorage.setItem("After cancelation",addto-price)
localStorage.setItem("addtocart",addto-price)
 }
if(addto==0){
  setcancel(0)
  localStorage.removeItem('addtocart');
  localStorage.removeItem('After cancelation');
}
 }

  function addtocart(){
    setaddto(addto+price)
    localStorage.setItem("addtocart",addto+price)
   
    
  }

      //  function cart(){
      //   setaddto(price)
        
      //   }


//  if(){
//      return<div>
//          loading...
//      </div>
//  }

function background(color){

}

return(<div className="detail-main">
   
  {detail.map(function(item){
    if(item.idCategory===params.idCategory){
         let money=item.Price= price
        //  let discription=item.strCategoryDescription.slice(0,70)
        return(<div className="sub-detail">
          <div className="sub-detail-img"><img id="sub-detail-pic" height={170} width={445} src={item.strCategoryThumb} alt={item.strCategory} /></div>
<div className="sub-detail-text">

<h2>{item.strCategory}</h2>
    
    <h3>Rs{money}</h3>

 </div>
  
 
        </div>

       
         
            
        )
       
    }
    console.log({item})
  })}
     <div className="cart-item">
 
   
   
    
   
 <h3 id="text-edit">ADD TO CART<span id="text-color"> {addto}</span> </h3>
 <button  className="cancelbtn"  onClick={addtocart}>ADD TO CART</button>  
 <h2 id="text-edit">Cancel <span id="text-color">{cancel}</span></h2>
 <button className="cancelbtn" onClick={Cancelation}>Cancel</button>
 <button className="cancelbtn" onClick={()=>navigate('/bill')}>ORDER</button>
 </div>
    
      {
//       <div className="card">
//     <img width={280} src={detail.strCategoryThumb} alt={detail.strCategory} />
//     <h2>{detail.idCategory}</h2>
//     <h2>{detail.strCategory}</h2>
//     <h2>{detail.strCategoryDescription}</h2>
//     <h2>{detail.price}</h2> 
// </div>
 } 

 </div>

)
}
export default Detailcards;