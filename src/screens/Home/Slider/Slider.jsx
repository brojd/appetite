import React, { Component } from 'react';
import styles from './Slider.module.scss';
import photo1 from '../../../common/pictures/close-up-colors.jpg';
import photo2 from '../../../common/pictures/bakery.jpg';
import photo3 from '../../../common/pictures/baking.jpg';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderImages: [photo1, photo2, photo3],
      currentIndex: 0,
      currentImg: photo1,
      nextImg: photo2,
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({
        currentIndex: this.state.currentIndex === this.state.sliderImages.length -1
          ? 0
          : this.state.currentIndex + 1,
        currentImg: this.state.sliderImages[this.state.currentIndex],
        nextImg: this.state.sliderImages[this.state.currentIndex + 1],
      }), 5000,
    );
  }

  render() {
    return (
      <section className={styles.slider}>
        <div>
          <img
            src={this.state.currentImg}
            className={styles.current}
          />
        </div>
        <div>
          <img
            src={this.state.nextImg}
            className={styles.next}
          />
        </div>
      </section>
    );
  }
}

export default Slider;
