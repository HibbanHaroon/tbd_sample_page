import React, { useState } from "react";
import { Layout, theme } from "antd";
import MessageList from "../../../components/chat/message-list";
import ChatInput from "../../../components/chat/chat-input";

const { Content, Footer } = Layout;
const { useToken } = theme;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const { token } = useToken();

  const addMessage = (content, type) => {
    setMessages((prevMessages) => [...prevMessages, { content, type }]);
  };

  const handleSendMessage = (message) => {
    addMessage(message, "user");

    setTimeout(() => {
      addMessage("This is a system response.", "system");
      setShowRecommendations(true);
    }, 1000);
  };

  const handleCloseRecommendations = () => {
    setShowRecommendations(false);
  };

  return (
    <Layout
      style={{
        height: "100%",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        backgroundColor: token.colorWhite,
      }}
    >
      <Content
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MessageList
          messages={messages}
          showRecommendations={showRecommendations}
          onCloseRecommendations={handleCloseRecommendations}
          onSendRecommendation={handleSendMessage}
        />
      </Content>

      <Footer style={{ padding: "0 12px 12px", background: "transparent" }}>
        <ChatInput
          onSend={handleSendMessage}
          closeRecommendations={handleCloseRecommendations}
        />
      </Footer>
    </Layout>
  );
}

export default Chat;
