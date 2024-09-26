import { Flex, Input, Typography, theme } from "antd";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { useToken } = theme;

function DashboardHeader() {
  const { token } = useToken();
  return (
    <Flex
      vertical
      style={{
        backgroundColor: token.colorWhite,
        padding: "16px",
        border: token.border,
        borderRadius: "16px",
      }}
    >
      <Input.Search
        placeholder="Search for courses here..."
        size="large"
        onSearch={(value) => console.log(value)}
        prefix={
          <SearchOutlined
            style={{
              fontSize: 16,
              color: "#808080",
              marginRight: 6,
            }}
          />
        }
        enterButton={
          <SendOutlined
            style={{
              fontSize: 16,
              color: "#ffffff",
            }}
          />
        }
      />
      <Title level={3} style={{ margin: 0, marginTop: 15, marginBottom: 5 }}>
        Hey John Doe! Let's learn something new today!
      </Title>
    </Flex>
  );
}

export default DashboardHeader;
