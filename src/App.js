import React from 'react';
import{Routes,Route,Link} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'
import  './App.css'
import {Navbar,News,Homepage,Cryptocurrencies,CryptoDetails} from './Component'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route path="/crypto/:coinuuid" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
