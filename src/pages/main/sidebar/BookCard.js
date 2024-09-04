import React from "react";
import { Card, Typography, Row, Col } from "antd";
import bookData from "../../../constants/data/bookData.json";

const { Title, Text } = Typography;

const BookCard = () => {
  const { book } = bookData;

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "1px",
        padding: "0",
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
            padding: "8px",
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
        <Col span={16} style={{ padding: "8px" }}>
          <Title level={4} style={{ marginBottom: "4px" }}>
            {book.title}
          </Title>
          <Text strong>Author:</Text> {book.author}
          <br />
          <Text strong>Publication Year:</Text> {book.publicationYear}
          <br />
          <Text strong>ISBN:</Text> {book.isbn}
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
