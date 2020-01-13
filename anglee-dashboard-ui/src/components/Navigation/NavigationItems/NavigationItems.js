import React from "react";

import { NavLink } from "react-router-dom";
import { Layout, Menu} from "antd";
import styled from "styled-components";
const { Header} = Layout;

const MenuItem = styled(Menu.Item)`
  float: right;
`;
const StyledHeader = styled(Header)`
  padding: 0;
`;

const navigationItems = () => (
  <StyledHeader>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="home">
        <span>Ang Lee Dashboard</span>
        <NavLink to="/" exact />
      </Menu.Item>
      <MenuItem key="dashboard">
        <span>Dashboard</span>
        <NavLink to="/dashboard" exact />
      </MenuItem>
      <MenuItem key="admin">
        <span>Admin </span>
        <NavLink to="/admin" exact />
      </MenuItem>
    </Menu>
  </StyledHeader>
);

export default navigationItems;
