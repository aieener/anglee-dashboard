import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationBrand from './NavigationBrand/NavigationBrand';

const navigationItems = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
        <NavigationBrand link="/anglee-dashboard" exact> Ang Lee Dashboard </NavigationBrand>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent' >
            <ul className='nav navbar-nav'>
                <NavigationItem link="/anglee-dashboard/admin" exact>Admin</NavigationItem>
                <NavigationItem link="/anglee-dashboard/dashboard" exact>Dashboard</NavigationItem>
            </ul>
        </div>
    </nav>
);

export default navigationItems;