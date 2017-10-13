import React, { Component } from 'react';

export default class Ex4 extends Component {
  img=[
      '/src/rome.jpg.JPG'
  ];
  render() {
    return (
      <div className="Ex4">
        <header className="Ex4-header">
           <h1 className="Ex4-title">Welcome to React</h1>
        </header>
        <p className="Ex4-intro">
          To get started, edit <code>src/Ex4.js</code> and save to reload.
        </p>
       <img source ={'/src/rome.jpg.JPG'}></img>
      </div>
    );
  }
}

//export default App;