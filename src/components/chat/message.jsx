import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

function Message({ content, type }) {
  const isUser = type === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          maxWidth: "60%",
          padding: "8px 12px",
          borderRadius: "16px",
          background: isUser ? "#0D52FB" : "#eaf2f7",
          textAlign: isUser ? "right" : "left",
        }}
      >
        <Text style={{ color: isUser ? "#fff" : "#000" }}>{content}</Text>
      </div>
    </div>
  );
}

export default Message;
