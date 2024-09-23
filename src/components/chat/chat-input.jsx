import React, { useState } from "react";
import { Flex,  Input, Button, Space } from "antd";
import { SendOutlined, AudioOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function ChatInput({ onSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Flex
      direction="horizontal"
      style={{
        width: "100%",
        borderRadius: "8px",
        border: "2px solid #eaf2f7",
        padding: "8px",
        alignItems: "end",
      }}
    >
      <TextArea
        placeholder="What do you have in mind?"
        autoSize={{ minRows: 1, maxRows: 6 }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{
          border: "none",
          resize: "none",
          boxShadow: "none",
          marginRight: "8px",
        }}
      />
      <Space
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          shape="circle"
          type="ghost"
          icon={
            <AudioOutlined
              style={{
                fontSize: 16,
                color: "#0D52FB",
                cursor: "pointer",
              }}
            />
          }
        />

        <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
      </Space>
    </Flex>
  );
}

export default ChatInput;
