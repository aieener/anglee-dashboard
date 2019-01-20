import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

class AngLeeDashBoard extends Component {
    render() {
        return (
            <div className='AngLeeDashBoard'>
                <header>
                    <NavigationItems></NavigationItems>
                </header>
                <Switch>
                    <Route 
                        path='/anglee-dashboard/'
                        exact
                        component= {() => <h1 className='text-center'> Welcome to AngLeeDashBoard !</h1>}
                    ></Route>

                    <Route 
                        path='/anglee-dashboard/chicago'
                        exact
                        component= {() => <h1 className='text-center'> Chicago</h1>}
                    ></Route>
                    <Route 
                        path='/anglee-dashboard/newyork'
                        exact
                        component= {() => <h1 className='text-center'> New York</h1>}
                    ></Route>
                    <Route 
                        path='/anglee-dashboard/washington'
                        exact
                        component= {() => <h1 className='text-center'> Washington</h1>}
                    ></Route>
                </Switch>
            </div>
        )
    }
}

export default AngLeeDashBoard;