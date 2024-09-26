import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./constants/theme";
import MainLayout from "./layout/main-layout";
import { Book, Dashboard } from "./pages/pages";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
