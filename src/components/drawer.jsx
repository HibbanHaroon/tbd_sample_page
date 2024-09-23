import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  BookOutlined,
  CheckCircleOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function Drawer({ collapsed, setCollapsed }) {
  const items = [
    getItem("Dashboard", "1", <DashboardOutlined />),
    getItem("Reports", "2", <FileTextOutlined />),
    getItem("Ask your book", "3", <BookOutlined />),
    getItem("Take a test", "4", <CheckCircleOutlined />),
    getItem("Task", "5", <OrderedListOutlined />),
    getItem("Logout", "6", <LogoutOutlined />),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  );
}

export default Drawer;
