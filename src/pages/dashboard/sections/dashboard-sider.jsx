import React from "react";
import {
  Flex,
  Layout,
  Avatar,
  Typography,
  Progress,
  Button,
  Tooltip,
  theme,
} from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Title, Text } = Typography;
const { useToken } = theme;

function DashboardSider() {
  const { token } = useToken();

  return (
    <Sider
      style={{
        backgroundColor: token.colorWhite,
        marginLeft: "16px",
        padding: "16px",
        border: token.border,
        borderRadius: "16px",
      }}
      width={"20%"}
    >
      <Flex vertical justify="center" align="center">
        <Avatar size={64} icon={<UserOutlined />} />
        <Title level={4} style={{ textAlign: "center" }}>
          Morning, John Doe
        </Title>
        <Text style={{ textAlign: "center" }}>
          Continue your journey and achieve your target
        </Text>

        {/* Target */}
        <Flex vertical align="center" style={{ marginTop: "16px" }}>
          <Text strong style={{ marginTop: "8px", marginBottom: "8px" }}>
            Target
          </Text>
          <Progress type="circle" percent={75} />
        </Flex>

        {/* Action Buttons */}
        <Flex
          align="center"
          justify="space-evenly"
          style={{ marginTop: "32px", width: "100%" }}
        >
          <Tooltip title="Chat">
            <Button type="primary" shape="circle" icon={<MessageOutlined />} />
          </Tooltip>
          <Tooltip title="Notifications">
            <Button type="primary" shape="circle" icon={<BellOutlined />} />
          </Tooltip>
          <Tooltip title="Settings">
            <Button type="primary" shape="circle" icon={<SettingOutlined />} />
          </Tooltip>
        </Flex>
      </Flex>
    </Sider>
  );
}

export default DashboardSider;
