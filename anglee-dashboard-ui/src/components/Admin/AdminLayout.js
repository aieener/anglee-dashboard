import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Sider, Footer } = Layout;
const AdminLayout = props => {
  return (
    // <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={props.onCollapse}
      >
        <Menu theme="dark" selectedKeys={props.selectedKeys} mode="inline">
          <Menu.Item
            key="movieCards"
            onClick={() => {
              props.updateMenuKey(["movieCards"]);
            }}
          >
            <Icon type="database" />
            <span>Our studies</span>
            <Link to={props.rootUrl} />
          </Menu.Item>
          <Menu.Item
            key="add"
            onClick={() => {
              props.updateMenuKey(["add"]);
            }}
          >
            <Icon type="plus-circle" />
            <span>Add new movie</span>
            <Link to={`${props.rootUrl}/add`} />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {props.content}
        <Footer style={{ textAlign: "center" }}>
          {"Ang Lee Dashboard ©2019 Created by Kurt & Renee"}
        </Footer>
      </Layout>
    </Layout>
    // </Router>
  );
};

export default AdminLayout;
