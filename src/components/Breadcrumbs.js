import React from "react";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
      }}
    >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Select PDFs</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
