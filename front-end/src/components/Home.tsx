'use client';

import { DownOutlined } from '@ant-design/icons';
import { Alert, Button, Flex, Image, Typography } from "antd";
import HomeText, { profilebanner } from "../data/homeData";
import { profilepic, name } from "../data/homeData";

const { Title } = Typography

type HomeProps = {
    focus?: string;
};

const focusHighlights: Record<string, { label: string; blurb: string; actionLabel: string }> = {
    software: {
        label: "Software Engineering Roles",
        blurb: "You're viewing the portfolio variant that highlights shipped applications, scalability work, and backend skills.",
        actionLabel: "See engineering experience",
    },
    graduate: {
        label: "Graduate Program Track",
        blurb: "This view emphasises leadership, cross-functional collaboration, and outcomes relevant to university graduate programmes.",
        actionLabel: "Review leadership experience",
    },
    designer: {
        label: "Product / UX Design Focus",
        blurb: "Dive into the design systems, research, and product-thinking work most relevant to design hiring managers.",
        actionLabel: "Explore design experience",
    },
};

export default function Home({ focus }: HomeProps = {}) {
    const normalizedFocus = focus?.toLowerCase();
    const focusInfo = normalizedFocus ? focusHighlights[normalizedFocus] : undefined;
    const primaryButtonHref = focusInfo ? "#experience" : "#experience";
    const primaryButtonLabel = focusInfo?.actionLabel ?? "Scroll down to view more";

    return (
        <>
            <Flex align="center" justify="space-between" wrap style={{
                justifySelf: 'center',
                width: '100%',
                padding: "48px 0",
                gap: '32px'
            }}
            >
                <Flex gap='large' vertical style={{ maxWidth: '55%' }}>
                    <Title style={{ margin: 0 }}>{name}</Title>
                    <HomeText />
                    {focusInfo && (
                        <Alert
                            type="info"
                            showIcon
                            message={`Tailored for ${focusInfo.label}`}
                            description={focusInfo.blurb}
                        />
                    )}
                    <Button
                        href={primaryButtonHref}
                        icon={<DownOutlined />}
                        type="primary"
                        style={{
                            minWidth: "230px",
                            maxWidth: "320px",
                            borderRadius: 999,
                            backgroundImage: 'linear-gradient(135deg, #1677ff, #60a5fa)',
                            border: 'none',
                            boxShadow: '0 12px 24px rgba(22, 119, 255, 0.25)'
                        }}
                    >
                        {primaryButtonLabel}
                    </Button>
                </Flex>
                <Image
                    width={'40%'}
                    src={profilebanner}
                    alt={name}
                    style={{ borderRadius: '10%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '2px solid #ccc' }}
                />
            </Flex>

        </>
    )
}
