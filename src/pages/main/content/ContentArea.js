import React, { useState } from "react";
import { Layout, Card, Space, Button } from "antd";
import ChapterContent from "./pdfView/ChapterContent";
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
        padding: "0 24px",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "20px",
        }}
      >
        <ChapterContent />
      </Card>
      <div>
        <Space>
          <Button type="primary" onClick={handleChatClick}>
            Chat with me
          </Button>
          <Button type="primary" onClick={handleQuizClick}>
            Take a Quiz
          </Button>
        </Space>
      </div>
      <div style={{ marginTop: "20px" }}>
        {currentView === "chat" && <Chat />}
        {currentView === "quiz" && <Quiz />}
      </div>
    </Content>
  );
};

export default ContentArea;
