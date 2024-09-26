import React from "react";
import { Layout } from "antd";

import bookData from "../../constants/book-data";
import ContentBox from "./sections/content-box";
import BookInformation from "./sections/book-information";
import PDFCard from "./sections/pdf-card";

function Book({ contentRef, collapsed }) {
  return (
    <Layout
      style={{
        padding: "12px",
        height: "100%",
      }}
    >
      {/* Displaying Book card and Chapters Menu */}
      <BookInformation bookData={bookData.book} />

      {/* Where user can take chat or quiz */}
      <ContentBox />

      {/* PDF Viewer */}
      <PDFCard contentRef={contentRef} collapsed={collapsed} />
    </Layout>
  );
}

export default Book;
