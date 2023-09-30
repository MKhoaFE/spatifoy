import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Avatar, Button, Layout, Space } from "antd";
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig'
import { UserOutlined } from '@ant-design/icons';
// import LoginForm from "../components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import SearchBar from "./SearchBar";
import ModalSignIn from '../modals/ModalSignIn';
import { onAuthStateChanged } from 'firebase/auth';
import ModalLogin from '../modals/ModalLogin';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const { Header } = Layout

function HeaderComponent()
{

  const [isSingIn, setisSingIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState();

  // const user = auth.currentUser

  useEffect(() =>
  {

    onAuthStateChanged(auth, user =>
    {
      if (user) {

        setUser(user)
      } else {
        setUser()
      }
    })
  }, [])
  const goBack = () =>
  {
    window.history.back();
  }
  const goForward = () =>
  {
    window.history.forward();
  }
  const [searchVisible, setSearchVisible] = useState(false);


  return (

    <Header
      style={{ margin: 10, background: "#ffffff" }}
      className="rounded justify-between flex space-x-4 "
    >
      <Space className="left">
        <button onClick={goBack}style={{  background:"white", border:"none" }}><ArrowBackIosNewIcon /></button>
        <button onClick={goForward}style={{  background:"white", border:"none"  }}><ArrowForwardIosIcon /></button>
        <SearchBar/>
      </Space>
      {
        user ? <Space>
          <Avatar style={{ backgroundColor: 'grey' }} icon={<UserOutlined />} />
          <span style={{fontWeight:"bolder"}}>Hello {user.email}</span>
          <Button onClick={() => auth.signOut()}><LogoutIcon/> Logout</Button>
        </Space> : <Space className="right">

          <Button onClick={() => setisSingIn(true)}>Sign up</Button>
          <Button onClick={() => setIsLogin(true)}>Login</Button>

        </Space>
      }


      <ModalSignIn isVisible={isSingIn} onClose={() => setisSingIn(false)} />
      <ModalLogin isVisible={isLogin} onClose={() => setIsLogin(false)} />
    </Header>
  )
}

export default HeaderComponent