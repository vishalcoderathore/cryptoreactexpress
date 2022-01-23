import React, { Component } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

class Homepage extends Component {
  render() {
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

export default Homepage;
