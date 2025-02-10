// import { useState } from 'react';
import { Anchor, Button, Flex, type AnchorProps } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

type AnchorItem = Required<AnchorProps>['items'][number];

const items: AnchorItem[] = [
    {
        key: 'home',
        href: '#home',
        title: 'Home',
    },
    {
        key: 'projects',
        href: '#projects',
        title: 'Projects',
    },
    {
        key: 'experience',
        href: '#experience',
        title: 'Experience',
    },
    {
        key: 'about',
        href: '#about',
        title: 'About',
    },]

export default function WebHeader() {
    return (
        <>
            <Flex align="center" justify='space-between' style={{ height: '100%' }}>

                <Title level={4} style={{ backgroundColor: 'white', margin: 0 }}>Personal Portfolio</Title>

                <Flex align='center' gap={"large"}>
                    <Anchor
                        direction="horizontal"
                        items={items}
                        style={{ backgroundColor: 'white' }}
                    >
                    </Anchor>

                    <Button iconPosition="end" href="https://tinyurl.com/LamYuEnResume" target="__blank" icon={<DownloadOutlined />}>
                        Download Resume
                    </Button>
                </Flex>
            </Flex >
        </>
    )
}
