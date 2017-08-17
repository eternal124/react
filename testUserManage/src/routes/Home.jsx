import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import All from './All'
import '../main.css'

const { Header, Content, Sider, Footer } = Layout;
const SubMenu = Menu.SubMenu;

export const Home = ({ routes, params, children }) => (
    <Layout>
        <Sider className="left">
            <div style={{ height: '100%', borderRight: 0 }}> UserMange </div>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                <Menu.Item key="1">
                    <Icon type="home" />
                    <span><Link to='/home'>首页</Link></span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>} >
                    <Menu.Item key="2"><Link to='/seechange'>查找|修改</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/add'>添加用户</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/delete'>删除用户</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }}> UserMange </Header>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb routes={routes} params={params} />
                <div style={{ padding: 24, background: '#fff', minHeight: 660 }}>
                    { children || <All /> }
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                UserMangePage ©2017 Created by EternalZ
            </Footer>
        </Layout>
    </Layout>
)