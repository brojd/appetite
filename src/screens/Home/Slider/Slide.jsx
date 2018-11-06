import React from 'react';
import styles from './Slider.module.scss';

function Slide(props) {
  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${props.imgSrc})` }}
    >
      <div className={styles['slide-text']}>{props.text}</div>
    </div>
  );
}

export default Slide;
