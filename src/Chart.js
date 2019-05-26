
import React from "react"
import './App.css';

import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class Chart extends React.Component{
  constructor() {
    super()
    this.state={

    }
  }

  render(){

    
    return(
  <div>
<XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    color="red"
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis title="X" />
  <YAxis />
</XYPlot>
      
       </div>
)
}
}


export default Chart
