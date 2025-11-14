'use client';

import { useState } from 'react';

import { Badge, Button, Card, Divider, Flex, Grid, Image, Modal, Tag, Typography } from "antd";

import { contactLinks } from "../data/aboutData";
import { projectList, type Project } from "../data/projectsData";

const { Title, Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

const linkedInProfileUrl = contactLinks[2].url;

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
            <Title>My Projects</Title>
            <Text>
                Explore my collection of websites and applications that I have developed. More projects are available on my <a style={{ color: 'darkblue' }} target="_blank" rel="noreferrer" href={linkedInProfileUrl}>LinkedIn profiles</a> — follow along for updates and insights!
            </Text>

            <Flex wrap gap={"large"}>
                {projectList.map((project) =>
                    project.ongoing ? (
                        <Badge.Ribbon key={`${project.title}-badge`} text="Developing" color="blue">
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                onClick={() => setSelectedProject(project)}
                                cover={
                                    <Image
                                        alt={`${project.title} screenshot`}
                                        src={project.img}
                                        loading="lazy"
                                        style={{ height: "400px", objectFit: 'contain', padding: '5%' }}
                                        preview={false}
                                    />
                                }
                            >
                                <Meta title={project.title} description={project.description} />
                                <Flex wrap style={{ paddingTop: "24px" }} gap="small">
                                    {project.technology?.map((tag) => (
                                        <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
                                    ))}
                                </Flex>
                            </Card>
                        </Badge.Ribbon>
                    ) : (
                        <Card
                            key={project.title}
                            hoverable
                            style={{ width: 400 }}
                            onClick={() => setSelectedProject(project)}
                            cover={
                                <Image
                                    alt={`${project.title} screenshot`}
                                    src={project.img}
                                    loading="lazy"
                                    style={{ height: "400px", objectFit: 'contain', padding: '5%' }}
                                    preview={false}
                                />
                            }
                        >
                            <Meta title={project.title} description={project.description} />
                            <Flex wrap style={{ paddingTop: "24px" }} gap="small">
                                {project.technology?.map((tag) => (
                                    <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
                                ))}
                            </Flex>
                        </Card>
                    )
                )}

                {selectedProject && (
                    <Modal
                        title={selectedProject.title}
                        centered
                        open={!!selectedProject}
                        onCancel={() => setSelectedProject(null)}
                        height={"80%"}
                        width={modalWidth}
                        footer={buildProjectModalFooter(selectedProject)}
                    >
                        <Flex vertical>
                            <Flex justify="center" style={{ padding: '5% 0%' }} gap="large">
                                <Image
                                    width={'50%'}
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                />
                                {selectedProject.sub_img && (
                                    <Image
                                        width={'50%'}
                                        src={selectedProject.sub_img}
                                        alt={selectedProject.title}
                                    />
                                )}
                            </Flex>

                            <Title level={5}>📝 Project Overview</Title>
                            <p>{selectedProject.longer_desc}</p>

                            <Title level={5} style={{ margin: 0 }}>🛠️ Technology Stack</Title>
                            {selectedProject.frontend && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Frontend:</b> {selectedProject.frontend}</Text>
                                </Flex>
                            )}

                            {selectedProject.backend && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Backend:</b> {selectedProject.backend}</Text>
                                </Flex>
                            )}

                            {selectedProject.otr_tech && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Others:</b> {selectedProject.otr_tech}</Text>
                                </Flex>
                            )}

                            <Flex wrap style={{ paddingTop: "24px" }} gap="small">
                                {selectedProject.technology?.map((tag) => (
                                    <Tag key={`${selectedProject.title}-${tag}`}>{tag}</Tag>
                                ))}
                            </Flex>
                        </Flex>
                    </Modal>
                )}
            </Flex >

            <Divider style={{ marginTop: "64px" }} />
        </Flex >
    );
}

function buildProjectModalFooter(selectedProject: Project) {
    const footerButtons = [];

    if (selectedProject.github) {
        footerButtons.push(
            <Button key="github" href={selectedProject.github} target="_blank" rel="noreferrer">
                View on GitHub
            </Button>
        );
    }

    if (selectedProject.direct_link) {
        footerButtons.push(
            <Button
                type="primary"
                key="external-link"
                href={selectedProject.direct_link.link}
                target="_blank"
                rel="noreferrer"
            >
                {selectedProject.direct_link.label}
            </Button>
        );
    }

    return footerButtons;
}
