import React, { Component } from 'react';
import { connect } from 'react-redux';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import * as actions from '../../actions';

const { Title } = Typography;

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCoins();
  }
  render() {
    console.log('Calling from Homepage');
    console.log(this.props);
    return (
      <>
        <Title level={2} className='heading'>
          Global Crypto Stats
        </Title>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Statistic title='Total Currencies' value='5' />
          </Col>
          <Col span={12}>
            <Statistic title='Total Exchanges' value='5' />
          </Col>
          <Col span={12}>
            <Statistic title='Total Market Cap' value='5' />
          </Col>
          <Col span={12}>
            <Statistic title='Total 24h Volume' value='5' />
          </Col>
          <Col span={12}>
            <Statistic title='Total Markets' value='5' />
          </Col>
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, coins: state.coins };
}

export default connect(mapStateToProps, actions)(Homepage);
