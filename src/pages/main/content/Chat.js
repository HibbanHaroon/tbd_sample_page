import React from "react";
import { Typography, Row, Col, Input, theme } from "antd";
import {
  FilePdfOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

function Chat() {
  const { token } = theme.useToken();
  // Define the onSearch function
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
        backgroundColor: token.secondaryColor,
      }}
    >
      <Typography.Title level={1}>How can I help you today?</Typography.Title>
      <Typography.Paragraph>
        I’m here to assist you with your PDF documents. You can ask me to find
        specific information, summarize content, or help with any queries
        related to your PDFs.
      </Typography.Paragraph>

      <Row
        gutter={[16, 16]}
        style={{ marginTop: "20px" }}
        justify="space-between"
      >
        <Col span={6}>
          <FeatureCard
            icon={FilePdfOutlined}
            title="Upload a PDF"
            description="Upload your PDF to start exploring its content."
          />
        </Col>

        <Col span={6}>
          <FeatureCard
            icon={SearchOutlined}
            title="Find Information"
            description="Ask me to find specific topics or keywords in your document."
          />
        </Col>

        <Col span={6}>
          <FeatureCard
            icon={QuestionCircleOutlined}
            title="Ask a Question"
            description="Have a question about the PDF? Just ask, and I’ll help you out!"
          />
        </Col>
      </Row>
      <Input.Search
        placeholder="What do you have in mind?"
        size="large"
        style={{ marginTop: "20px" }}
        onSearch={onSearch}
        suffix={
          <AudioOutlined
            style={{
              fontSize: 16,
              color: token.primaryColor,
            }}
          />
        }
        enterButton={
          <SendOutlined
            style={{
              fontSize: 16,
              color: token.whiteColor,
            }}
          />
        }
      />
    </div>
  );
}

export default Chat;

const FeatureCard = ({ icon, title, description }) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: token.whiteColor,
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      {React.createElement(icon, {
        style: { fontSize: "36px", color: token.primaryColor },
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
