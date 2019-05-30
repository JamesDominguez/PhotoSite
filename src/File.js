import React from "react"
import './App.css';
import AppComponent from './AppComponent'
import Cart from './Cart'
class File extends React.Component {
    
    constructor() {
        super()

    this.state = {
          thing:[  {Img:"https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png", Text:"-Name-",Price:"Price$"}],
          CartThing:[]
          , file: '',imagePreviewUrl: '',Total:0,Purchases:['Purchases Today:'],TodaysTotal:0,value: '',value2:"",RunOnce:true,Display:"flex",DisplayTrue:true,DisplayContainer:"flex",
            DataDisplay:"none",MainDataDisplay:"none"
        }

           this.functionToAddThings = this.functionToAddThings.bind(this)
           this.addUp = this.addUp.bind(this)
           this.Charge = this.Charge.bind(this)
           this.handleChange = this.handleChange.bind(this)
           this.ClearUpEx = this.ClearUpEx.bind(this)
           this.handleChange2 = this.handleChange2.bind(this)
           this.changeDisplay = this.changeDisplay.bind(this)
           this.changeDataDisplay = this.changeDataDisplay.bind(this)
           this.changeDataDisplay2 = this.changeDataDisplay2.bind(this)


    }

  functionToAddThings() {//creats Item 
    this.ClearUpEx()
    const {thing} = this.state;
   let newer = {Img:this.state.imagePreviewUrl,Text:this.state.value,Price:this.state.value2}
   const newThing = thing;
   thing.push(newer);
   this.setState({thing: newThing})

   this.setState({value:''})//clears name input 
   this.setState({value2:''})
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

  addUp(item){
  this.setState({Total:Number(this.state.Total) + Number(item.Price)})

  const {CartThing} = this.state;
  let newer = {CPrice:item.Price,CName:item.Text,ItemUrl:item.Img}
  const newThing = CartThing;
  CartThing.push(newer);
  this.setState({CartThing: newThing})


  }




  Charge(){
  this.state.Purchases.push("$")
  this.state.Purchases.push(this.state.Total)
  this.state.Purchases.push(", ")
  this.setState({TodaysTotal:this.state.TodaysTotal+this.state.Total})
  this.setState({Total:0})
  }

  handleChange(event) {//updates the value from text 
    this.setState({value: event.target.value});
  }

  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  changeDisplay() {
    if(this.state.DisplayTrue){
    this.setState({Display:"none"})
    this.setState({DisplayTrue:false})
}       
    else{
        this.setState({Display:"flex"})
        this.setState({DisplayTrue:true})
    }
}

    changeDataDisplay(){
        if(this.state.DisplayTrue){
            this.setState({DataDisplay:"none"})
            this.setState({DisplayTrue:false})
        }       
            else{
                this.setState({DataDisplay:"flex"})
                this.setState({DisplayTrue:true})
            }
    }

    changeDataDisplay2(){
        if(this.state.DisplayTrue){
            this.setState({MainDataDisplay:"none"})
            this.setState({DisplayTrue:false})
        }       
            else{
                this.setState({MainDataDisplay:"flex"})
                this.setState({DisplayTrue:true})
            }
    }

    render() {
      
        return (  
<div>

    <div className="container" onClick={this.changeDataDisplay}>
            <img src="http://ice.ethz.ch/images/menu.png" className="logout" alt="PlaceHolder" height="60" width="70"/>  
        </div>

        <header className="NavHeader2" style={{display:this.state.DataDisplay}}>About</header>
        <header onClick={this.changeDataDisplay2} className="NavHeader" style={{display:this.state.DataDisplay}}> Display Data</header>

<header className="App-header">
    <h1 float="right">Cube<img src="https://media.istockphoto.com/vectors/vector-of-dollar-sign-frozen-in-ice-cube-vector-id851826232?k=6&m=851826232&s=612x612&w=0&h=GQjOLVlcbqVpZMw_NS7nYDDH8-JblsNWSW7x-arFtoY=" alt="logo" width="70" height="70" />Cash</h1>
</header>

        <div className="flex-container">
                 {this.state.thing.map(
                 (item,index)=>(<AppComponent key={index} onClick={() => this.addUp(item)} functionToAddThings={this.functionToAddThings}
                 item={{Img:item.Img, Text:item.Text, Price:item.Price, Height:"165",Width:"165"}}/>)) }
        </div>

    


<div className="flex-container2"   style={{display:this.state.Display}}>
    <div>
         <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange}/>
    <br/>
         <input type="text" placeholder="Price" value={this.state.value2} onChange={this.handleChange2} />
    <br/>
         <input className="inputfile" type="file" onChange={(e)=>this._handleImageChange(e)}/>
    <br/>
         <button className="button" onClick={this.functionToAddThings}>Add Item</button> 
    </div>
</div>

<div className="flex-container3" style={{display:this.state.DisplayContainer}}>
    <div onClick={this.changeDisplay}>
         <img src="https://static.thenounproject.com/png/396915-200.png" alt="PlaceHolder" height="70" width="70"/>
    </div>
    <div onClick={this.Charge}>
    <img  src="http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG21539.png" alt="PlaceHolder" height="70" width="70"/>
    </div>
</div>


    <footer className="App-footer">
          <h1>Current price is: ${this.state.Total}.00</h1>
    </footer>

           <div className="flex-containerCart">
           {this.state.CartThing.map(
                 (cart,index)=>(<Cart key={index}
                 cart={{CPrice:cart.CPrice,ItemUrl:cart.ItemUrl,CName:cart.CName, Height:"50",Width:"50"}}/>)) }
           </div>


    <footer className="App-footer" style={{display:this.state.MainDataDisplay}}>
          <h1>{this.state.Purchases}</h1>
    </footer>

    <footer className="App-header" style={{display:this.state.MainDataDisplay}}>
          <h1>TodaysTotal:${this.state.TodaysTotal}.00</h1>
    </footer>



    </div>
        )
    }
}
export default File;