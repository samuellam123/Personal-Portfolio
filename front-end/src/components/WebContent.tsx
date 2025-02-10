import { Flex } from "antd";
import Home from "./Home";
import Projects from "./Projects";

export default function WebContent() {
    return (
        <>
            <Flex vertical>
                <div id="home"><Home /></div>
                <div id="projects"><Projects /></div>
                <div id="experience"><Home /></div>
                <div id="about"><Home /></div>
            </Flex>
        </>
    )
}
