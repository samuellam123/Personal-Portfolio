'use client';

import { useRef } from "react";

import { Anchor, Flex, Image, Layout, Typography, type AnchorProps } from "antd";

import { contactLinks } from "../data/aboutData";
import { name, profilepic } from "../data/homeData";
import WebContent from "./WebContent";

const { Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

type WebLayoutProps = {
    focus?: string;
};

type AnchorItem = Required<AnchorProps>['items'][number];

const navItemStyle = {
    display: 'block',
    fontSize: '18px',
    fontWeight: 500,
    margin: '0 0 24px'
} as const;

const navItems: AnchorItem[] = [
    { key: 'home', href: '#home', title: <span style={navItemStyle}>Home</span> },
    { key: 'education', href: '#education', title: <span style={navItemStyle}>Education</span> },
    { key: 'experience', href: '#experience', title: <span style={navItemStyle}>Work Experience</span> },
    { key: 'projects', href: '#projects', title: <span style={navItemStyle}>Projects</span> },
    { key: 'about', href: '#about', title: <span style={navItemStyle}>About Me</span> },
];

export default function WebLayout({ focus }: WebLayoutProps = {}) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const getAnchorContainer = () => contentRef.current ?? window;

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider width={280} style={{
                backgroundColor: 'white',
                borderRight: '1px solid #f0f0f0',
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
            }}>
                <Flex vertical justify="space-between" style={{ height: '100%', padding: '32px 24px' }}>
                    <Flex vertical gap="large">
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
                            getContainer={getAnchorContainer}
                            items={navItems}
                            style={{ background: 'transparent' }}
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
            </Sider>

            <Layout style={{ background: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Content
                    ref={contentRef}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '0 64px 48px',
                        scrollBehavior: 'smooth'
                    }}
                >
                    <WebContent focus={focus} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    © 2025 Samuel Lam. All rights reserved. Built with Next.js & TypeScript. Deployed on Vercel. Last updated Nov 2025.
                </Footer>
            </Layout>
        </Layout>
    )
}
