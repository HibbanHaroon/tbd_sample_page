// ContentBox.js
import React from "react";
import {
  Layout,
  Avatar,
  Typography,
  Space,
  Button,
  Tooltip,
  Divider,
  Flex,
} from "antd";
import { SwapOutlined, MoreOutlined } from "@ant-design/icons";
import Chat from "./chat";

const { Content } = Layout;
const { Text } = Typography;

function ContentBox() {
  return (
    <Layout
      style={{
        marginLeft: "12px",
        background: "#fff",
        width: "25%",
        borderRadius: "16px",
        border: "2px solid #EAF2F7",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
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
          <Space>
            <Avatar size={42} src="https://placekitten.com/200/200" />
            <Flex vertical>
              <Text type="primary">User Name</Text>
              <Text type="secondary">Subtitle</Text>
            </Flex>
          </Space>
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
