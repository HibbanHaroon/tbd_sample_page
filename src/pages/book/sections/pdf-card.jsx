import React, { useState } from "react";
import { Card, Flex, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PDFViewer from "../../../components/pdf-viewer";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFCard() {
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
    <Card
      style={{
        width: "100%",
        marginTop: "12px",
        borderRadius: "16px",
        border: "2px solid #EAF2F7",
      }}
    >
      <Flex align="center" justify="middle">
        <Button
          shape="circle"
          type="primary"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          disabled={pageNumber === 1}
        />

        <PDFViewer
          pageNumber={pageNumber}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
        />

        <Button
          shape="circle"
          type="primary"
          icon={<RightOutlined />}
          onClick={handleNext}
          disabled={pageNumber === numPages}
        />
      </Flex>
    </Card>
  );
}

export default PDFCard;
