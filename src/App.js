import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Charts from './Charts'
import About from './About'
import LogIn from './LogIn'
import File from './File'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
             NavDisplay:"none",
             width:"0%"
    }
        
        this.w3_open = this.w3_open.bind(this)
        this.w3_close = this.w3_close.bind(this)
    }
    w3_open() {
        this.setState({NavDisplay:"block"})
        this.setState({width:"25%"})
    }
      
       w3_close() {
        this.setState({NavDisplay:"none"})
        this.setState({width:"0%"})

      }


    
    render() {

    const style={
        display:this.state.NavDisplay,
        width:this.state.width
     }
        return (  
<div>

<Router>
<div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={style} >
  <button onClick={this.w3_close} className="w3-bar-item w3-button w3-large">Close</button>
  <Link to="/" className="w3-bar-item w3-button">Home</Link>
  <Link to="/about/" className="w3-bar-item w3-button">About</Link>
  <Link to="/Chart/" className="w3-bar-item w3-button">Charts</Link>
  <Link to="/File/" className="w3-bar-item w3-button">File</Link>

  </div>

  <div className="NavBar">
  <button className="NavBarIcon" onClick={this.w3_open}>☰</button>
</div>

<Route exact path="/" component={LogIn} />
<Route path="/about" component={About} />
<Route path="/Chart" component={Charts} />
<Route path="/File" component={File} />

</Router>

      

          </div>
        )
    }
}

export default App;
