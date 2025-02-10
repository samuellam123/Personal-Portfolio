import { Flex, Space } from "antd";
import Home from "./Home";

export default function WebContent() {
    return (
        <>
            <Space direction="vertical">
                <div id="home"><Home /></div>
                <div id="projects"><Home /></div>
                <div id="experience"><Home /></div>
                <div id="about"><Home /></div>
            </Space>
        </>
    )
}
