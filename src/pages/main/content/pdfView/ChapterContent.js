import React, { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PDFViewer from "./PDFViewer";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ChapterContent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PDFViewer
        pageNumber={pageNumber}
        onDocumentLoadSuccess={onDocumentLoadSuccess}
      />
      <div style={{ margin: "10px" }}>
        <Button
          icon={<LeftOutlined />}
          onClick={handlePrev}
          disabled={pageNumber <= 1}
          style={{ marginRight: 10 }}
        >
          Previous
        </Button>
        <Button
          icon={<RightOutlined />}
          onClick={handleNext}
          disabled={pageNumber >= numPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChapterContent;
