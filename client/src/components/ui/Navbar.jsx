import React, { Component } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Image from 'rc-image';
import icon from '../../images/cryptoLogo.jpeg';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  UserOutlined,
  SettingOutlined,
  BulbOutlined,
  FundOutlined,
  MenuFoldOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Navbar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        breakpoint='md'>
        <div className='logo' />
        {!collapsed && (
          <Typography.Title level={4} className='logo app-title'>
            <Link to='/' style={{ color: 'white' }}>
              Cryptoverse
            </Link>
          </Typography.Title>
        )}
        <Menu
          theme='dark'
          defaultSelectedKeys={['home']}
          mode='inline'
          inlineIndent='24'>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='cryptocurrencies' icon={<FundOutlined />}>
            <Link to='/cryptocurrencies'>Cryptocurriences</Link>
          </Menu.Item>
          <Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
            <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item key='news' icon={<BulbOutlined />}>
            <Link to='/news'>News</Link>
          </Menu.Item>
          <Menu.Item key='login' icon={<GoogleOutlined />}>
            <Link to='#'>Login with Google</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Navbar;
