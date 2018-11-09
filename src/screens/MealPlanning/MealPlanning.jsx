import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../../store/meals';

class MealPlanning extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginTop: '200px' }}>
        <button onClick={() => this.props.addNewMeal('newMeal')}>add new meal</button>
        {
          this.props.meals.map(meal => (
            <div>{meal}</div>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meals: state.meals || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewMeal: newMeal => addMeal(dispatch, newMeal),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanning);
