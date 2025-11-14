'use client';

import { useState } from 'react';

import { Button, Card, Divider, Flex, Grid, Image, Modal, Tag, Typography } from "antd";

import { experienceList, type Experience } from "../data/experienceData";

const { Title, Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

export default function Experiences() {
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
    const screens = useBreakpoint();

    const modalWidth = (() => {
        if (screens?.xxl) return '40%';
        if (screens?.xl) return '50%';
        if (screens?.lg) return '70%';
        if (screens?.md) return '80%';
        if (screens?.sm) return '80%';
        return '90%';
    })();

    return (
        <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5% 5% 0% 5%" }}>
            <Title>My Experience</Title>
            <Text>
                A journey through gaming support, entrepreneurship, and product design - building strong foundations in problem-solving, coding, and digital product development.
            </Text>

            <Flex wrap gap={"large"}>
                {experienceList.map((experience) => (
                    <Card
                        key={experience.title}
                        hoverable
                        style={{ width: 400 }}
                        onClick={() => setSelectedExp(experience)}
                        cover={
                            <Image
                                alt={`${experience.title} visual`}
                                src={experience.img}
                                loading="lazy"
                                style={{ height: "400px", objectFit: 'contain', padding: '5%' }}
                                preview={false}
                            />
                        }
                    >
                        <Meta title={experience.title} description={experience.description} />
                        <Flex wrap style={{ paddingTop: "24px" }} gap="small">
                            {experience.technology?.map((tag) => (
                                <Tag key={`${experience.title}-${tag}`}>{tag}</Tag>
                            ))}
                        </Flex>
                    </Card>
                ))}

                {/* Modal for experience details */}
                {selectedExp && (
                    <Modal
                        title={selectedExp.title}
                        centered
                        open={!!selectedExp}
                        onCancel={() => setSelectedExp(null)}
                        height={"80%"}
                        width={modalWidth}
                        footer={[
                            selectedExp.sub_link && (
                                <Button key="supporting-link" href={selectedExp.sub_link.link} target="_blank" rel="noreferrer">
                                    {selectedExp.sub_link.label}
                                </Button>
                            ),
                            selectedExp.direct_link && (
                                <Button type="primary" key="primary-link" href={selectedExp.direct_link.link} target="_blank" rel="noreferrer">
                                    {selectedExp.direct_link.label}
                                </Button>
                            ),
                        ].filter(Boolean)}
                    >
                        <Flex vertical>
                            <Flex justify="center" style={{ padding: '5% 0%' }}>
                                <Image
                                    width={'50%'}
                                    src={selectedExp.img}
                                    alt={selectedExp.title}
                                />
                                {selectedExp.sub_img && (
                                    <Image
                                        width={'50%'}
                                        src={selectedExp.sub_img}
                                        alt={selectedExp.title}
                                    />)}
                            </Flex>

                            <Title level={5}>📝 Experience Overview</Title>
                            <Text><b>Period:</b> {selectedExp.period}</Text>
                            <Text><b>Location:</b> {selectedExp.location}</Text>

                            {selectedExp.longer_desc}

                            {selectedExp.responsibilities && (
                                <>
                                    <Title level={5} style={{ margin: 0 }}>💡 Key Responsibilities</Title>
                                    <ul>
                                        {selectedExp.responsibilities.map((responsibility) => (
                                            <li key={responsibility}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {selectedExp.key_achievements && (
                                <>
                                    <Title level={5} style={{ margin: 0 }}>🏆 Key Achievements</Title>
                                    <ul>
                                        {selectedExp.key_achievements.map((keyAchievement) => (
                                            <li key={keyAchievement}>{keyAchievement}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <Flex wrap style={{ paddingTop: "24px" }} gap="small">
                                {selectedExp.technology?.map((tag) => (
                                    <Tag key={`${selectedExp.title}-${tag}`}>{tag}</Tag>
                                ))}
                            </Flex>

                        </Flex>
                    </Modal>
                )
                }
            </Flex >

            <Divider style={{ marginTop: "64px" }} />
        </Flex >
    );
}
