import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';
import { modalDict } from '../../../../common/config/dict';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { id: '', unit: '', ingredient: '' },
      ],
    };
  }

  handleAddIngredientButton() {

  }

  render() {
    return (
      <div className={this.props.shouldShow
        ? cn(styles.modal, styles['show-modal'])
        : cn(styles.modal, styles['hide-modal'])}
      >
        <section className={styles['modal-main']}>
          <h1 className={styles.heading}>
            {modalDict.inputs[2]}
          </h1>
          <button
            type="button"
            className={styles['save-button']}
          >
            {modalDict.buttons[0]}
          </button>
          <button
            type="button"
            onClick={this.props.hideModal}
            className={styles['close-button']}
          >
            {modalDict.buttons[1]}
          </button>
          <form>
            <input
              type="text"
              className={styles['recipe-name']}
              placeholder={modalDict.inputs[0]}
            />
            <select className={styles['courses-list']}>
              <option value={modalDict.coursesList[0]}>{modalDict.coursesList[0]}</option>
              <option value={modalDict.coursesList[1]}>{modalDict.coursesList[1]}</option>
              <option value={modalDict.coursesList[2]}>{modalDict.coursesList[2]}</option>
              <option value={modalDict.coursesList[3]}>{modalDict.coursesList[3]}</option>
              <option value={modalDict.coursesList[4]}>{modalDict.coursesList[4]}</option>
            </select>
            <div className={styles['ingredients-container']}>
              <h2 className={styles['ingredients-heading']}>{modalDict.ingredients[0]}</h2>
              <div className={styles['ingredients-input']}>
                <div className={styles['units-row']}>
                  <label className={styles.label}>{modalDict.ingredients[1]}</label>
                  {
                    this.state.ingredients.map(({ id, unit }) => (
                      <div
                        key={id}
                        className={styles['unit-field']}
                      >
                        {unit}
                      </div>
                    ))
                  }
                  <input
                    type="text"
                    className={styles['unit-field']}
                  />
                </div>
                <div className={styles['ingredients-row']}>
                  <label className={styles.label}>{modalDict.ingredients[2]}</label>
                  {
                    this.state.ingredients.map(({ id, ingredient }) => (
                      <div
                        key={id}
                        className={styles['ingredient-field']}
                      >
                        {ingredient}
                      </div>
                    ))
                  }
                  <input
                    type="text"
                    className={styles['ingredient-field']}
                  />
                </div>
              </div>
              <button
                type="button"
                className={styles['add-ingredient-button']}
              >
                {modalDict.ingredients[3]}
              </button>
              <h2 className={styles['directions-heading']}>
                {modalDict.ingredients[4]}
              </h2>
              <textarea className={styles.directions} />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Modal;
