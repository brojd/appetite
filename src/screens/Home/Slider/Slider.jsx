import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { sliderDict } from '../../../common/config/dict';
import Slide from './Slide';
import styles from './Slider.module.scss';
import slide1 from '../../../common/pictures/cook-book1.jpeg';
import slide2 from '../../../common/pictures/meal-plan.jpeg';
import slide3 from '../../../common/pictures/grocery-list.jpeg';
import slide4 from '../../../common/pictures/timer.jpeg';

const slides = [
  {
    id: 1,
    imgSrc: slide1,
    text: sliderDict.slides[0],
    visible: true,
  },
  {
    id: 2,
    imgSrc: slide2,
    text: sliderDict.slides[1],
    visible: false,
  },
  {
    id: 3,
    imgSrc: slide3,
    text: sliderDict.slides[2],
    visible: false,
  },
  {
    id: 4,
    imgSrc: slide4,
    text: sliderDict.slides[3],
    visible: false,
  },
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.updateSlideIndex = this.updateSlideIndex.bind(this);
    this.state = {
      currentSlideIndex: 0,
      slides,
    };
  }

  componentDidMount() {
    window.setInterval(this.updateSlideIndex, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.updateSLideIndex);
  }

  updateSlideIndex() {
    this.setState((prevState) => {
      const isSlideTheLastOne = prevState.currentSlideIndex === slides.length - 1;
      const newSlideIndex = isSlideTheLastOne ? 0 : prevState.currentSlideIndex + 1;
      const newSlides = prevState.slides.map((slide, idx) => ({ ...slide, visible: idx === newSlideIndex }));
      return {
        currentSlideIndex: newSlideIndex,
        slides: newSlides,
      };
    });
  }

  render() {
    return (
      <section className={styles.slider}>
        {
          this.state.slides.map(slide => (
            <div key={slide.id}>
              <Transition
                in={slide.visible}
                timeout={1000}
                unmountOnExit
              >
                {
                  state => (
                    <div className={styles[state]}>
                      <Slide
                        imgSrc={slide.imgSrc}
                        text={slide.text}
                      />
                    </div>
                  )
                }
              </Transition>
            </div>
          ))
        }
      </section>
    );
  }
}

export default Slider;
