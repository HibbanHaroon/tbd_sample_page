import React, { useState, useEffect, useCallback } from "react";
import { Card, Flex, Button, theme } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PDFViewer from "../../../components/pdf-viewer";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const { useToken } = theme;

function PDFCard({ contentRef, collapsed }) {
  const { token } = useToken();
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [viewerWidth, setViewerWidth] = useState(300);
  const [viewerHeight, setViewerHeight] = useState(400);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const getScalingRatios = (contentWidth) => {
    if (contentWidth >= 1800) {
      return { widthRatio: 0.35, heightRatio: 0.49 };
    } else if (contentWidth >= 1440) {
      return { widthRatio: 0.32, heightRatio: 0.4 };
    } else if (contentWidth >= 900) {
      return { widthRatio: 0.18, heightRatio: 0.28 };
    } else {
      return { widthRatio: 0.12, heightRatio: 0.2 };
    }
  };

  const updateViewerDimensions = useCallback(() => {
    if (contentRef && contentRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      const { widthRatio, heightRatio } = getScalingRatios(contentWidth);

      setViewerWidth(contentWidth * widthRatio);
      setViewerHeight(contentWidth * heightRatio);
    }
  }, [contentRef]);

  // Debounced method to allow DOM reflow to complete before measuring
  const debounceUpdateDimensions = useCallback(() => {
    requestAnimationFrame(() => {
      updateViewerDimensions();
    });
  }, [updateViewerDimensions]);

  useEffect(() => {
    // Use ResizeObserver to handle size changes more reliably
    if (contentRef && contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        debounceUpdateDimensions();
      });
      resizeObserver.observe(contentRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [contentRef, debounceUpdateDimensions]);

  useEffect(() => {
    debounceUpdateDimensions();
  }, [collapsed, debounceUpdateDimensions]);

  return (
    <Card
      style={{
        width: `${viewerWidth + 120}px`,
        height: `${viewerHeight}px`,
        marginLeft: "12px",
        borderRadius: "16px",
        border: token.border,
        backgroundColor: token.colorWhite,
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
          width={viewerWidth}
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
