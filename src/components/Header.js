import React from "react";
import { Typography } from "antd";
import { ReactComponent as TbdLogo } from "../assets/images/tbd_logo.svg";

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
      <TbdLogo style={{ width: "30px", height: "30px" }} />
      <Typography.Title level={3} style={{ margin: "0", marginLeft: "10px" }}>
        TBD
      </Typography.Title>
    </header>
  );
};

export default Header;
