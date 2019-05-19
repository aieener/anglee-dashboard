import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const {Sider, Footer } = Layout;
const AdminLayout = props => {
  const updateToAddPage = () => {
    props.updateKey("add");
  }
  const updateToAdminPage = () => {
    props.updateKey("movieCards");
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={props.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" selectedKeys={props.selectedKeys} mode="inline">
          <Menu.Item key="movieCards" onClick={updateToAdminPage}>
            <Icon type="database" />
            <span>Our studies</span>
            <Link to={props.curUrl} />
          </Menu.Item>
          <Menu.Item key="add" onClick={updateToAddPage}>
            <Icon type="plus-circle" />
            <span>Add new movie</span>
            <Link to={props.curUrl + "/add"} />
          </Menu.Item>
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

export default AdminLayout;
