import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

function Slide(props) {
  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${props.imgSrc})` }}
    >
      {
        props.text &&
        <div className={styles['slide-text']}>{props.text}</div>
      }
    </div>
  );
}

Slide.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Slide.defaultProps = {
  text: '',
};

export default Slide;
