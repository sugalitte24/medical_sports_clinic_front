import React from "react";
import { Layout } from 'antd'

export default function Error404(props) {
    const { children } = props
    const { Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Metio mal el dedo doc!! 404 </h2>
            <Layout>
                <Content>{children}</Content>
                <Footer>Footer 404</Footer>
            </Layout>
        </Layout>
    );
}