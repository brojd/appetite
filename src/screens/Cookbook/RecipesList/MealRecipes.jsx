import React, { Component } from 'react';
import Modal from './Modal/Modal';
import styles from './MealRecipes.module.scss';

class MealRecipes extends Component {
  constructor(props) {
    super(props);
    this.handleAddRecipeButton = this.handleAddRecipeButton.bind(this);
    this.handleCloseModalButton = this.handleCloseModalButton.bind(this);
    this.state = {
      showModal: false,
    };
  }

  handleAddRecipeButton() {
    this.setState({ showModal: true });
  }

  handleCloseModalButton() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className={styles.meal}>
        <div className={styles['meal-heading']}>
          {this.props.mealName}
        </div>
        <button
          type="button"
          className={styles['add-recipe-button']}
          onClick={() => this.handleAddRecipeButton()}
        >
          add recipe
        </button>
        <div className={styles.modal}>
          <Modal
            shouldShow={this.state.showModal}
            hideModal={() => this.handleCloseModalButton()}
          />
        </div>
      </div>
    );
  }
}

export default MealRecipes;
