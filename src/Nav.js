
import React from "react"
import './Nav.css';


class Nav extends React.Component{
  constructor() {
    super()
    this.state={

    }
    this.myFunction = this.myFunction.bind(this)

  }


  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render(){

    
    return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

     <div className="topnav" id="myTopnav">
  <a href="https://reactjs.org/docs/dom-elements.html#style" className="active">Home</a>
  <a href="https://reactjs.org/docs/dom-elements.html#style">News</a>
  <a href="https://reactjs.org/docs/dom-elements.html#style">Contact</a>
  <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown">About</a>
  <a href="no-script-url: 0" Style="font-size:15px;" className="icon" onClick={this.myFunction}>&#9776;</a>
</div>

       </div>
)
}
}


export default Nav
