import React, { Component } from 'react';
import './App.css';

class App extends Component {

  id = 'mycanvas'
  baseWidth = 600
  baseHeight = 500

  render() {
    const style = {
      background: 'linear-gradient(177deg, #eee, #ddd 75%, #ccc)',
      display: 'block',
      margin: '0 auto',
      width: `${this.baseWidth}px`,
      height: `${this.baseHeight}px`,
    }
    return (
      <div className="canvas">
        <canvas id={this.id}
          width={`${this.baseWidth * 2}`}
          height={`${this.baseHeight * 2}`}
          style={style}/>
      </div>
    )
    
  }
}
export default App

