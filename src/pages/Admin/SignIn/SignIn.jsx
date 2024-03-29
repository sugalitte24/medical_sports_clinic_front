import React from "react";
import './SignIn.scss'
import { Layout, Tabs } from "antd";
import Logo from '../../../assets/img/logo.png'
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";
import { Navigate } from "react-router-dom";


export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Navigate to="/admin/patients" />
  }
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Steven Peña" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card" >
            <TabPane tab={<span>Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
