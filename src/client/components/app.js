import React, { Component } from 'react';
import Data from './data';
import Map from './map';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Data />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
