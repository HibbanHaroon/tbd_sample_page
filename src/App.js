import { ConfigProvider } from "antd";
import theme from "./constants/theme";
import Book from "./pages/book/book";
import MainLayout from "./layout/main-layout";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <Book />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
