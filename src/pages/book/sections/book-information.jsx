import React from "react";
import { Layout, Flex } from "antd";
import BookCard from "./book-card";
import RecommendationsCard from "./recommendations-card";
import PDFCard from "./pdf-card";

const { Content } = Layout;

function BookInformation({ bookData }) {
  return (
    <Content style={{ paddingLeft: "12px", background: "#fff" }}>
      <Flex
        vertical
        style={{
          width: "100%",
        }}
      >
        <BookCard bookData={bookData} />
        <RecommendationsCard />
        <PDFCard />
      </Flex>
    </Content>
  );
}

export default BookInformation;
