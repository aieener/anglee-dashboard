import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AngLeeDashBoard from './containers/AngLeeDashBoard/AngLeeDashBoard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <AngLeeDashBoard></AngLeeDashBoard>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
