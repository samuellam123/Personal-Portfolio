'use client';

import { useState } from "react";

import { Anchor, Button, Drawer, Flex, Grid, Image, Layout, Typography, type AnchorProps } from "antd";
import { MenuOutlined } from '@ant-design/icons';

import { contactLinks } from "../data/aboutData";
import { name, profilepic } from "../data/homeData";
import WebContent from "./WebContent";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

type WebLayoutProps = {
    focus?: string;
};

type AnchorItem = Required<AnchorProps>['items'][number];

const navItemStyle = {
    display: 'block',
    fontSize: '18px',
    fontWeight: 500,
    margin: '0 0 18px'
} as const;

const navItems: AnchorItem[] = [
    { key: 'home', href: '#home', title: <span style={navItemStyle}>Home</span> },
    { key: 'education', href: '#education', title: <span style={navItemStyle}>Education</span> },
    { key: 'experience', href: '#experience', title: <span style={navItemStyle}>Work Experience</span> },
    { key: 'awards', href: '#awards', title: <span style={navItemStyle}>Awards</span> },
    { key: 'projects', href: '#projects', title: <span style={navItemStyle}>Projects</span> },
    { key: 'about', href: '#about', title: <span style={navItemStyle}>About Me</span> },
];

export default function WebLayout({ focus }: WebLayoutProps = {}) {
    const screens = useBreakpoint();
    const isDesktop = screens.md;
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleAnchorClick: AnchorProps['onClick'] = (_e, link) => {
        const targetId = link?.href?.replace('#', '');
        if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (!isDesktop) {
            setDrawerOpen(false);
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {isDesktop ? (
                <Sider width={280} style={{
                    backgroundColor: 'white',
                    borderRight: '1px solid #f0f0f0',
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                }}>
                    <SidebarContent onAnchorClick={handleAnchorClick} />
                </Sider>
            ) : (
                <>
                    <Button
                        style={{
                            position: 'fixed',
                            top: 16,
                            left: 16,
                            zIndex: 1000,
                        }}
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerOpen(true)}
                    />
                    <Drawer
                        placement="left"
                        width={260}
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <SidebarContent onAnchorClick={handleAnchorClick} />
                    </Drawer>
                </>
            )}

            <Layout style={{ background: 'white', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Content
                    style={{
                        padding: '0 64px 48px'
                    }}
                >
                    <WebContent focus={focus} />
                </Content>
                <div style={{ textAlign: 'center', padding: '12px 0' }}>
                    © 2025 Samuel Lam. All rights reserved. Built with Next.js & TypeScript. Deployed on Vercel. Last updated Nov 2025.
                </div>
            </Layout>
        </Layout>
    )
}

type SidebarContentProps = {
    onAnchorClick?: AnchorProps['onClick'];
};

function SidebarContent({ onAnchorClick }: SidebarContentProps) {
    return (
        <Flex vertical justify="space-between" style={{ height: '100%', padding: '32px 24px' }}>
            <Flex vertical gap="middle">
                <Flex vertical align="center" gap="small">
                    <Image
                        src={profilepic}
                        alt={name}
                        width={120}
                        height={120}
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                        preview={false}
                    />
                </Flex>
                <Anchor
                    affix={false}
                    direction="vertical"
                    items={navItems}
                    style={{ background: 'transparent' }}
                    onClick={onAnchorClick}
                />
            </Flex>

            <Flex vertical gap="middle">
                {contactLinks.map((contact) => (
                    <a
                        key={contact.name}
                        href={contact.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'block', paddingLeft: '12px' }}
                    >
                        <Flex align="center" gap="small">
                            <Image src={contact.img} alt={contact.name} width={20} preview={false} />
                            <Text style={{ fontSize: '16px' }}>{contact.name}</Text>
                        </Flex>
                    </a>
                ))}
            </Flex>
        </Flex>
    );
}
