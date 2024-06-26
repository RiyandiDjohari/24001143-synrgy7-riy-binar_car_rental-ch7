import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0D28A6",
        }
      }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
