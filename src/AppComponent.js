import React from "react"
import './App.css';
function AppComponent(props){

return(

    <div>
    <img src={props.item.Img} alt="PlaceHolder" height="200" width="250"/>
    <h1>{props.item.Text}</h1>
    <p>${props.item.Price}</p>
    </div>
)
}


export default AppComponent


