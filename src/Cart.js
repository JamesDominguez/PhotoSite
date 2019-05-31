import React from "react"
import './App.css';
function Cart(props){

return(
    <div className="flex-containerCart">

<div>
<img  src={props.cart.ItemUrl} alt="PlaceHolder" height={props.cart.Height} width={props.cart.Width}/>
</div>

<div>
<h2>{props.cart.CName}__</h2>
</div>

<div>
<h2>${props.cart.CPrice}</h2>
</div>

<div id="CartImg">
<img  src="https://cdn.iconscout.com/icon/free/png-256/false-delete-remove-cross-wrong-14-16351.png" alt="PlaceHolder" height={props.cart.Height} width={props.cart.Width} onClick={props.onClick}/>
</div>


</div>

)
}


export default Cart