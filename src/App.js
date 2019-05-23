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

            <div id="content">
  <div class="box" sTyle="background-color:red;">
  <img src="https://library.kissclipart.com/20180904/ztq/kissclipart-money-clipart-money-bag-make-money-online-earn-c-9d5516feb3f374d7.jpg" alt="logo" width="80" height="80"/>
  </div>
  <div class="box" sTyle="background-color:lightblue;">
  <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/money-icon.png" alt="logo" width="80" height="80"/>

  </div>
  <div class="box" sTyle="background-color:yellow;">
  <img src="https://library.kissclipart.com/20180904/ztq/kissclipart-money-clipart-money-bag-make-money-online-earn-c-9d5516feb3f374d7.jpg" alt="logo" width="80" height="80"/>
  </div>
</div>

<header class="App-header">
<h1>Cube Cash</h1>
</header>

          <File/>

          <div id="content">
  <div class="box" sTyle="background-color:red;"> 
  <img src="https://www.freeiconspng.com/uploads/cash-machine-icon-17.png" alt="logo" width="80" height="80"/>
   </div>
  <div class="box" sTyle="background-color:lightblue;">
  <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/money-icon.png" alt="logo" width="80" height="80"/>
   </div>
  <div class="box" sTyle="background-color:yellow;">
  <img src="https://www.freeiconspng.com/uploads/cash-machine-icon-17.png" alt="logo" width="80" height="80"/>
   </div>
  
</div>

          </div>
        )
    }
}

export default App;
