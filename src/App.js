import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { red300, red100, purple200 } from 'material-ui/styles/colors';


class App extends Component {
constructor(){
  super();
  this.state ={
    numOfClicks:0,
    mouseX:0,
    mouseY:0,
    numOfWheelRolls:0

};

}

addMouseClicks = ()=>{
  let currValue = this.state.numOfClicks;
  currValue++;
  this.setState({
    numOfClicks:currValue
  });

}

getCursorCoordinates = (event)=>{
this.setState({
  mouseX: event.clientX,
  mouseY: event.clientY
});
}

addMouseWheelRolls =()=>{
  let currValue = this.state.numOfWheelRolls;
  currValue++;
  this.setState({
    numOfWheelRolls: currValue
  });


}

  render() {
    return (
     <div id ='mainWrap' style={{width:350,height:200}} onMouseDown={(e)=>{this.addMouseClicks()}} onMouseMove={(e)=>this.getCursorCoordinates(e)} onWheel={(e)=>{this.addMouseWheelRolls();}}>
      <MuiThemeProvider>
        <Paper style={{width:350,height:200,backgroundColor:purple200}}>
          <div id='mousedown-wrap'><RaisedButton style={{float:'left',marginLeft:4,marginTop:10,width:340,height:45,backgroundColor:purple200}} label={"Number of mouse clicks: " +this.state.numOfClicks}/> </div>
          <div id='mousemove-wrap'><RaisedButton style={{float:'left',marginLeft:4,marginTop:10,width:340,height:45,backgroundColor:purple200}} label={"Mouse coordinates  X:" +this.state.mouseX +" Y:"+this.state.mouseY}/> </div>
         <div id='mousewheel-wrap'><RaisedButton style={{float:'left',marginLeft:4,marginTop:10,width:340,height:45,backgroundColor:purple200}} label={"Number of mouse wheel events :" +this.state.numOfWheelRolls}/> </div>
        </Paper>
      </MuiThemeProvider>
     </div>

    );
  }
}

export default App;
