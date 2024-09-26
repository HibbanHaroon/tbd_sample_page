import React from "react";
import { Document, Page } from "react-pdf";
import samplePDF from "../constants/sample-pdf.pdf";

function PDFViewer({ pageNumber, onDocumentLoadSuccess, width }) {
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
          width={width}
        />
      </Document>
    </div>
  );
}

export default PDFViewer;
