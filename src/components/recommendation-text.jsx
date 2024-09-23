import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const RecommendationText = ({ content }) => {
  return (
    <Text
      type="primary"
      style={{
        display: "block",
        color: "#1890ff",
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      {content}
    </Text>
  );
};

export default RecommendationText;
