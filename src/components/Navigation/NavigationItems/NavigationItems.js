import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationBrand from './NavigationBrand/NavigationBrand';

const navigationItems = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
        <NavigationBrand link="/anglee-dashboard" exact> Ang Lee Dashboard </NavigationBrand>
        <div className='navbar-collapse justify-content-end' >
            <ul className='nav navbar-nav'>
                <NavigationItem link="/anglee-dashboard/chicago" exact>Chicago</NavigationItem>
                <NavigationItem link="/anglee-dashboard/newyork" exact>New York Times</NavigationItem>
                <NavigationItem link="/anglee-dashboard/washington" exact>Washington</NavigationItem>
            </ul>
        </div>
    </nav>
);

export default navigationItems;