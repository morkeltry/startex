import React, { Component, } from 'react';
import './App.css';
import H2Like from './components/H2Like.js';
import SingleLineGrid from './components/SingleLineGrid.js';
import NavVertical from './components/NavVertical.js';
import SignupNewsletter from './components/SignupNewsletter.js';
import browserImg from './images/section6-browser.png';
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
          There is no other platform by eck as like <br />
        </section>

        <section className="bg-pink-triangle">
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}
            content= {<div>There is no other platforms for you as like</div>}
          />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          <br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </p>
        </section>

        <section className="section3">
          <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
            content= {<div>Some aw....esome features</div>}
          />
          <SingleLineGrid data = {features}

          />
        </section>

        <section className="bg-pink-triangle">
          <H2Like style={{align:'left', pinkBefore:'NEW FEATURES', pinkAfter:'....'}}
          content= {<div>Responsive design, just need your tap</div>}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </section>

        <section className="section5">
          <SingleLineGrid data= {founders} />
          <SingleLineGrid data= {logos} />
        </section>

        <section className="section6">
          <div style={{padding : '5em'}}>
            <H2Like style={{align:'center', pinkBefore:'NEW FEATURES'}}
              content= {<div>Some awesome features</div>}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
          <img src={browserImg} alt="browser pic" className="image" />
        </section>


        <footer className="bg-pink-triangle">
          <div style={{display : 'inline'}}>
            <address>
            </address>
            <NavVertical id="support" items={links['support']} />
            <NavVertical id="about-us" items={links['aboutUs']} />
            <SignupNewsletter />
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
