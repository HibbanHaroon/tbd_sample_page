import React, { useState } from "react";
import { Layout, Space, Button } from "antd";
import ChapterContent from "./pdfView/ChapterContent";
import { WechatWorkOutlined, FileDoneOutlined } from "@ant-design/icons";
import Chat from "./Chat";
import Quiz from "./Quiz";

const { Content } = Layout;

const ContentArea = () => {
  const [currentView, setCurrentView] = useState(null);

  const handleChatClick = () => {
    setCurrentView("chat");
  };

  const handleQuizClick = () => {
    setCurrentView("quiz");
  };

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          border: "2px solid #EAF2F7",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChapterContent />
      </div>
      <div style={{ marginTop: "32px" }}>
        <Space>
          <Button
            type="primary"
            size="large"
            icon={<WechatWorkOutlined />}
            onClick={handleChatClick}
          >
            Chat with PDF
          </Button>
          <Button
            type="primary"
            size="large"
            icon={<FileDoneOutlined />}
            onClick={handleQuizClick}
          >
            Take a Quiz
          </Button>
        </Space>
      </div>
      <div style={{ margin: "32px 0" }}>
        {currentView === "chat" && <Chat />}
        {currentView === "quiz" && <Quiz />}
      </div>
    </Content>
  );
};

export default ContentArea;
