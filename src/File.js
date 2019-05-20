import React from "react"
import './App.css';
import AppComponent from './AppComponent'
class File extends React.Component {
    constructor() {
        super()
        this.state = {
          thing:[  {Img:"https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png", Text:"some words"} ]
          , file: '',imagePreviewUrl: '',Total:0,Purchases:['Purchases Today:'],TodaysTotal:0
          }
           this.functionToAddThings = this.functionToAddThings.bind(this)
           this.addUp = this.addUp.bind(this)
           this.Charge = this.Charge.bind(this)
    }

  functionToAddThings() {
    const {thing} = this.state;
   let newer = {Img:this.state.imagePreviewUrl,Text:"SomeTING"}
   const newThing = thing;
   thing.push(newer);
   this.setState({thing: newThing})
  }


  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  addUp(){
  this.setState({Total:this.state.Total+1})
  }

  Charge(){
  this.state.Purchases.push("$")
  this.state.Purchases.push(this.state.Total)
  this.state.Purchases.push(".")
  this.state.Purchases.push(Math.floor(Math.random() * 10))
  this.state.Purchases.push(", ")
  
  this.setState({TodaysTotal:this.state.TodaysTotal+this.state.Total})

  this.setState({Total:0})
  }


    
    render() {
 
      
        return (  
          <div>
              <div onClick={this.addUp}>
           { this.state.thing.map((item,index)=>(
              <AppComponent key={index}
              functionToAddThings={this.functionToAddThings}
              item={{Img:item.Img, Text:item.Text}}
              />
            )) }
            </div>
            <div>
          <input className="inputfile" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
        <button className="button" onClick={this.functionToAddThings}>Add Thing</button> 
            </div>

          <footer className="App-header">
          <h1>Current price is: ${this.state.Total}.00</h1>
          </footer>

          <footer className="App-footer" onClick={this.Charge}>
          <h1>-Charge-</h1>
          </footer>

          <footer className="App-header">
          <h1>{this.state.Purchases}</h1>
          </footer>

          <footer className="App-footer">
          <h1>TodaysTotal:${this.state.TodaysTotal}.00</h1>
          </footer>
      </div>


        )
    }
}



export default File;
