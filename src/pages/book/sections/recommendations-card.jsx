import React, { useState, useRef, useEffect } from "react";
import { Card, Typography, Col } from "antd";
import RecommendationText from "../../../components/recommendation-text";

const { Title, Link } = Typography;

function RecommendationsCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight;
    const containerHeight = 60;
    if (contentHeight > containerHeight) {
      setIsOverflowing(true);
    }
  }, []);

  const maxHeight = isExpanded ? "none" : "60px";
  const overflow = isExpanded ? "visible" : "hidden";

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "16px",
        border: "2px solid #EAF2F7",
        marginTop: "12px",
      }}
    >
      <Col>
        <Title level={5} style={{ margin: "0", marginBottom: "4" }}>
          Recommendations
        </Title>
        <div
          ref={contentRef}
          style={{
            maxHeight: maxHeight,
            overflow: overflow,
            position: "relative",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <RecommendationText content="1. What type of React hooks are the most common?" />
          <RecommendationText content="2. How does one make components in React? What is so special about it and what if I code without making components; Will it affect code quality?" />
        </div>

        {isOverflowing && !isExpanded && (
          <Link
            style={{
              color: "#1890ff",
              cursor: "pointer",
              display: "block",
              marginTop: "8px",
            }}
            onClick={toggleExpanded}
          >
            See More
          </Link>
        )}

        {isExpanded && (
          <Link
            style={{
              color: "#1890ff",
              cursor: "pointer",
              display: "block",
              marginTop: "8px",
            }}
            onClick={toggleExpanded}
          >
            See Less
          </Link>
        )}
      </Col>
    </Card>
  );
}

export default RecommendationsCard;
