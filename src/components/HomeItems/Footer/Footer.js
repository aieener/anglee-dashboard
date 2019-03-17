import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.css';
const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <ul>
                <li>
                    this site for my dear Renee
                    </li>
                <li>
                    Renee is the best!
                    </li>
                <li>
                    <FontAwesomeIcon icon={faCoffee} className='mx-2' />
                    <FontAwesomeIcon icon={faFilm} className='mx-2' />
                    <FontAwesomeIcon icon={faWineGlassAlt} className='mx-2' />
                </li>
            </ul>
        </footer>
    )
}

export default Footer
