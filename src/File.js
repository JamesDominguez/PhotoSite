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
          , file: '',imagePreviewUrl: '',Total:0,Purchases:['Purchases Today:'],TodaysTotal:0,value: '',value2:"",RunOnce:true,Display:"flex",
          DisplayTrue:true,DisplayContainer:"flex"
          
        }

           this.functionToAddThings = this.functionToAddThings.bind(this)
           this.addUp = this.addUp.bind(this)
           this.Charge = this.Charge.bind(this)
           this.handleChange = this.handleChange.bind(this)
           this.ClearUpEx = this.ClearUpEx.bind(this)
           this.handleChange2 = this.handleChange2.bind(this)
           this.changeDisplay = this.changeDisplay.bind(this)
           this.removeCartItem = this.removeCartItem.bind(this)




        

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

  this.state.CartThing.splice(0,this.state.CartThing.length);
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



    removeCartItem(indexs,cart){
        const {CartThing} = this.state;
        let newer = CartThing
        CartThing.splice(0,CartThing);
        newer.splice(indexs,1)
        this.setState({CartThing: newer})

        this.setState({Total:this.state.Total-cart.CPrice})
    }



    render() {
      
        return (  
<div>







<header className="App-header">
    <h1 float="right">Cube<img src="https://unixtitan.net/images/cube-transparent-isometric.png" alt="logo" width="70" height="70" />Cash</h1>
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
         <img src="https://i.ibb.co/zVs2MWh/download.png" alt="PlaceHolder" height="70" width="70"/>
    </div>
    <div onClick={this.Charge}>
    <img  src="https://i.ibb.co/RNjQYWM/download-1.png" alt="PlaceHolder" height="70" width="70"/>
    </div>
</div>


    <footer className="App-footer">
          <h1>Current price is: ${this.state.Total}.00</h1>
    </footer>

           <div className="flex-containerCart">
           {this.state.CartThing.map(
                 (cart,indexs)=>(<Cart key={indexs} onClick={() => this.removeCartItem(indexs,cart) }
                 cart={{CPrice:cart.CPrice,ItemUrl:cart.ItemUrl,CName:cart.CName, Height:"50",Width:"50"}}/>)) }
           </div>


    <footer className="App-footer" style={{display:"none"}}>
          <h1>{this.state.Purchases}</h1>
    </footer>

    <footer className="App-header" style={{display:"none"}}>
          <h1>TodaysTotal:${this.state.TodaysTotal}.00</h1>
    </footer>



    </div>
        )
    }
}
export default File;