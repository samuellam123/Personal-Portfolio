// import { useState } from 'react';
import { Button, Flex, Menu, type MenuProps } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Projects',
        key: 'projects',
    },
    {
        label: 'Experience',
        key: 'experience',
    },
    {
        label: 'About',
        key: 'about'
    },
];

export default function WebHeader() {
    return (
        <>
            <Flex align="center">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={items}
                    style={{ flex: 2, minWidth: 0 }}
                />
                <Button iconPosition="end" href="https://tinyurl.com/LamYuEnResume" target="__blank" icon={<DownloadOutlined />}>
                    Download Resume
                </Button>
            </Flex>
        </>
    )
}
