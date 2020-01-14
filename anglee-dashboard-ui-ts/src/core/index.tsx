import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Layout } from "antd"
import { NavigationItems } from "./components/navigation";

export const AppComponent: React.FC = () => {
  return (
    <Layout className="layout">
      <HashRouter>
        <NavigationItems />
        <Route path="/" exact component={() => <h1>home page</h1>}></Route>
        <Route path="/admin" exact component={() => <h1>admin page</h1>}></Route>
        <Route path="/dashboard" exact component={() => <h1>dashboard </h1>}></Route>
      </HashRouter>
    </Layout>
  );
}
