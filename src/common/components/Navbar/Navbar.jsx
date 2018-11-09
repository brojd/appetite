import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        app
        <span className={styles['logo-span']}>etite</span>
      </div>
      <div className={styles.navbar}>
        {
          props.links.map(link => (
            <button
              type="button"
              key={link.id}
              className={styles['nav-button']}
              onClick={() => props.onLinkClick(link.id)}
            >
              {link.text}
            </button>
          ))
        }
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navbar;
