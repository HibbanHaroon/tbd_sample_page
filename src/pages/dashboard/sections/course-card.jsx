import { Card, Flex, Typography, Progress, theme } from "antd";

const { Text } = Typography;
const { useToken } = theme;

function CourseCard({ imageUrl, name, subText, progress }) {
  const { token } = useToken();

  return (
    <Card
      hoverable
      cover={<img src={imageUrl} alt="Course" />}
      style={{ width: "240px" }}
      bodyStyle={{ padding: "12px" }}
    >
      <Flex vertical align="start">
        <Text
          level={5}
          style={{
            margin: "0",
            textAlign: "center",
          }}
        >
          {name}
        </Text>

        <Text
          strong={true}
          type="secondary"
          style={{
            textAlign: "center",
          }}
        >
          {subText}
        </Text>
      </Flex>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor={token.colorPrimary}
          style={{ flex: 1, marginRight: "8px" }}
        />
        <Text>{progress}%</Text>
      </div>
    </Card>
  );
}

export default CourseCard;
