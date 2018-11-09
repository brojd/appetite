import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import styles from './MealRecipes.module.scss';

class MealRecipes extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false,
    };
  }

  toggleModal(val) {
    this.setState({ showModal: !!val });
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
          onClick={() => this.toggleModal(true)}
        >
          add recipe
        </button>
        <div className={styles.modal}>
          <Modal
            shouldShow={this.state.showModal}
            hideModal={() => this.toggleModal(false)}
          />
        </div>
      </div>
    );
  }
}

MealRecipes.propTypes = {
  mealName: PropTypes.string.isRequired,
};

export default MealRecipes;
