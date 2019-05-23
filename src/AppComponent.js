import React from "react"
import './App.css';
function AppComponent(props){

return(

    <div id="item">
    <img src={props.item.Img} alt="PlaceHolder" height="100" width="100"/>
    <h1>{props.item.Text}</h1>
    <p>${props.item.Price}</p>
    </div>
)
}


export default AppComponent


