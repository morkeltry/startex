import React, { Component, } from 'react';
import './App.css';
import H2Like from './components/H2Like.js';
import SingleLineGrid from './components/SingleLineGrid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <section className="section1">
          There is no other platform by eck as like <br />
          There is no other platform by eck as like  <br />
          There is no other platform by eck as like <br />
          There is no other platform by eck as like  <br />
          There is no other platform by eck as like <br />
          There is no other platform by eck as like  <br />
          There is no other platform by eck }as like <br />
          There is no other platform by eck as like  <br />
          There is no other platform by eck as like <br />
          There is no other platform by eck as like  <br />
          There is no other platform by eck as like <br />
          There is no other platform by eck as like  <br />
        </section>

        <section className="bg-pink-triangle">
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}/>
          <p>
            Lorem Ipsum <br />
            X2
          </p>
        </section>

        <section className="section3">
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}/>
          <SingleLineGrid />
        </section>

        <section className="section5">
          <SingleLineGrid />
          <SingleLineGrid />
        </section>

        <section className="section6">
          <div className="flex-container">
            <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}} />
            <img href="images/section6-browser.png" />
          </div>
        </section>



      </div>
    );
  }
}

export default App;
