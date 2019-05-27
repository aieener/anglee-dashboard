import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoardLayout from "../../../../components/Dashboard/DashboardLayout";
import { Layout, Breadcrumb } from "antd";
import MovieReviewContainer from "./MovieReviewContainer";
import IMDbTableContainer from "./Table/IMDbTableContainer";
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
      <Content style={{ margin: "16px 16px" }}>
        <Route path={rootUrl} exact render={() => defaultContent} />
        <Route
          path={`/dashboard/imdbReview`}
          exact
          render={(routeProps) => (
            <MovieReviewContainer
              handleCardOnClick={this.handleCardOnClick}
              selectedMovie={this.state.selectedMovie}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`/dashboard/imdbReview/:movieName`}
          component = {IMDbTableContainer}
        />
      </Content>
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
