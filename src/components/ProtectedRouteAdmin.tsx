import { ReactNode, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Layout, theme } from "antd";
import UserProfile from "./UserProfile";
const { Header, Sider, Content } = Layout;

interface ProtectedRouteAdminProps {
  children?: ReactNode;
}

const ProtectedRouteAdmin = ({ children }: ProtectedRouteAdminProps) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  if (!token || user.role !== "admin") return <Navigate to="/login-admin" />;

  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#0D28A6",
          },
        },
      }}
    >
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
        >
          <div className="text-xl font-bold text-white p-4 w-full text-center"><Link to={"/admin/"} className="text-white">{collapsed ? "BCR" : "Binar Car Rental"}</Link></div>
          
          <Link className={`p-4 text-white flex items-center gap-2 hover:bg-white/30 hover:text-white ${collapsed ? "justify-center": "justify-start"} ${active == "dashboard" && "bg-[#CFD4ED]/[.3]"}`} to={"/admin"} onClick={() => setActive("dashboard")}>
            <HomeOutlined style={{color: "#fff", fontSize: "24px"}}/>
            <span className={`${collapsed ? "hidden" : "text-base"} `}>Dashboard</span>
          </Link>
          <Link className={`p-4 text-white flex items-center gap-2 hover:bg-white/30 hover:text-white ${collapsed ? "justify-center": "justify-start"} ${active == "list-cars" && "bg-[#CFD4ED]/[.3]"}`} to={"/admin/cars"} onClick={() => setActive("list-cars")}>
            <CarOutlined style={{color: "#fff", fontSize: "24px"}}/>
            <span className={`${collapsed ? "hidden" : "text-base"}`}>List Cars</span>
          </Link>
          
        </Sider>
        <Layout className={collapsed ? "ml-[85px]" : "ml-[200px]"}>
          <Header
            style={{
              padding: "0 2rem 0 1rem",
              background: colorBgContainer,
              position: "sticky",
              top: 0,
              zIndex: 10,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <UserProfile />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "86vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className={collapsed ? "ml-[85px]" : "ml-[200px]"}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default ProtectedRouteAdmin;
