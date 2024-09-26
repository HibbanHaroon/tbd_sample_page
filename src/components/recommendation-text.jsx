import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const RecommendationText = ({ content, onClick }) => {
  return (
    <Text
      type="primary"
      style={{
        display: "block",
        color: "#1890ff",
        cursor: "pointer",
        textDecoration: "underline",
      }}
      onClick={onClick}
    >
      {content}
    </Text>
  );
};

export default RecommendationText;
