import React from 'react'
import lifeOfPiImage from '../../../assets/img/moviePoster/life_of_pi.jpg';
import billyLynnImage from '../../../assets/img/moviePoster/billylynn.jpg';
import seJieImage from '../../../assets/img/moviePoster/sejie.jpeg';
import woodStockImage from '../../../assets/img/moviePoster/woodstock.jpg';
import classes from './MovieGrid.module.css';

const MovieGrid = () => {
  // TODO: modulize this grid
  let lifeOfPiBackground = {
    backgroundImage: 'url(' + lifeOfPiImage + ')'
  }
  let billyLynnBackground = {
    backgroundImage: 'url(' + billyLynnImage + ')'
  }
  let seJieBackground = {
    backgroundImage: 'url(' + seJieImage + ')'
  }
  let woodStockBackground = {
    backgroundImage: 'url(' + woodStockImage + ')'
  }
  return (
    <div>
      <div className={classes.HeadOfGrid}>
        <h3>Our favorite Ang Lee movies:</h3>
        <p>browse our top pick AngLee movies and see our statistical studies.</p>
        <hr></hr>
      </div>
      <ul >
        <div className={classes.MovieGrid}>
          <li className={classes.Small} style={seJieBackground}></li>
          <li className={classes.Large} style={billyLynnBackground}></li>
        </div>
        <div className={classes.MovieGrid}>
          <li className={classes.Large} style={lifeOfPiBackground}></li>
          <li className={classes.Small} style={woodStockBackground}></li>
        </div>
      </ul>
    </div >
  )
}

export default MovieGrid
