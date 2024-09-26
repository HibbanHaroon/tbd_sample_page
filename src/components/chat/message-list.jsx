import React from "react";
import Message from "./message";
import RecommendationsCard from "./recommendations-card";

function MessageList({
  messages,
  showRecommendations,
  onCloseRecommendations,
  onSendRecommendation,
}) {
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
      {showRecommendations && (
        <RecommendationsCard
          onClose={onCloseRecommendations}
          onSend={onSendRecommendation}
        />
      )}
    </div>
  );
}

export default MessageList;
