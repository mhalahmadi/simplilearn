import { Component } from 'react';
import './App.css';
import './Calculator.css'

export default class  App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {resulte:""}
  }

 

add = (event) =>{
  event.preventDefault();  
      this.setState({
          resulte: this.state.resulte+ event.target.value
      })       
} 

data = (event) =>{
  this.setState({
      resulte: this.state.resulte + event.target.value
  }) 
} 

cal = () =>{
        this.setState({
      resulte: eval(this.state.resulte).toString()
  }) 
  console.log(this.state.resulte)
} 

del= () =>{
  this.setState({

    resulte: this.state.resulte.slice(0,-1)
  })
}

clear= () =>{
  this.setState({
      resulte: ""
  })    
}

render() {
  
    return(
  <div className="App">
      <div class="cal">
        <input   type="text" value={this.state.resulte}/>
        <button  value="D" id="redios" onClick={this.del}>DEL</button>
        <br/>
        <button  value="1"  onClick={this.add}>1</button>
        <button  value="2"  onClick={this.add}>2</button>
        <button  value="3"  onClick={this.add}>3</button>
        <button  value="/"  onClick={this.add}>/</button>
        <br/>
        <button  value="4"  onClick={this.add}>4</button>
        <button  value="5"  onClick={this.add}>5</button>
        <button  value="6"  onClick={this.add}>6</button>
        <button  value="*"  onClick={this.add}>*</button>
        <br/>
        <button  value="7"  onClick={this.add}>7</button>
        <button  value="8"  onClick={this.add}>8</button>
        <button  value="9"  onClick={this.add}>9</button>
        <button  value="-"  onClick={this.add}>-</button>
        <br/>
        <button  value="0" id="redios" onClick={this.add}>0</button>
        <button  value="+"  onClick={this.add}>+</button>
        <button  value="C"  onClick={this.clear}>Clear</button>
        <button id="cal" name="resulte" value="="  onClick={this.cal}>=</button>
        </div>
  </div>
);
}
}
