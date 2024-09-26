import React from "react";
import { Layout } from "antd";
import DashboardHeader from "./sections/dashboard-header";
import BooksList from "./sections/books-list";
import DashboardSider from "./sections/dashboard-sider";

const { Content } = Layout;

function Dashboard() {
  return (
    <Layout
      style={{
        padding: "16px",
        height: "100%",
        width: "100%",
      }}
    >
      <Content>
        <DashboardHeader />
        <BooksList />
      </Content>

      <DashboardSider />
    </Layout>
  );
}

export default Dashboard;
