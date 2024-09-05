import React, { useState } from "react";
import { Typography, Row, Col, Input } from "antd";
import {
  FilePdfOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

function Chat() {
  const onSearch = (value) => {
    console.log("Search input value:", value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "#F2F6FA",
      }}
    >
      <Typography.Title level={1}>How can I help you today?</Typography.Title>
      <Typography.Paragraph style={{ width: "70%", textAlign: "center" }}>
        I’m here to assist you with your PDF documents. You can ask me to find
        specific information, summarize content, or help with any queries
        related to your PDFs.
      </Typography.Paragraph>

      <Row
        gutter={[16, 16]}
        style={{ marginTop: "20px" }}
        justify="space-evenly"
      >
        <Col span={7}>
          <FeatureCard
            icon={FilePdfOutlined}
            title="Upload a PDF"
            description="Upload your PDF to start exploring its content."
          />
        </Col>

        <Col span={7}>
          <FeatureCard
            icon={SearchOutlined}
            title="Find Information"
            description="Ask me to find specific topics or keywords in your document."
          />
        </Col>

        <Col span={7}>
          <FeatureCard
            icon={QuestionCircleOutlined}
            title="Ask a Question"
            description="Have a question about the PDF? Just ask, and I’ll help you out!"
          />
        </Col>
      </Row>
      <Input.Search
        className="chat-input"
        placeholder="What do you have in mind?"
        style={{ marginTop: "20px" }}
        onSearch={onSearch}
        suffix={
          <AudioOutlined
            style={{
              fontSize: 16,
              color: "#0D52FB",
            }}
          />
        }
        enterButton={
          <SendOutlined
            style={{
              fontSize: 16,
              color: "#ffffff",
            }}
          />
        }
      />
    </div>
  );
}

export default Chat;

const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "16px",
        border: "2px solid #EAF2F7",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {React.createElement(icon, {
        style: { fontSize: "36px", color: "#0D52FB" },
      })}
      <Typography.Title level={3} style={{ margin: "10px 0" }}>
        {title}
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center" }}>
        {description}
      </Typography.Paragraph>
    </div>
  );
};
