import React, { Component, } from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage.js';
import BackgroundTriangle from './components/BackgroundTriangle.js';
import H2Like from './components/H2Like.js';
import SingleLineGrid from './components/SingleLineGrid.js';
import NavVertical from './components/NavVertical.js';
import SignupNewsletter from './components/SignupNewsletter.js';
import pinkTriangle from './images/decorationBox.png';
import goArrow from './images/header-icon-play.png';
import macbook from './images/section4-macbook.png';
import browserImg from './images/section6-browser.png';
import startEx from './images/section7-logo.png';
// import imgMap from './helpers/imageMapper.js'
import founders from './data/founders.js';
import features from './data/features.js';
import logos from './data/logos.js';
import links from  './data/links.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>

        <section className="section1">
          <div style={{}}>
            <h1>
              There is no other platform for you as like
            </h1>
            <img />
            <form>
              <input type="image" src={goArrow} className="goArrow" alt="Go on" />
              <input type="submit" value="TRY NOW" className="pink-button" alt="Try now" />
            </form>



          </div>
        </section>

        <section className="section2-dummy-class">
          <BackgroundTriangle transform="scale (-1 1) translate(-2 -0.45) scale (1.5)" colourSecondary="#ECECEC" />
          <div style={{display : 'flex', width: '75%'}}>
            <div>
              <H2Like style={{align:'left', pinkBefore:'NEW DESIGN', pinkAfter:'....'}}
                content= {<span>There is no other platforms for you as like</span>}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                <br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
              </p>
            </div>
            <img NOTsrc={pinkTriangle} alt="" style={{height:'100%', left: '60%', overflow: 'none'}} className="iTFHmage-non-aligned" />
          </div>


        </section>

        <section className="section3">
          <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
            content= {<div>Some aw....esome features</div>}
          />
          <SingleLineGrid data = {features}

          />
        </section>

        <section className="NOTbg-pink-triangle" style={{paddingLeft: '0'}}>
          <BackgroundTriangle transform="scale (1 1) translate(-0.5 0) " colourPrimary="#FF6D6D" />
          <div style={{display : 'flex'}}>
            <img src={macbook} alt="macbook" style={{width: '80%'}} className="image-non-aligned" />
            <div>
                <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}
                content= {<span>Responsive design, just need your tap</span>}
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              </p>
            </div>
          </div>
        </section>

        <section className="section5">
          <SingleLineGrid data= {founders} />
          <SingleLineGrid data= {logos ({imageWidth :'10.5vw'})} />
        </section>

        <section className="section6">
          <div style={{padding : '5em'}}>
            <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
              content= {<span>Some awesome features</span>}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
          <img src={browserImg} alt="browser pic" className="image" />
        </section>


        <section className="NOTbg-pink-triangle">
          <BackgroundTriangle transform=" translate (0.75 0.45) rotate (180 0.5 0.5) " colourPrimary="#FF6D6D" />
          <div className="flex-container">
            <address className="flex-item-no-inline" style={{textAlign : 'left'}}>
              <img src={startEx} alt="startex logo" style={{width: '8vw'}} className="image-bottom" />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              <br /> USA &nbsp CAN 1-888123-4567
              <br /> Address: 34 Brokeit Rd. NY
            </address>
            <NavVertical id="support" items={links['support']} />
            <NavVertical id="about-us" items={links['aboutUs']} />
            <SignupNewsletter />
            <span style= {{width : '20vw'}}/>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
