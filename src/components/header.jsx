import React from "react";
import { Button, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import AvatarWithText from "./avatar-with-text";

const { useToken } = theme;

const Header = ({ collapsed, setCollapsed }) => {
  const { token } = useToken();
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: token.border,
        backgroundColor: token.colorWhite,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <AvatarWithText text="John Doe" subtitle="Subtitle" isBadge={true} />
    </header>
  );
};

export default Header;
