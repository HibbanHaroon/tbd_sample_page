import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0D52FB",
          colorBgElevated: "#F2F6FA",
          colorBgContainer: "#ffffff",
          colorBorder: "#EAF2F7",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
