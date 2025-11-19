'use client';

import { Button, Flex, Image, Tooltip, Typography, } from "antd";

import { contactLinks, skills } from "../data/aboutData";

const { Title } = Typography

export default function About() {
    return (
        <>
            <Flex gap={"large"} vertical style={{ width: '100%', padding: "48px 0" }}>
                <Title>About</Title>

                <Flex
                    align="center"
                    justify="space-between"
                    wrap
                    style={{
                        background: '#f7f9ff',
                        borderRadius: 16,
                        padding: '24px',
                        border: '1px solid #e0e7ff'
                    }}
                >
                    <div>
                        <Title level={4} style={{ margin: 0 }}>Employment Pass Eligibility Letter</Title>
                        <p style={{ marginBottom: 0 }}>Issued by Singapore MOM — available for reference during hiring.</p>
                    </div>
                    <Button
                        type="primary"
                        href="https://drive.google.com/file/d/1_NBMiCusHc39U7VldbLx4UmACVuzywu1/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download Letter
                    </Button>
                </Flex>

                <Title level={4}>Skills</Title>
                <Flex wrap gap="large">
                    {skills.map((skill, index) => (
                        <Tooltip key={index} title={skill.name}>
                            <Image
                                width={50}
                                height={50}
                                src={skill.img}
                                alt={skill.name}
                                preview={false}
                            />
                        </Tooltip>
                    ))}
                </Flex>

                <Title level={4}>Contact</Title>
                <Flex wrap gap="large" >
                    {contactLinks.map((contact, index) => (
                        <Tooltip key={index} title={contact.name}>
                            <a href={contact.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={40}
                                    height={40}
                                    src={contact.img}
                                    alt={contact.name}
                                    preview={false}
                                />
                            </a>
                        </Tooltip>
                    ))}
                </Flex>

            </Flex >
        </>
    )
}
