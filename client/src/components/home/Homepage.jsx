import React, { Component } from 'react';
import { connect } from 'react-redux';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Spin } from 'antd';
import * as actions from '../../actions';

const { Title } = Typography;

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  renderHomepageContent() {
    const coinsData = this.props.coins;
    switch (coinsData) {
      case null:
        return (
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Spin />
          </Col>
        );
      default:
        return (
          <>
            <Col span={12}>
              <Statistic
                title='Total Currencies'
                value={this.props.coins.totalCoins}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title='Total Exchanges'
                value={this.props.coins.totalExchanges}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title='Total Market Cap'
                value={this.props.coins.totalMarketCap}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title='Total 24h Volume'
                value={this.props.coins.total24hVolume}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title='Total Markets'
                value={this.props.coins.totalMarkets}
              />
            </Col>
          </>
        );
    }
  }

  render() {
    return (
      <>
        <Title level={2} className='heading'>
          Global Crypto Stats
        </Title>
        <Row gutter={[24, 24]}>{this.renderHomepageContent()}</Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, coins: state.coins };
}

export default connect(mapStateToProps, actions)(Homepage);
