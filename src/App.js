import React, { Component, } from 'react';
import './App.css';
import H2Like from './components/H2Like.js';
import SingleLineGrid from './components/SingleLineGrid.js';
import browserImg from './images/section6-browser.png';
// import imgMap from './helpers/imageMapper.js'
import logo1 from './images/section5-logo1.png';
import logo2 from './images/section5-logo2.png';
import logo3 from './images/section5-logo3.png';
import logo4 from './images/section5-logo4.png';
import logo5 from './images/section5-logo5.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
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
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}
            content= {<div>There is no other platforms for you as like</div>}
          />
          <p>
            Lorem Ipsum <br />
            X2
          </p>
        </section>

        <section className="section3">
          <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
            content= {<div>Some awesome features</div>}
          />
          <SingleLineGrid />
        </section>

        <section className="bg-pink-triangle">
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}
          content= {<div>Responsive design, just need your tap</div>}
          />
          <p>
            Lorem Ipsum X1
          </p>
        </section>

        <section className="section5">
        5555555555555555555555555555
          <SingleLineGrid content= {
             <div>
               <img src={logo1} alt="logo1" className="logo" />
               <img src={logo2} alt="logo2" className="logo" />
               <img src={logo3} alt="logo3" className="logo" />
               <img src={logo4} alt="logo4" className="logo" />
               <img src={logo5} alt="logo5" className="logo" />
               {
                 // imgMap('images/section5-logo',[1,2,3,4,5]).map (logoFile =>
                 //   <img src={logoFile} className="logo" />)
               }
             </div>
           } />
        </section>

        <section className="section6">
          <div style={{padding : '5em'}}>
            <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
              content= {<div>Some awesome features</div>}
            />
            <p>
              Lorem Ipsum X1
            </p>
          </div>
          <img src={browserImg} className="image" />
        </section>



      </div>
    );
  }
}

export default App;
