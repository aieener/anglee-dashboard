import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoardLayout from "../../../../components/Dashboard/DashboardLayout";
import { Layout, Breadcrumb } from "antd";
import IMDbTableComtainer from "./IMDbTable/IMDbTable";
const { Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: true,
    selectedKeys: ["statistics"],
  };

  updateMenuKey = newKey => {
    this.setState({ selectedKeys: newKey });
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const defaultContent = (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          Renee is an egg
        </div>
      </Content>
    );

    const rootUrl = "/dashboard";
    const content = (
      <div>
        <Route path={rootUrl} exact render={() => defaultContent} />
        <Route
          path={`${rootUrl}/reviews/imdb`}
          exact
          render={() => <IMDbTableComtainer/>}
        />
      </div>
    );

    return (
      <Router>
        <DashBoardLayout
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          content={content}
          selectedKeys={this.state.selectedKeys}
          rootUrl={rootUrl}
          updateMenuKey={this.updateMenuKey}
        />
      </Router>
    );
  }
}
export default Dashboard;
