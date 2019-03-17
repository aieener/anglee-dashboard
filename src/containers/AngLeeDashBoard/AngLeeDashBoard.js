import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import NewYorkTimesPage from './Pages/NewYorkTimes/NewYorkTimes';
import HomePage from './Pages/HomePage/HomePage';
import DashboardPage from './Pages/Dashboard/Dashboard';

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
            component={HomePage}
          ></Route>

          <Route
            path='/anglee-dashboard/chicago'
            exact
            component={() => <h1 className='text-center'> Chicago</h1>}
          ></Route>
          <Route
            path='/anglee-dashboard/newyork'
            exact
            component={NewYorkTimesPage}
          ></Route>
          <Route
            path='/anglee-dashboard/dashboard'
            exact
            component={DashboardPage}
          ></Route>
        </Switch>
      </div>
    )
  }
}

export default AngLeeDashBoard;