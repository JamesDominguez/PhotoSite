import React from "react"
import './App.css';
function AppComponent(props){

return(

    <div id="item" onClick={props.onClick}>
    <img src={props.item.Img} alt="PlaceHolder" height="130" width="130"/>
    <h1>{props.item.Text}</h1>
    <h1>${props.item.Price}</h1>
    </div>
)
}


export default AppComponent


