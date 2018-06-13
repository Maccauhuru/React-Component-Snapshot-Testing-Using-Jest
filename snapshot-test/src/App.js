import React, { Component } from 'react';
import Items from './Components/Items';

class App extends Component {
  render() {
      const items = ['Matrix 1','Matrix 2','Matrix Reloaded','Next Matrix Movie','Future Matrix movie'];
      return(
        <Items items={items}/>
      );
  }
}

export default App;
