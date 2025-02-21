import { Flex, Typography, Card, Tag, Divider, Modal, Image, Button, Badge } from "antd";
import { useState } from 'react';
import { projectList, Project } from "../data/projectsData";

import { contactLinks } from "../data/aboutData";

const { Title, Text } = Typography
const { Meta } = Card;

const LinkedIn = contactLinks[2].url

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5% 5% 0% 5%" }}>
            <Title>My Projects</Title>
            <Text>
                Explore my collection of websites and applications that I have developed. More projects are available on my <a style={{ color: 'darkblue' }} target="__blank" href={LinkedIn}>LinkedIn profiles</a> — follow along for updates and insights!</Text>

            <Flex wrap gap={"large"}>
                {projectList.map((project, index) => (
                    project.ongoing ? (
                        <Badge.Ribbon key={index} text="Developing" color="blue">
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                onClick={() => setSelectedProject(project)}
                                cover={<img alt="project pic" src={project.img} loading="lazy" style={{ height: "400px", objectFit: 'contain', padding: '5%' }} />}
                            >
                                <Meta title={project.title} description={project.description} />
                                <Flex wrap style={{ paddingTop: "24px" }}>
                                    {project.technology && project.technology.map((tag, index) =>
                                        (<Tag key={index}>{tag}</Tag>)
                                    )}
                                </Flex>
                            </Card>
                        </Badge.Ribbon>
                    ) : (
                        <Card
                            key={index}
                            hoverable
                            style={{ width: 400 }}
                            onClick={() => setSelectedProject(project)}
                            cover={<img alt="project pic" src={project.img} loading="lazy" style={{ height: "400px", objectFit: 'contain', padding: '5%' }} />}
                        >
                            <Meta title={project.title} description={project.description} />
                            <Flex wrap style={{ paddingTop: "24px" }}>
                                {project.technology && project.technology.map((tag, index) =>
                                    (<Tag key={index}>{tag}</Tag>)
                                )}
                            </Flex>
                        </Card>
                    )
                ))}

                {/* Modal for project details */}
                {selectedProject && (
                    <Modal
                        title={selectedProject.title}
                        centered
                        open={!!selectedProject}
                        onCancel={() => setSelectedProject(null)}
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
                            selectedProject.github && (
                                <Button key="github" href={selectedProject.github} target="_blank">
                                    View on GitHub
                                </Button>
                            ),
                            selectedProject.direct_link && (
                                <Button type="primary" key="github" href={selectedProject.direct_link.link} target="_blank">
                                    {selectedProject.direct_link.label}
                                </Button>
                            ),
                        ]}
                    >
                        <Flex vertical>
                            <Flex justify="center" style={{ padding: '5% 0%' }}>
                                <Image
                                    width={'50%'}
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                />
                                {[selectedProject.sub_img && (
                                    <Image
                                        width={'50%'}
                                        src={selectedProject.sub_img}
                                        alt={selectedProject.title}
                                    />)]}
                            </Flex>

                            <Title level={5}>📝 Project Overview</Title>
                            <p>{selectedProject.longer_desc}</p>

                            <Title level={5} style={{ margin: 0 }}>🛠️ Technology Stack</Title>
                            {[selectedProject.frontend && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Frontend:</b> {selectedProject.frontend}</Text>
                                </Flex>
                            )]}

                            {[selectedProject.backend && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Backend:</b> {selectedProject.backend}</Text>
                                </Flex>
                            )]}

                            {[selectedProject.otr_tech && (
                                <Flex align="center" gap={"small"}>
                                    <Text><b>Others:</b> {selectedProject.otr_tech}</Text>
                                </Flex>
                            )]}

                            <Flex wrap style={{ paddingTop: "24px" }}>
                                {selectedProject.technology && selectedProject.technology.map((tag) =>
                                    <Tag>{tag}</Tag>
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