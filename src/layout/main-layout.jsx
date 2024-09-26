import React, { useState, useRef } from "react";
import { Layout } from "antd";
import Header from "../components/header";
import Drawer from "../components/drawer";

const { Content } = Layout;

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef(null);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Drawer collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ width: "100%" }}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content ref={contentRef}>
          {React.cloneElement(children, { contentRef, collapsed })}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
