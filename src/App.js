import React from "react"
import './App.css';
import File from './File'
class App extends React.Component {
    constructor() {
        super()
        this.state = { }

    }

    
    render() {
        return (  
          <div>
          <header className="App-header">
          <h1>Cube Cash</h1>
          </header>
          <File/>
          </div>
        )
    }
}

export default App;
