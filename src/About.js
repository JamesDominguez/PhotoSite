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
    <h1 float="right">Cube<img src="https://unixtitan.net/images/cube-transparent-isometric.png" alt="logo" width="70" height="70" />Cash</h1>
</header>

<div className="parallax"></div>

<div className="parallaxDiv">
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
          </div>
        )
    }
}

export default About;
