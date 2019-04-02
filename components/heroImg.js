import { Component } from 'react'

import '../styles/hero.scss'

class HeroImg extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeImageIndex: 1,
      imageArray: [
        '/static/hero_img_a.svg',
        '/static/hero_img_b.svg',
        '/static/hero_img_c.svg',
        '/static/hero_img_d.svg'
      ]
    }
  }

  componentDidMount() {
    // Update the hero image very few seconds

    /*
    TEMPORARILY DISABLED UNTIL I FIGURE OUT HOW TO FADE IN/OUT

    setInterval(() => {
      const {imageArray, activeImageIndex} = this.state

      if (activeImageIndex >= imageArray.length - 1) {
        this.setState({
          activeImageIndex: 0
        })
      } else {
        this.setState({
          activeImageIndex: activeImageIndex  + 1
        })
      }
    }, 3000)
    */
  }
  render() {
    const image = this.state.imageArray[this.state.activeImageIndex]
    return (
      <div className="column is-two-fifths">
        <img src={image} className="hero-img"/>
      </div>
    )
  }
}

export default HeroImg
