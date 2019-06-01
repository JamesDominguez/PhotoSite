
import React from "react"
import './App.css';
function AppComponent(props){

return(

    <div onClick={props.onClick}>
    <img src={props.item.Img} alt="PlaceHolder" height={props.item.Height} width={props.item.Width}/>
    <h1>{props.item.Text}</h1>
    <h1>${props.item.Price}</h1>
    </div>
)
}


export default AppComponent

