import "./index.css";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import TopNav from "../topnav";

const { Header, Content } = Layout;

function AdminLayoutComponent() {
  return (
    <>
      <Layout>
        <Header className="page_header">
          <TopNav />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}

export default AdminLayoutComponent;