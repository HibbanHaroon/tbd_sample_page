import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          primaryColor: "#0D52FB",
          secondaryColor: "#F2F6FA",
          whiteColor: "#ffffff",
        },
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;
