import React from "react";
import { Card, Typography, Col, theme } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import RecommendationText from "../recommendation-text";

const { Title } = Typography;
const { useToken } = theme;

function RecommendationsCard({ onClose, onSend }) {
  const { token } = useToken();

  const handleRecommendationClick = (recommendation) => {
    onSend(recommendation);
    onClose();
  };

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "16px",
        border: token.border,
        marginTop: "12px",
        position: "relative",
      }}
    >
      <CloseOutlined
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          fontSize: "12px",
          cursor: "pointer",
        }}
        onClick={onClose}
      />
      <Col>
        <Title level={5} style={{ margin: "0", marginBottom: "4" }}>
          Recommendations
        </Title>
        <div
          style={{
            position: "relative",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <RecommendationText
            content="1. What type of React hooks are the most common?"
            onClick={() =>
              handleRecommendationClick(
                "What type of React hooks are the most common?"
              )
            }
          />
          <RecommendationText
            content="2. How does one make components in React? What is so special about it and what if I code without making components; Will it affect code quality?"
            onClick={() =>
              handleRecommendationClick(
                "How does one make components in React? What is so special about it and what if I code without making components; Will it affect code quality?"
              )
            }
          />
        </div>
      </Col>
    </Card>
  );
}

export default RecommendationsCard;
