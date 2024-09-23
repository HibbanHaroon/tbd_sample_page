import React from "react";
import { Typography } from "antd";
import IMAGES from "../constants/images";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        borderBottom: `2px solid #EAF2F7`,
      }}
    >
      <img
        src={IMAGES.logo}
        alt="TBD Logo"
        style={{ width: "30px", height: "30px" }}
      />
      <Typography.Title level={3} style={{ margin: "0", marginLeft: "10px" }}>
        TBD
      </Typography.Title>
    </header>
  );
};

export default Header;
