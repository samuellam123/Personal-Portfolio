'use client';

import { Flex } from "antd";

import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";

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
