import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const AdminNav = () => {
    // const [collapsed, setCollapsed] = useState(false);
      // const [collapsed, setCollapsed] = useToggle();
      // const state = {
      //   collapsed: false,
      // };
    
      // const toggle = () => {
      //   this.setState({
      //     collapsed: !this.state.collapsed,
      //   });
      // };
      // const toggle = useState(true)
    // state = {
    //     collapsed: false,
    //   };
    

    //   toggle = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed,
    //     });
    //   };
    
    return (
    
    // <Layout>
    //     <Sider>

    //       <div className="logo" />
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //         <Menu.Item key="1" icon={<UserOutlined />}>
    //           nav 1
    //         </Menu.Item>
    //         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    //           nav 2
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UploadOutlined />}>
    //           nav 3
    //         </Menu.Item>
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout">
    //       <Header className="site-layout-background" style={{ padding: 0 }}>
    //         {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //           className: 'trigger',
    //           onClick: this.toggle,
    //         })}
    //       </Header>
    //       <Content
    //         className="site-layout-background"
    //         style={{
    //           margin: '24px 16px',
    //           padding: 24,
    //           minHeight: 280,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
    <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/artwork" className="nav-link">Artwork</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/artworks" className="nav-link">Artworks</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/subject" className="nav-link">Subject</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/category" className="nav-link">Category</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/sub" className="nav-link">Sub Category</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/style" className="nav-link">Style</Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/technique" className="nav-link">Technique</Link>
            </li>

            {/* <li className="nav-item">
                <Link to="/admin/coupon" className="nav-link">Coupons</Link>
            </li> */}

            <li className="nav-item">
                <Link to="/user/password" className="nav-link">Password</Link>
            </li>

        </ul>
    </nav>
)
};
export default AdminNav