import React, { Component } from 'react';
import Navbar from './common/components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Cookbook from './screens/Cookbook/Cookbook';
import MealPlanning from './screens/MealPlanning/MealPlanning';
import GroceryList from './screens/GroceryList/GroceryList';
import Timer from './screens/Timer/Timer';
import { navDict } from './common/config/dict';

const links = [
  { id: 'home', text: navDict.home, component: <Home /> },
  { id: 'plannig', text: navDict.mealPlanning, component: <MealPlanning /> },
  { id: 'groceryList', text: navDict.groceryList, component: <GroceryList /> },
  { id: 'cookbook', text: navDict.cookbook, component: <Cookbook /> },
  { id: 'timer', text: navDict.timer, component: <Timer /> },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.getComponentBasingOnId = this.getComponentBasingOnId.bind(this);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    this.state = {
      links,
      currentLinkId: 'home',
    };
  }

  getComponentBasingOnId(linkId = '', links= []) {
    const currentLinkObj = this.state.links.find(linkObj => linkObj.id === linkId);
    return currentLinkObj.component;
  }

  handleNavLinkClick(clickedLink) {
    this.setState({ currentLinkId: clickedLink });
  }

  render() {
    return (
      <div>
        <Navbar
          links={links}
          onLinkClick={this.handleNavLinkClick}
        />
        <div>
          {
            this.getComponentBasingOnId(this.state.currentLinkId, this.state.links)
          }
        </div>
      </div>
    );
  }
}

export default App;
