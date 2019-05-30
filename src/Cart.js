import React from "react"
import './App.css';
function Cart(props){

return(
    <div>


<img  src={props.cart.ItemUrl} alt="PlaceHolder" height={props.cart.Height} width={props.cart.Width}/>

<h2>{props.cart.CName}</h2>


<h2> {props.cart.CPrice}</h2>



<img  src="https://cdn.iconscout.com/icon/free/png-256/false-delete-remove-cross-wrong-14-16351.png" alt="PlaceHolder" height={props.cart.Height} width={props.cart.Width} id="CartImg"/>


</div>

)
}


export default Cart