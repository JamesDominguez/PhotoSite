import React from "react"
import './App.css';



class About extends React.Component {
    constructor() {
        super()
        this.state = {   }
        
    }



    
    render() {

        return (  
<div>
<header className="App-header">
    <h1 float="right">Cube<img src="https://media.istockphoto.com/vectors/vector-of-dollar-sign-frozen-in-ice-cube-vector-id851826232?k=6&m=851826232&s=612x612&w=0&h=GQjOLVlcbqVpZMw_NS7nYDDH8-JblsNWSW7x-arFtoY=" alt="logo" width="70" height="70" />Cash</h1>
</header>

<div class="parallax"></div>

<h1>
This is the future
 <br/>
We are 
<br/>
who we say we are 
<br/>
and that is it
</h1>

          </div>
        )
    }
}

export default About;
