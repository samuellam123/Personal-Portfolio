import { Layout } from "antd";
import Home from "./Home";
import WebHeader from "./Header";

const { Header, Content, Footer } = Layout;

export default function WebLayout() {
    return (
        <>
            <Layout style={{
                minHeight: "100vh", display: 'flex',
                alignItems: 'center'
            }}>
                <Header style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <WebHeader />
                </Header>
                <Layout >
                    <Content style={{ minHeight: "100vh" }}>
                        <Home />
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout >
        </>
    )
}
