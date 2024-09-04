import React, { useState } from "react";
import { Card, Button, Row, Col } from "antd";
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
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", padding: "0 10px" }}
    >
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <Card
          style={{
            width: "70%",
            margin: "0 auto",
            borderColor: "grey",
            borderWidth: "1px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <PDFViewer
            pageNumber={pageNumber}
            onDocumentLoadSuccess={onDocumentLoadSuccess}
          />
          <div style={{ marginTop: 20 }}>
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
        </Card>
      </Col>
    </Row>
  );
};

export default ChapterContent;
