
import { Menu, Space, Typography, type MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'About',
        key: 'about'
    },
    {
        label: 'Contact',
        key: 'contact',
    },
    {
        label: 'Test',
        key: 'test',
    },
];

export default function WebHeader() {
    return (
        <>
            <Space>
                <Typography.Title level={4} style={{ color: "white" }}>Personal Portfolio</Typography.Title>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['about']}
                    items={items}
                    style={{ flex: 1, minWidth: 0, }}
                />
            </Space>
        </>
    )
}
