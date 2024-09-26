import React from "react";
import { Layout, Flex } from "antd";
import BookCard from "./book-card";
import ChaptersMenu from "./chapters-menu";

const { Content } = Layout;

function BookInformation({ bookData }) {
  return (
    <Content style={{ paddingLeft: "12px" }}>
      <Flex
        vertical
        style={{
          width: "100%",
        }}
      >
        <BookCard bookData={bookData} />
        <ChaptersMenu bookData={bookData} />
      </Flex>
    </Content>
  );
}

export default BookInformation;
