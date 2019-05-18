import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Dashboard extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Statistics</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="project" />
                  <span>Press</span>
                </span>
              }
            >
              <Menu.Item key="3">New York Times</Menu.Item>
              <Menu.Item key="4">Washingtom Post</Menu.Item>
              <Menu.Item key="5">Chicago Tribune</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="solution" />
                  <span>Reviews</span>
                </span>
              }
            >
              <Menu.Item key="6"> Douban </Menu.Item>
              <Menu.Item key="8"> Zhihu </Menu.Item>
              <Menu.Item key="9"> Rotten Tomatoes </Menu.Item>
            </SubMenu>

            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Blog</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Press</Breadcrumb.Item>
              <Breadcrumb.Item>New York Times</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Renee is an Egg.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {"AngLee Dashboard ©2019 Created by Kurt & Renee"}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Dashboard;
