import React from "react";
import { Document, Page } from "react-pdf";
import samplePDF from "./sample.pdf";

function PDFViewer({ pageNumber, onDocumentLoadSuccess }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

export default PDFViewer;
