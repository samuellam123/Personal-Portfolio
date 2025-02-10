import { Flex } from "antd";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import About from "./About";

export default function WebContent() {
    return (
        <>
            <Flex vertical>
                <div id="home"><Home /></div>
                <div id="projects"><Projects /></div>
                <div id="experience"><Experience /></div>
                <div id="about"><About /></div>
            </Flex>
        </>
    )
}
