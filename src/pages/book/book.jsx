import React from "react";
import { Layout } from "antd";

import bookData from "../../constants/book-data";
import ChaptersMenu from "./sections/chapters-menu";
import ContentBox from "./sections/content-box";
import BookInformation from "./sections/book-information";

function Book() {
  return (
    <Layout
      style={{
        padding: "12px",
        background: "#fff",
        height: "100%",
      }}
    >
      <ChaptersMenu bookData={bookData.book} />

      {/* Where user can take chat or quiz */}
      <ContentBox />

      {/* Where book card, recommendations and pdf will be displayed */}
      <BookInformation bookData={bookData.book} />
    </Layout>
  );
}

export default Book;
