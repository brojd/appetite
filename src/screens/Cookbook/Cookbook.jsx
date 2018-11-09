import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealRecipes from './MealRecipes/MealRecipes';
import styles from './Cookbook.module.scss';

function Cookbook(props) {
  return (
    <div className={styles.cookbook}>
      <div>{props.kupa}</div>
      <button onClick={props.addTodo}>add todo</button>
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

function mapStateToProps(state) {
  return {
    kupa: state.kibel,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: () => { debugger; dispatch({ type: 'ADD_TODO', newTodo: 'newTodo' }) }, // action creator
  };
}

Cookbook.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
};



export default connect(mapStateToProps, mapDispatchToProps)(Cookbook);
