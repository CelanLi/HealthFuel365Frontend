// 引入样式文件
import "./index.css"
import { Layout, Space } from "antd";
import { Outlet } from "react-router-dom";

import TopNav from "../../views/components/topnav";
import FooterComponent from "../../views/components/footer";

const { Header, Footer, Content } = Layout;

function LayoutComponent() {
  return (
    <>
      <Layout>
        <Header className="page_header">
          <TopNav />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer className="page_footer">
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default LayoutComponent;
