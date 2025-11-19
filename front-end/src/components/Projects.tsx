'use client';

import { useState } from 'react';

import { Button, Card, Divider, Flex, Grid, Image, Modal, Tag, Typography } from "antd";

import { contactLinks } from "../data/aboutData";
import { projectList, type Project } from "../data/projectsData";

const { Title, Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

const linkedInProfileUrl = contactLinks[2].url;

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const screens = useBreakpoint();

    const hasMultipleProjects = projectList.length > 1;
    const cardWidth = screens?.md && hasMultipleProjects ? 'calc(50% - 16px)' : '100%';

    const modalWidth = (() => {
        if (screens?.xxl) return '80%';
        if (screens?.xl) return '85%';
        if (screens?.lg) return '90%';
        if (screens?.md) return '95%';
        return '100%';
    })();

    return (
        <Flex gap={"large"} vertical style={{ width: '100%', padding: "48px 0" }}>
            <Title>My Projects</Title>
            <Text>
                Explore my collection of websites and applications that I have developed. More projects are available on my <a style={{ color: 'darkblue' }} target="_blank" rel="noreferrer" href={linkedInProfileUrl}>LinkedIn profiles</a> — follow along for updates and insights!
            </Text>

            <Flex wrap gap={"large"}>
                {projectList.map((project) =>

                    <Card
                        key={project.title}
                        hoverable
                        style={{ width: cardWidth }}
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
                        <Flex wrap style={{ paddingTop: "24px" }} >
                            {project.technology?.map((tag) => (
                                <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
                            ))}
                        </Flex>
                    </Card>

                )}

                {selectedProject && (
                    <Modal
                        title={
                            <Flex
                                align="center"
                                justify="space-between"
                                wrap
                                gap="small"
                                style={{ paddingRight: 48 }}
                            >
                                <Title level={4} style={{ margin: 0 }}>{selectedProject.title}</Title>
                                <Flex gap="small" wrap>
                                    {buildProjectModalActions(selectedProject)}
                                </Flex>
                            </Flex>
                        }
                        centered={false}
                        style={{ top: 24 }}
                        open={!!selectedProject}
                        onCancel={() => setSelectedProject(null)}
                        width={modalWidth}
                        footer={null}
                        bodyStyle={{ padding: '24px 32px' }}
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

                            <Flex wrap style={{ paddingTop: "24px" }}>
                                {selectedProject.technology?.map((tag) => (
                                    <Tag key={`${selectedProject.title}-${tag}`}>{tag}</Tag>
                                ))}
                            </Flex>
                        </Flex>
                    </Modal>
                )}
            </Flex >

        </Flex >
    );
}

function buildProjectModalActions(selectedProject: Project) {
    const actions = [];

    if (selectedProject.github) {
        actions.push(
            <Button key="github" href={selectedProject.github} target="_blank" rel="noreferrer" type="default">
                View on GitHub
            </Button>
        );
    }

    if (selectedProject.direct_link) {
        actions.push(
            <Button
                key="external-link"
                href={selectedProject.direct_link.link}
                target="_blank"
                rel="noreferrer"
                type="primary"
            >
                {selectedProject.direct_link.label}
            </Button>
        );
    }

    return actions;
}
