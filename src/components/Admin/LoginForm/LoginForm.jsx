import React, { useState } from 'react'
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { singInApi } from '../../../api/user.js'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants'

import './LoginForm.scss'

export default function LoginForm() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e => {
        console.log(inputs);
        const result = await singInApi(inputs)

        if (result.message) {
            notification['error']({
                message: result.message
            })
        } else {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)

            notification['success']({
                message: "Login Correcto"
            })
            window.location.href = "/admin"
        }
    }


    return (
        <Form className="login-form" onFinish={login} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="login-form__input"
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="login-form__buttom">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )
}