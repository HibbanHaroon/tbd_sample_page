import React from "react";
import { Card, Typography, Row, Col } from "antd";
import bookData from "../../../constants/data/bookData.json";

const { Title } = Typography;

const BookCard = () => {
  const { book } = bookData;

  return (
    <Card
      style={{
        width: "100%",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        border: "2px solid #EAF2F7",
      }}
      bodyStyle={{ padding: "0" }}
    >
      <Row gutter={8} style={{ margin: "0" }}>
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <img
            alt="Book Cover"
            src={book.coverUrl}
            style={{
              maxWidth: "100%",
              maxHeight: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Col>
        <Col
          span={16}
          style={{
            padding: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ margin: "0" }}>
            {book.title}
          </Title>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
