import { Flex, Typography, Card, Tag, Divider, Modal, Image, Button } from "antd";
import { useState } from 'react';
import { experienceList, Experience } from "../data/experienceData";

const { Title, Text } = Typography
const { Meta } = Card;

export default function Experiences() {
    const [selectedExp, setselectedExp] = useState<Experience | null>(null);

    return (
        <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5% 5% 0% 5%" }}>
            <Title>My Experience</Title>
            <Text>
                A journey through gaming support, entrepreneurship, and product design - building strong foundations in problem-solving, coding, and digital product development.
            </Text>

            <Flex wrap gap={"large"}>
                {experienceList.map((experience, index) => (
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 400 }}
                        onClick={() => setselectedExp(experience)}
                        cover={<img alt="experience pic" src={experience.img} loading="lazy" style={{ height: "400px", objectFit: 'contain', padding: '5%' }} />}
                    >
                        <Meta title={experience.title} description={experience.description} />
                        <Flex wrap style={{ paddingTop: "24px" }}>
                            {experience.technology && experience.technology.map((tag) =>
                                <Tag>{tag}</Tag>
                            )}
                        </Flex>
                    </Card>
                ))}

                {/* Modal for experience details */}
                {selectedExp && (
                    <Modal
                        title={selectedExp.title}
                        centered
                        open={!!selectedExp}
                        onCancel={() => setselectedExp(null)}
                        height={"80%"}
                        width={{
                            xs: '90%',
                            sm: '80%',
                            md: '80%',
                            lg: '70%',
                            xl: '50%',
                            xxl: '40%',
                        }}
                        footer={[
                            selectedExp.sub_link && (
                                <Button key="link" href={selectedExp.sub_link.link} target="_blank">
                                    {selectedExp.sub_link.label}
                                </Button>
                            ),
                            selectedExp.direct_link && (
                                <Button type="primary" key="link" href={selectedExp.direct_link.link} target="_blank">
                                    {selectedExp.direct_link.label}
                                </Button>
                            ),
                        ]}
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

                            {selectedExp.responsibilities && (<>
                                <Title level={5} style={{ margin: 0 }}>💡 Key Responsibilities</Title><ul>
                                    {selectedExp.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </>
                            )}

                            {selectedExp.key_achievements && (<>
                                <Title level={5} style={{ margin: 0 }}>🏆 Key Achivements</Title><ul>
                                    {selectedExp.key_achievements.map((key_achievement, index) => (
                                        <li key={index}>{key_achievement}</li>
                                    ))}
                                </ul>
                            </>
                            )}

                            <Flex wrap style={{ paddingTop: "24px" }}>
                                {selectedExp.technology && selectedExp.technology.map((tag, index) =>
                                    <Tag key={index}>{tag}</Tag>
                                )}
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