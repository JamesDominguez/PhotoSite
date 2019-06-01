import React from "react"
import './App.css';
import File from './File'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Charts from './Charts'
import About from './About'



class App extends React.Component {
    constructor() {
        super()
        this.state = { NavDisplay:"none"}
        
        this.w3_open = this.w3_open.bind(this)
        this.w3_close = this.w3_close.bind(this)
    }
    w3_open() {
        this.setState({NavDisplay:"block"})
    }
      
       w3_close() {
        this.setState({NavDisplay:"none"})
      }


    
    render() {

        return (  
<div>





<Router>
<div className="w3-sidebar w3-bar-block w3-border-right" style={{display:this.state.NavDisplay}} id="mySidebar">
  <button onClick={this.w3_close} className="w3-bar-item w3-large">Close</button>
  <Link to="/" className="w3-bar-item w3-button">Home</Link>
  <Link to="/about/" className="w3-bar-item w3-button">About</Link>
  <Link to="/Chart/" className="w3-bar-item w3-button">Charts</Link>
  </div>

  <div className="w3-teal">
  <button className="w3-button w3-teal w3-xlarge" onClick={this.w3_open}>☰</button>
</div>

<Route exact path="/" component={File} />
<Route path="/about" component={About} />
<Route path="/Chart" component={Charts} />
</Router>

      

          </div>
        )
    }
}

export default App;
