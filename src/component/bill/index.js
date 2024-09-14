import { getuser } from "../../config/firebase";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import Orderconfirm from "../confirm-order";
function Bill(){
    const navigate=useNavigate()
    const[user,setuser]=useState()
const totalvalue=localStorage.getItem("addtocart")
const percent=0.15*totalvalue
const discount=totalvalue-percent
// const date = new Date(2018, 11, 24, 10, 33, 30, 0);
const d = new Date();
const time12 = d.toLocaleTimeString('en-US', { hour12: true });

useEffect(()=>{
    get()
},[])
const get=async()=>{
    const detail=await getuser()
    setuser(detail)
console.log("detail firestore",detail)
}

console.log("state",user)
    return(<div className="bill-main">
        <div className="bill-sub">
        <div><h1 id="invoice" >INVOICE</h1></div>
        <div className="billimg"><img id="bill-img" width={200} src='https://graphicsfamily.com/wp-content/uploads/edd/2023/02/Restaurant-Logo-Design-2-scaled.jpg'></img></div>
        
<h2 id="thanks-order">Thanks For Order</h2>

<div className="bill-text">
<h2 id="border-line">Your Total Bill<span id="align-right">RS: {totalvalue}</span> </h2>
<h2 id="border-line">After 15%OFF <span id="align-right"> RS: {discount}</span>   </h2>
<h2 id="border-line">Bill <span id="align-right"> RS: {discount}</span> </h2>
</div>
{/* <h1>{date.toLocaleString()}</h1> */}
<div className="bill-date"><h2><span id="span-edit">Date:</span> {d.toDateString()}</h2>
<h2><span id="span-edit">Timing:</span> {time12}</h2></div>
<div className="bill-name"><h1 id="billname"><span id="span-edit">Name:</span>{user?.fullname}</h1>
<h1><span id="span-edit">Contact:</span>{user?.number}</h1></div>
<button id="confirm" onClick={()=>navigate('/order')}>Confirm Order</button>
</div>

    </div>

        
    )
}
export default Bill;