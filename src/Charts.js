import React from "react"
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class Charts extends React.Component {
    constructor() {
        super()
        this.state = {     useCanvas: false
        }
        
    }



    
    render() {

        return (  
<div>
<header className="App-header">
    <h1 float="right">Cube<img src="https://unixtitan.net/images/cube-transparent-isometric.png" alt="logo" width="70" height="70" />Cash</h1>
</header>

<XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>


          </div>
        )
    }
}

export default Charts;
