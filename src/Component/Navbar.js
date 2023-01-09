import React,{useState,useEffect} from 'react';
import { Button,Menu,Typography,Avatar } from 'antd';
import {Link } from 'react-router-dom';
import icons from '../images/icons.png'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';
const Navbar = () => {
  const[activeMenu,setActivemenu]=useState(true)
  const [screenSize, setscreenSize] = useState(null);
  useEffect(() => {
    const handleResize=()=>setscreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>window.removeEventListener('resize',handleResize)
  }, []);
  useEffect(() => {
    if(screenSize<768){
      setActivemenu(false)
    }
    else{
      setActivemenu(true)
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icons} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crytoverse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={()=>setActivemenu(!activeMenu)}>
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Navbar;

