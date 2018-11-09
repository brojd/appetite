import React from 'react';
import PropTypes from 'prop-types';
import MealRecipes from './MealRecipes/MealRecipes';
import styles from './Cookbook.module.scss';

function Cookbook(props) {
  return (
    <div className={styles.cookbook}>
      {
        props.meals.map(meal => (
          <MealRecipes
            key={meal.text}
            mealName={meal.text}
          />
        ))
      }
    </div>
  );
}

Cookbook.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cookbook;
