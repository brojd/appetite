import React, { Component } from 'react';
import Navbar from './common/components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Cookbook from './screens/Cookbook/Cookbook';
import MealPlanning from './screens/MealPlanning/MealPlanning';
import GroceryList from './screens/GroceryList/GroceryList';
import Timer from './screens/Timer/Timer';
import { navDict } from './common/config/dict';

const meals = [
  { id: 'breakfast', text: navDict.meals[0] },
  { id: 'snack', text: navDict.meals[1] },
  { id: 'lunch', text: navDict.meals[2] },
  { id: 'dinner', text: navDict.meals[3] },
];

const linksObj = [
  { id: 'home', text: navDict.links[0], component: <Home /> },
  { id: 'cookbook', text: navDict.links[1], component: <Cookbook meals={meals} /> },
  { id: 'planning', text: navDict.links[2], component: <MealPlanning /> },
  { id: 'groceryList', text: navDict.links[3], component: <GroceryList /> },
  { id: 'timer', text: navDict.links[4], component: <Timer /> },
];

const getComponentBasingOnId = (linkId = '', links = []) => {
  const currentLinkObj = links.find(linkObj => linkObj.id === linkId);
  return currentLinkObj.component;
};


class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    this.state = {
      currentLinkId: 'home',
    };
  }

  handleNavLinkClick(clickedLink) {
    this.setState({ currentLinkId: clickedLink });
  }

  render() {
    const { state } = this;

    return (
      <div>
        <Navbar
          links={linksObj}
          onLinkClick={this.handleNavLinkClick}
        />
        <div>
          {
            getComponentBasingOnId(state.currentLinkId, linksObj)
          }
        </div>
      </div>
    );
  }
}

export default App;
