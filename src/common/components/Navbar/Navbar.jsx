import React, { Component } from 'react';
import styles from './Navbar.module.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.logo}>app<span className={styles['logo-span']}>etite</span></div>
        <div className={styles.navbar}>
          {
            this.props.links.map(linkElem => (
              <button
                type="button"
                key={linkElem}
                className={styles['nav-button']}
              >
                {linkElem.link}
              </button>
            ))
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;
