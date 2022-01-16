// Importing React Components
import { React, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

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

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout className='site-layout'>
        <div className='routes'>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </Layout>
    </Layout>
  );
};

export default App;
