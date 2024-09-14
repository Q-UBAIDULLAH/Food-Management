import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchDetail(){
    const params=useParams()
    const[addto,setaddto]=useState(0)
    const[cancel,setcancel]=useState(0)
const navigate=useNavigate()
const [searchfood,setsearchfood]=useState([])
let PRice=1350
    function sarchdetail(){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.CATEGORY}`)
        .then(res=>res.json())
        .then(res=>setsearchfood(res.meals))
    }

    useEffect(()=>{
        sarchdetail()
    },[])
    console.log(searchfood)

    useEffect(() => {
        const storedValue = localStorage.getItem('addtocart');
        if (storedValue) {
          setaddto(JSON.parse(storedValue));
        }
      }, []);







    function Cancelation(){

        if(addto>0){
      let Cancelation=addto-PRice
      setaddto(Cancelation)
      setcancel(cancel+1)
      let getvalue=localStorage.getItem("add")
    console.log(getvalue)
    localStorage.setItem("After cancelation",addto-PRice)
    localStorage.setItem("addtocart",addto-PRice)
     }
    if(addto==0){
      setcancel(0)
      localStorage.removeItem('addtocart');
      localStorage.removeItem('After cancelation');
    }
     }
    
      function addtocart(){
        setaddto(addto+PRice)
        localStorage.setItem("addtocart",addto+PRice)
       
        
      }







return(
    <div>

    {searchfood.map((item)=>{
if(params.idmeal===item.idMeal){
    // let price=item.price=200
    let money=item.Price= PRice
    return(
        <div className="detail-main">
       <div className="sub-detail">
           <div className="sub-detail-img"> <img id="sub-detail-pic" height={170} width={445} src={item.strMealThumb}></img></div>
           <div className="sub-detail-text">
            <h2>dish:{item.strArea}</h2>
            <h2>Rs:{PRice}</h2>
</div>
</div>
         
        </div>
    )
}
    })}
    <div className="cart-item">
    {/* <button id="text-edit" onClick={addtocart}>ADD TO CART</button> */}
    <h3 id="text-edit">ADD TO CART<span id="text-color"> {addto}</span> </h3>
    <button  className="cancelbtn"  onClick={addtocart}>ADD TO CART</button>  
    <h2 id="text-edit">Cancel <span id="text-color">{cancel}</span></h2>
    <button className="cancelbtn" onClick={Cancelation}>Cancel</button>
    <button className="cancelbtn" onClick={()=>navigate('/bill')}>ORDER</button>
   
    </div>
    </div>
)
    

}
export default SearchDetail;