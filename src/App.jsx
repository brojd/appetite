import React, { Component } from 'react';
import './App.module.scss';
import Navbar from './common/components/Navbar/Navbar';
import Home from './screens/Home/Home';
import { navLinks } from './common/config/dict';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = [
      { id: 'plannig', link: navLinks.planning },
      { id: 'groceryList', link: navLinks.grocerylist },
      { id: 'recipes', link: navLinks.recipes },
      { id: 'timer', link: navLinks.timer },
    ];

    return (
      <div>
        <Navbar
          links={links}
        />
        <Home />
      </div>
    );
  }
}

export default App;
