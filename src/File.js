import React from "react"
import './App.css';
import AppComponent from './AppComponent'
class File extends React.Component {
    constructor() {
        super()
        this.state = {
          thing:[  {Img:"https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png", Text:"Create Item",Price:0} ]
          , file: '',imagePreviewUrl: '',Total:0,Purchases:['Purchases Today:'],TodaysTotal:0,value: '',RunOnce:true,Display:"none"
          }
           this.functionToAddThings = this.functionToAddThings.bind(this)
           this.addUp = this.addUp.bind(this)
           this.Charge = this.Charge.bind(this)
           this.handleChange = this.handleChange.bind(this)
           this.ClearUpEx = this.ClearUpEx.bind(this)


    }

  functionToAddThings() {//creats Item 
    this.ClearUpEx()
    const {thing} = this.state;
   let newer = {Img:this.state.imagePreviewUrl,Text:this.state.value}
   const newThing = thing;
   thing.push(newer);
   this.setState({thing: newThing})

   this.setState({value:""})//clears name input 

  }
  
  ClearUpEx(){ //removes the first item and only runs once
      if(this.state.RunOnce){
        this.state.thing.splice(0);
        this.setState({RunOnce:false})
      }
  }


    
  


  _handleImageChange(e) {//makes url for image
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

  handleChange(event) {//updates the value from text 
    this.setState({value: event.target.value});
  }
    
    render() {
 
      
        return (  
          <div>
              <div onClick={this.addUp}>
              <div className="flex-container">
           { this.state.thing.map((item,index)=>(
              <AppComponent key={index}
              functionToAddThings={this.functionToAddThings}
              item={{Img:item.Img, Text:item.Text}}
              />
            )) }
                </div>
            </div>

        <div class="flex-container">
        <div>
         <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
         <br/>
         <input id="myfile" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} 
            />
            <br/>
        <button className="button" onClick={this.functionToAddThings}>Add Thing</button> 
        </div>
        <div sTyle="height:100px">
            <h1 onClick={this.Charge} >Charge</h1>
        </div>
        </div>

           

          <footer className="App-header">
          <h1>Current price is: ${this.state.Total}.00</h1>
          </footer>

          <footer className="More" sTyle="display:none;">
          <h1 onClick={this.Charge}>More Info</h1>
          </footer>
            
          <footer className="App-footer" sTyle="display:none;">
          <h1>{this.state.Purchases}</h1>
          </footer>

          <footer className="App-header" sTyle="display: none;">
          <h1>TodaysTotal:${this.state.TodaysTotal}.00</h1>
          </footer>

          </div>
     


        )
    }
}



export default File;
