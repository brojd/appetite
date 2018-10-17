import React, { Component } from 'react';
import styles from './Home.module.scss';
import background from '../../common/pictures/close-up-colors.jpg';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.background}
          src={background}
          alt="close-up-colors"
        />
      </div>
    );
  }
}

export default Home;