'use client';

import { Layout } from "antd";

import WebContent from "./WebContent";
import WebHeader from "./WebHeader";

const { Header, Content, Footer } = Layout;

export default function WebLayout() {
    return (
        <>
            <Layout style={{
                minHeight: "100vh",
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Header style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: 'white'
                }}>
                    <WebHeader />
                </Header>

                <Content style={{
                    alignContent: 'center'
                }}>
                    <WebContent />
                </Content>

                <Footer>© 2025 Samuel Lam. All rights reserved. Built with Next.js & TypeScript. Deployed on Vercel.
                </Footer>
            </Layout >
        </>
    )
}
