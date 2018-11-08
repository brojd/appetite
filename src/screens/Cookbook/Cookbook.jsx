import React, { Component } from 'react';
import MealRecipes from './RecipesList/MealRecipes';
import styles from './Cookbook.module.scss';

class Cookbook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cookbook}>
        {
          this.props.meals.map(meal => (
            <MealRecipes mealName={meal.text} />
          ))
        }
      </div>
    );
  }
}

export default Cookbook;
