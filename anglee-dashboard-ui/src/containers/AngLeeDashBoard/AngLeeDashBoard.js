import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import NewYorkTimesPage from "./Pages/NewYorkTimes/NewYorkTimes";
import HomePage from "./Pages/HomePage/HomePage";
import AdminPage from "./Pages/Admin/Admin";
import DashboardPage from "./Pages/Dashboard/Dashboard";

class AngLeeDashBoard extends Component {
  render() {
    return (
      <div className="AngLeeDashBoard">
        <header>
          <NavigationItems />
        </header>
        <Switch>
          <Route path="/anglee-dashboard/" exact component={HomePage} />

          <Route path="/anglee-dashboard/admin" exact component={AdminPage} />

          <Route
            path="/anglee-dashboard/dashboard"
            exact
            component={DashboardPage}
          />
        </Switch>
      </div>
    );
  }
}

export default AngLeeDashBoard;
