import React from "react"
function AppComponent(props){

return(

    <div>
    <img src={props.item.Img} alt="PlaceHolder" height="200" width="250"/>
    <h2>{props.item.Text}</h2>
    <p>${props.item.Price}</p>
    </div>
)
}


export default AppComponent


