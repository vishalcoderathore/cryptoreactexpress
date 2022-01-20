import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  LogoutOutlined,
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

  renderNavbarContent() {
    const userLoggedIn = this.props.auth;
    switch (userLoggedIn) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <Menu.Item key='login' icon={<GoogleOutlined />}>
              <a href='/auth/google'>Login with Google</a>
            </Menu.Item>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <Menu.Item key='home' icon={<HomeOutlined />}>
              <Link to='/home'>Home</Link>
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
            <Menu.Item key='logout' icon={<LogoutOutlined />}>
              <a href='/api/logout'>Logout {userLoggedIn.displayName}</a>
            </Menu.Item>
          </React.Fragment>
        );
    }
  }

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
            <Link
              to={this.props.auth ? '/home' : '/'}
              style={{ color: 'white' }}>
              Cryptoverse
            </Link>
          </Typography.Title>
        )}
        <Menu
          theme='dark'
          defaultSelectedKeys={['home']}
          mode='inline'
          inlineIndent='24'>
          {this.renderNavbarContent()}
        </Menu>
      </Sider>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);
