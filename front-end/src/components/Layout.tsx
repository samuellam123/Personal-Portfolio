import { Layout } from "antd";

import Home from "./Home";
import WebHeader from "./Header";
// import WebHeader from "./Header";

const { Header, Content, Footer } = Layout;

export default function WebLayout() {
    return (
        <>
            <Layout style={{
                minHeight: "100vh",
                display: 'flex',
                alignItems: 'center'
            }}>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}>
                    <WebHeader />
                </Header>

                <Layout >
                    <Content style={{ minHeight: "100vh" }}>
                        <Home />
                    </Content>
                </Layout>
                <Footer>© 2025 Samuel Lam. All rights reserved. Built with React & TypeScript. Deployed on Vercel.
                </Footer>
            </Layout >
        </>
    )
}
