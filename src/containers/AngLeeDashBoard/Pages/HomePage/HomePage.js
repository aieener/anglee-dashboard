import React, { Component } from 'react';
import $ from 'jquery';
import backgroundImage from '../../../../assets/img/lifeOfPi.jpg';
import lifeOfPiImage from '../../../../assets/img/moviePoster/life_of_pi.jpg';
import billyLynnImage from '../../../../assets/img/moviePoster/billylynn.jpg';
import seJieImage from '../../../../assets/img/moviePoster/sejie.jpeg';
import woodStockImage from '../../../../assets/img/moviePoster/woodstock.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';

class HomePage extends Component {
    state = {}

    getSearchUrl(searchQuery, page) {

    }

    componentDidMount() { }

    render() {
        let sectionStyle = {
            backgroundImage: 'url(' + backgroundImage + ')'
        };
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
                <section className='hero'>
                    <div className='background-image' style={sectionStyle}></div>
                    <div className='hero-content-area'>
                        <h1>Welcome to Ang Lee Dashboard</h1>
                        <h3>for lovely Ang Lee fans</h3>
                    </div>
                </section>

                <section className='destinations'>
                    <h3 className="title">Some of our favorite Ang Lee movies:</h3>
                    <p>browse our top pick AngLee movies and see our statistical studies.</p>
                    <hr></hr>
                    <ul className="grid">
                        <li className="small" style={seJieBackground}></li>
                        <li className="large" style={billyLynnBackground}></li>
                        <li className="large" style={lifeOfPiBackground}></li>
                        <li className="small" style={woodStockBackground}></li>
                    </ul>
                </section>

                <footer>
                    <p className="m-0">
                        this site for my dear Renee
                    </p>
                    <p className="m-0">
                    Renee is the best!
                    </p>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} className='mx-2' />
                        <FontAwesomeIcon icon={faFilm} className='mx-2' />
                        <FontAwesomeIcon icon={faWineGlassAlt} className='mx-2' />
                    </div>
                </footer>

            </div>
        )
    }
}

export default HomePage;