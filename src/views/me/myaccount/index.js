import MyNav from "../components/me_nav";
import { Outlet } from "react-router";
import Layout, { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";


function MyAccount() {
  return (
    <Layout style={{backgroundColor:'rgba(3, 61, 31, 0.06)'}}>
        <Sider style={{backgroundColor:"transparent", width:"30%", margin:"0 0 0 20px"}}>
            <MyNav />
        </Sider>
        <Content style={{backgroundColor:"transparent", width:"70%", margin:"10px 0 0 0"}}>
            <Outlet />    
        </Content>
        
    </Layout>
  );
}

export default MyAccount;
