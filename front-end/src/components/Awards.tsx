'use client';

import { Card, Flex, Grid, Image, Tag, Typography } from "antd";

import { awards } from "../data/awardsData";

const { Title, Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

export default function Awards() {
    const screens = useBreakpoint();
    const hasMultipleAwards = awards.length > 1;
    const cardWidth = screens?.md && hasMultipleAwards ? 'calc(50% - 16px)' : '100%';

    return (
        <Flex vertical gap="large" style={{ width: '100%', padding: "48px 0" }}>
            <Title>Awards & Recognitions</Title>
            <Flex wrap gap="large">
                {awards.map((award) => (
                    <Card
                        key={award.title}
                        hoverable
                        style={{ width: cardWidth, maxWidth: '100%', cursor: 'default' }}
                        cover={award.img ? (
                            <Image
                                alt={`${award.title} visual`}
                                src={award.img}
                                loading="lazy"
                                style={{ height: "260px", objectFit: 'cover', objectPosition: 'top' }}
                                preview={false}
                            />
                        ) : undefined}
                    >
                        <Meta title={award.title} description={`${award.issuer} · ${award.period}`} />
                        <Text style={{ display: 'block', marginTop: 12 }}>{award.description}</Text>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
}
