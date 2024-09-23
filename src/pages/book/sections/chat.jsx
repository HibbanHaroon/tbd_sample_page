import React, { useState } from "react";
import { Layout } from "antd";
import MessageList from "../../../components/chat/message-list";
import ChatInput from "../../../components/chat/chat-input";

const { Content, Footer } = Layout;

function Chat() {
  const [messages, setMessages] = useState([]);

  const addMessage = (content, type) => {
    setMessages((prevMessages) => [...prevMessages, { content, type }]);
  };

  const handleSendMessage = (message) => {
    addMessage(message, "user");

    setTimeout(() => {
      addMessage("This is a system response.", "system");
    }, 1000);
  };

  return (
    <Layout
      style={{
        background: "#fff",
        height: "100%",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
      }}
    >
      <Content
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MessageList messages={messages} />
      </Content>

      <Footer style={{ padding: "0 12px 12px", background: "transparent" }}>
        <ChatInput onSend={handleSendMessage} />
      </Footer>
    </Layout>
  );
}

export default Chat;
