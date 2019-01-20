import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationBrand = (props) => (
    <NavLink
        className='navbar-brand'
        to={props.link}
        exact={props.exact}
    >{props.children}
    </NavLink>
);

export default navigationBrand;