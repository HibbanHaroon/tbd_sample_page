import { Typography } from "antd";

function Quiz() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <Typography.Title level={1}>Quiz</Typography.Title>
        <Typography.Paragraph>
          This is the quiz area. You can put any quiz here.
        </Typography.Paragraph>
      </div>
    </div>
  );
}

export default Quiz;
