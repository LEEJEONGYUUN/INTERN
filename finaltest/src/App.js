import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.draw = this.draw.bind(this);
    this.drawBall = this.drawBall.bind(this);
    this.paddle = this.paddle.bind(this);
  }

  componentDidMount() {
  }
  drawBall = (canvas) =>{    //공에대한정의
    const ctx = canvas.getContext('2d');
    setInterval(Callback, 5);
    function Callback() {
      let x = canvas.width/2;
      let y = canvas.height-30;
      let dx = 2;
      let dy = -2;
      x+=dx;
      y+=dy;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI*2);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();   
    }
  }

  mycanvas = (canvas) =>{
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(240,240,240)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);   
   }

   paddle = (canvas) =>{
  const ctx = canvas.getContext('2d');
  let paddleHeight = 10;
  let paddleWidth = 100;
  let paddleX = (canvas.width-paddleWidth)/2;
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}  
  
  draw = (canvas) => {
    this.mycanvas(canvas)
    this.drawBall(canvas)
    this.paddle(canvas)
    }

  render() {
    return (
      <div className="App">
        <canvas className="canvas" 
                height={700} width={600} 
                ref={this.draw}
                />
      </div>
    );
  }
}

export default App;