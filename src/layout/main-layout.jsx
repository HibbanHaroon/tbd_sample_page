import React, { useState } from "react";
import { Layout } from "antd";
import Header from "../components/header";
import Drawer from "../components/drawer";

const { Content } = Layout;

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Drawer collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ width: "100%" }}>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
