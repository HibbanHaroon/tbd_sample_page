import React, { useState, useEffect } from "react";
import { Layout, Flex, Typography, Menu, theme } from "antd";
import styled from "styled-components";
import IMAGES from "../constants/images";
import {
  DashboardOutlined,
  FileTextOutlined,
  BookOutlined,
  CheckCircleOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { useToken } = theme;

const DrawerMenu = styled(Menu)`
  border: none;
  background-color: ${(props) => props.bgColor};

  .ant-menu-item {
    color: #ffffff;

    &:hover {
      .ant-menu-title-content {
        color: ${(props) => props.hoverColor};
      }

      .ant-menu-item-icon {
        color: ${(props) => props.hoverColor};
      }

      background-color: #81b0f6;
    }
  }

  .ant-menu-item-selected {
    color: ${(props) => props.primaryColor};

    .ant-menu-item-icon {
      color: ${(props) => props.primaryColor};
    }
  }
`;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function Drawer({ collapsed, setCollapsed }) {
  const { token } = useToken();
  const [showTitle, setShowTitle] = useState(!collapsed);

  useEffect(() => {
    if (!collapsed) {
      const timer = setTimeout(() => setShowTitle(true), 150);
      return () => clearTimeout(timer);
    } else {
      setShowTitle(false);
    }
  }, [collapsed]);

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
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
      style={{ borderRight: token.border, backgroundColor: token.colorPrimary }}
    >
      <Flex style={{ padding: "24px" }}>
        <img
          src={IMAGES.logo}
          alt="TBD Logo"
          style={{ width: "30px", height: "30px" }}
        />
        {collapsed || !showTitle ? null : (
          <Typography.Title
            level={3}
            style={{ margin: "0", marginLeft: "10px", color: token.colorWhite }}
          >
            TBD
          </Typography.Title>
        )}
      </Flex>
      <DrawerMenu
        bgColor={token.colorPrimary}
        primaryColor={token.colorPrimary}
        hoverColor={token.colorWhite}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default Drawer;
