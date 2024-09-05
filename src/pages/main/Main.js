import React from "react";
import { Layout } from "antd";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContentArea from "./content/ContentArea";
import Sidebar from "./sidebar/Sidebar";
import bookData from "../../constants/data/bookData.json";

const { Footer, Content } = Layout;

function Main() {
  return (
    <Layout style={{ width: "100%", backgroundColor: "#fff" }}>
      <Header />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumbs />
        <Layout
          style={{
            padding: "6px 0",
            background: "#fff",
          }}
        >
          <Sidebar bookData={bookData} />
          <ContentArea />
        </Layout>
      </Content>
      <Footer
        style={{
          backgroundColor: "#F2F6FA",
          textAlign: "center",
          color: "#0D52FB",
        }}
      >
        TBD Sample Page ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default Main;
