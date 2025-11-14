'use client';

import { DownOutlined } from '@ant-design/icons';
import { Button, Flex, Image, Typography } from "antd";
import HomeText from "../data/homeData";
import { profilepic, name } from "../data/homeData";

const { Title } = Typography

export default function Home() {
    return (
        <>
            <Flex align="center" justify="space-between" style={{
                justifySelf: 'center',
                height: 'calc(100vh - 200px)',
                minHeight: '500px',
                backgroundColor: 'lightblue',
                padding: "5% 5% 0% 5%",
            }}
            >
                <Flex gap='large' vertical style={{ maxWidth: '60%' }}>
                    <Title style={{ margin: 0 }}>{name}</Title>
                    <HomeText />
                    <Button href="#projects" icon={<DownOutlined />} type="primary" style={{ minWidth: "200px", maxWidth: "300px" }}>View my projects</Button>
                </Flex>
                <Image
                    width={'30%'}
                    src={profilepic}
                    alt={name}
                />
            </Flex>

        </>
    )
}
