import React from "react";
import { Avatar, Space, Flex, Badge, Typography } from "antd";

const { Text } = Typography;

function AvatarWithText({ text, subtitle, isBadge }) {
  return (
    <Space>
      <Badge dot={isBadge} offset={[-4, 10]} color="green">
        <Avatar size={42} src="https://placekitten.com/200/200" />
      </Badge>
      <Flex vertical>
        <Text type="primary">{text}</Text>
        <Text type="secondary">{subtitle}</Text>
      </Flex>
    </Space>
  );
}

export default AvatarWithText;
