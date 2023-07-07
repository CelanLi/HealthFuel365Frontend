import "./index.css";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import TopNav from "../topnav";
import FooterComponent from "../footer";

const { Header, Footer, Content } = Layout;

function LayoutComponent() {
  return (
    <>
      {/* style={{'min-width': '940px'}} */}
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
