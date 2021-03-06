import React from 'react';
import logo from "./CP-Logo-TransCol192x192.png";
import byline from "./CP-ColGrad_TEXT.png";
import './App.css';
var QRCode = require('qrcode.react');

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <QRCode value="https://master.djcluq6if7ylk.amplifyapp.com/" 
          size={290}
          level={"L"}
          includeMargin={true} />
      <img src={byline} className="Byline" alt="logo" />
      </header>
    </div>
  );
}

export default App;
