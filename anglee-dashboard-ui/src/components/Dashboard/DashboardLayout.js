import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon} from "antd";
const { Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DashboardLayout = props => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={props.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" selectedKeys={props.selectedKeys} mode="inline">
          <Menu.Item
            key="statistics"
            onClick={() => {
              props.updateMenuKey(["statistics"]);
            }}
          >
            <Icon type="pie-chart" />
            <span>Statistics</span>
            <Link to={props.rootUrl} />
          </Menu.Item>
          <SubMenu
            key="reviews"
            title={
              <span>
                <Icon type="solution" />
                <span>Reviews</span>
              </span>
            }
          >
            <Menu.Item
              key="imdb"
              onClick={() => {
                props.updateMenuKey(["imdb"]);
              }}
            >
              <span>IMDb</span> <Link to={`${props.rootUrl}/reviews/imdb`} />
            </Menu.Item>
            <Menu.Item key="rotten"> Rotten Tomatoes </Menu.Item>
            <Menu.Item key="metacritic"> Metacritic </Menu.Item>
            <Menu.Item key="douban"> Douban </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        {props.content}
        <Footer style={{ textAlign: "center" }}>
          {"AngLee Dashboard ©2019 Created by Kurt & Renee"}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
