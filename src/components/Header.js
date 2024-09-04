import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items1 = [
  { key: "1", label: "Home" },
  { key: "2", label: "Chat" },
  { key: "3", label: "Generate Quiz" },
];

const Header = () => {
  const navigate = useNavigate();

  // Handler to navigate to different routes
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/chat");
        break;
      case "3":
        navigate("/generate-quiz");
        break;
      default:
        break;
    }
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        background: "#001529",
        padding: "0 16px",
      }}
    >
      <div style={{ marginRight: "16px", color: "white", fontSize: "20px" }}>
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          style={{ marginRight: "16px", verticalAlign: "middle" }}
        />
        Sample Page
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
        onClick={handleMenuClick}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </header>
  );
};

export default Header;
