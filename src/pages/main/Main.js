import React from "react";
import { Layout, theme } from "antd";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContentArea from "./content/ContentArea";
import Sidebar from "./sidebar/Sidebar";
import bookData from "../../constants/data/bookData.json";

const { Footer, Content } = Layout;

function Main() {
  const token = theme.useToken();
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumbs />
        <Layout
          style={{
            padding: "24px 0",
            background: token.secondaryColor,
            borderRadius: "16px",
          }}
        >
          <Sidebar bookData={bookData} />
          <ContentArea />
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        TBD Sample Page ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default Main;
