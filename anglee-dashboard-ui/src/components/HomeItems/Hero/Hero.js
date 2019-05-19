import React from 'react'
import backgroundImage from '../../../assets/img/lifeOfPi-min.jpg';
import classes from './Hero.module.css';

const Hero = () => {
  let sectionStyle = {
    backgroundImage: 'url(' + backgroundImage + ')'
  };
  return (
    <div className={classes.Hero}>
      <div className={classes.BackgroundImage} style={sectionStyle}></div>
      <div className={classes.HeroContentArea}>
        <h1>Welcome to Ang Lee Dashboard</h1>
        <h3>for lovely Ang Lee fans</h3>
      </div>
    </div>
  )
}

export default Hero
