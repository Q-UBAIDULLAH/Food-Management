import React, { useState, useEffect } from 'react';
import Card from '../../component/Card';
import { Navigate, useNavigate } from 'react-router-dom';

import "./index.css"
 function Dashboard() {
const navigate=useNavigate()
const [cocktail, setCocktail] = useState([]);
const[search,setsearch]=useState("")
const[cards,setcard]=useState([])
const[show,setshow]=useState(true)

  

function fetchcard(){
      

  // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(res => res.json())
  .then(res =>{

   const newcocktail={
     idCategory: '15',
     strCategory:'Dessert',
     strCategoryDescription:"Dessert is a course that concludes a meal. The course usually consists",
     strCategoryThumb:"https://www.themealdb.com/images/category/dessert.png"
   
   
    
   }

   const updatedCocktails = [...res.categories,newcocktail ];
   setCocktail(updatedCocktails)


  });
}


   useEffect(() => {

     setTimeout(()=>{
fetchcard()
     },1000)

  },[]);

 function fetchsearch(){
 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(res=> {

      if (res.meals === null) {
        setcard([]); // Set card to an empty array
      } else {
        setcard(res.meals);
      }

    })
 
    // setsearch("")
   setshow(false)
  
 
 
 }
  console.log("cards",cards)
   
   console.log(cocktail)
   
            if(!cocktail.length){
              return <div className='percent'>
                <div className='percent-1'>

                <h2 className='headings'>15%OFF</h2>
               
               </div>
               </div>
              }
        

             

   return (



     <div className='COLOR'>
      
<div className='header-page'>

    <div className='header-page-1'>
      
    <h1 id='food-heading' >FOOD</h1>
    <h4 className='navbar'>Home</h4>
      <h4 className='navbar'>About</h4>
      <h4 className='navbar'>Menu</h4>
      
     

      <div className='header-page-2'>
        
        <input className='input-edit' value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search'></input>
        <button className='searchbtn' onClick={fetchsearch} >Search</button>
        


      </div>
      
      </div>

     <div className='mid'>
     <h1 id='delicious'>Food Center</h1>
     <marquee><h3 id='paragraph'> We serve delicious food, made with love.<br></br> From classic favorites to new twists,
     there's something for everyone. Come and enjoy!</h3> </marquee>
      {/* <button >Order Now</button> */}
     </div>
     
      {/* <div>
      <h1>hello</h1>
      </div> */}
    
</div>




{show?cocktail?.map(item=>{
      return  <Card  item={item}/>
  })

  :
  
  cards.length?<div >
    {cards.map(items=>{
      return(<div className='main' onClick={()=>{navigate(`/searchdetail/${items.idMeal }/${search}`)}}>
<div className="card">
      <div className="card-img">  <img width={200} src={items.strMealThumb}></img></div>
      <div className="card-dis">
        {/* <h3 id="text-left">Category:{items.strIngredient1}</h3>  */}
        <h3 id="text-left">Category: {items.strMeal}</h3> 
        </div>
        </div>
        </div>
       )})}
  </div> :<h1>NO FOUND FOOD</h1>} 
  
<div className='footer-1'>
<div className='footer'>

<div>

<h1 id='footer-text'>RESOURCES</h1>
<p>Documentation</p>
<p>Application</p>
<p>System</p>
<p>System</p>
</div>
<div>
<h1  id='footer-text'>PRICING</h1>
<p>Overview</p>
<p>Premium Plans</p>
<p>System</p>
<p>Faq</p>
</div>
<div>
<h1  id='footer-text'>SOCIAL</h1>
<p>Pricing</p>
<p>Premium Plans</p>
<p>System</p>
<p>Plans</p>
</div>
<div>
<h1  id='footer-text'>ABOUT</h1>
<p>Pricing</p>
<p>Premium Plans</p>
<p>System</p>
<p>Plans</p>
</div>
<div>
<h1  id='footer-text'>ACTIVITY</h1>
<p>Pricing</p>
<p>Premium Plans</p>
<p>System</p>
<p>Plans</p>
</div>
</div>
</div>
 
  
          </div>














 
      

   );
 }
 export default Dashboard;