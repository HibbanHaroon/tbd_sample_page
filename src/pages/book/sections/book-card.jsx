import React from "react";
import { Card, Typography, Row, Col, theme } from "antd";

const { Title, Text } = Typography;
const { useToken } = theme;

const BookCard = ({ bookData }) => {
  const { token } = useToken();
  return (
    <Card
      style={{
        width: "100%",
        border: token.border,
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        borderBottom: "none",
      }}
    >
      <Row gutter={8} style={{ margin: "0" }} align="middle" justify="center">
        <Col span={8}>
          <img
            alt="Book Cover"
            src={bookData.coverUrl}
            style={{
              maxWidth: "100%",
              maxHeight: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Col>
        <Col span={16}>
          <Title level={5} style={{ margin: "0" }}>
            {bookData.title}
          </Title>
          <Text type="secondary" style={{ display: "block" }}>
            {bookData.author}
          </Text>
          <Text type="secondary" style={{ display: "block" }}>
            {bookData.publicationYear}
          </Text>
          <Text type="secondary" style={{ display: "block" }}>
            {bookData.isbn}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
