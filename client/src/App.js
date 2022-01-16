// Importing React Components
import { React, Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

// Importing Ant UI components
import { Layout } from 'antd';

// Importing custom components
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Footer,
} from './components';

// Importing global css
import './css/App.css';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    console.log('fetchUser called');
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Navbar />
          <Layout className='site-layout'>
            <div className='routes'>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route
                  path='/cryptocurrencies'
                  element={<Cryptocurrencies />}
                />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route path='/news' element={<News />} />
              </Routes>
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
