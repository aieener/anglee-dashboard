import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import NewYorkTimesPage from './Pages/NewYorkTimes/NewYorkTimes';
import HomePage from './Pages/HomePage/HomePage';
import AdminPage from './Pages/Admin/Admin';
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
            path='/anglee-dashboard/admin'
            exact
            component={AdminPage}
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