import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import HomePage from "./Pages/HomePage/HomePage";
import AdminPage from "./Pages/Admin/Admin";
import DashboardPage from "./Pages/Dashboard/Dashboard";
import { Layout } from "antd";

class AngLeeDashBoard extends Component {
  render() {
    return (
      <Layout className="layout">
        <HashRouter>
          <NavigationItems />
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </HashRouter>
      </Layout>
    );
  }
}

export default AngLeeDashBoard;
