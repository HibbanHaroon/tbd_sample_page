// ContentBox.js
import React from "react";
import { Layout, Space, Button, Tooltip, Divider, Flex, theme } from "antd";
import { SwapOutlined, MoreOutlined } from "@ant-design/icons";
import Chat from "./chat";
import AvatarWithText from "../../../components/avatar-with-text";

const { Content } = Layout;
const { useToken } = theme;

function ContentBox() {
  const { token } = useToken();
  return (
    <Layout
      style={{
        marginLeft: "12px",
        width: "25%",
        borderRadius: "16px",
        border: token.border,
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: token.colorWhite,
      }}
    >
      <Content style={{ flex: "none" }}>
        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "12px",
          }}
        >
          <AvatarWithText
            text="Mathematics"
            subtitle="24 Members"
            isBadge={false}
          />
          <Space>
            <Tooltip title="Switch to Quiz">
              <Button shape="circle" type="ghost" icon={<SwapOutlined />} />
            </Tooltip>
            <Tooltip title="More">
              <Button shape="circle" type="ghost" icon={<MoreOutlined />} />
            </Tooltip>
          </Space>
        </Flex>
        <Divider style={{ margin: "0" }} />
      </Content>

      <Content style={{ flex: 1, overflow: "hidden" }}>
        <Chat />
      </Content>
    </Layout>
  );
}

export default ContentBox;
