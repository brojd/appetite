import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';
import { modalDict } from '../../../../common/config/dict';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.shouldShow
        ? cn(styles.modal, styles['show-modal'])
        : cn(styles.modal, styles['hide-modal'])}
      >
        <section className={styles['modal-main']}>
          <button
            type="button"
            onClick={this.props.hideModal}
            className={styles['close-button']}
          >
            Back
          </button>
          <form>
            <div>
              <input
                type="text"
                className={styles['recipe-name']}
                placeholder={modalDict.modal[0]}
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Modal;
