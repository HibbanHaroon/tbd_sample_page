import React from "react";
import Message from "./message";

function MessageList({ messages }) {
  return (
    <div
      style={{
        padding: "12px",
        overflowY: "auto",
      }}
    >
      {messages.map((message, index) => (
        <Message key={index} content={message.content} type={message.type} />
      ))}
    </div>
  );
}

export default MessageList;
