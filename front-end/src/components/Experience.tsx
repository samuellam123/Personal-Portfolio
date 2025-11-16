'use client';

import { Button, Flex, Tag, Typography } from "antd";

import { experienceList } from "../data/experienceData";

const { Title, Text } = Typography;

export default function Experiences() {
    return (
        <Flex gap={"large"} vertical style={{ width: '100%' }}>
            <Title>Work Experience</Title>

            {experienceList.map((experience, index) => (
                <Flex
                    key={experience.company}
                    vertical
                    gap="small"
                    style={{
                        borderTop: index === 0 ? 'none' : '1px solid #e5e7eb',
                        paddingTop: index === 0 ? 0 : 32,
                        paddingBottom: 32
                    }}
                >
                    <Title level={3} style={{ margin: 0 }}>{experience.company}</Title>
                    <Text type="secondary" style={{ fontSize: '16px' }}>
                        {experience.role} ·  {experience.period}
                    </Text>

                    <ul style={{ margin: '12px 0 0', paddingLeft: 0, listStylePosition: 'inside' }}>
                        {experience.bullet_points.map((bullet) => (
                            <li key={bullet} style={{ marginBottom: '4px', fontSize: '16px' }}>{bullet}</li>
                        ))}
                    </ul>

                    {experience.technology?.length ? (
                        <Flex wrap gap="small" style={{ paddingTop: "12px" }}>
                            {experience.technology.map((tag) => (
                                <Tag key={`${experience.company}-${tag}`}>{tag}</Tag>
                            ))}
                        </Flex>
                    ) : null}

                    {(experience.direct_link || experience.sub_link) && (
                        <Flex gap="small" style={{ paddingTop: '12px' }}>
                            {experience.sub_link && (
                                <Button href={experience.sub_link.link} target="_blank" rel="noreferrer">
                                    {experience.sub_link.label}
                                </Button>
                            )}
                            {experience.direct_link && (
                                <Button type="primary" href={experience.direct_link.link} target="_blank" rel="noreferrer">
                                    {experience.direct_link.label}
                                </Button>
                            )}
                        </Flex>
                    )}
                </Flex>
            ))}
        </Flex>
    );
}
