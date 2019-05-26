import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import HomePage from "./Pages/HomePage/HomePage";
import AdminPage from "./Pages/Admin/Admin";
import DashboardPage from "./Pages/Dashboard/Dashboard";
import { Layout } from "antd";


class AngLeeDashBoard extends Component {
  render() {
    return (
      <Layout className="layout">
        <NavigationItems />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route
            path="/dashboard"
            exact
            component={DashboardPage}
          />
        </Switch>
      </Layout>
    );
  }
}

export default AngLeeDashBoard;
