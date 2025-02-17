import { Flex, Typography, Card, Tag, Divider, Modal, Image, Button } from "antd";
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
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 400 }}
                        onClick={() => setSelectedProject(project)}
                        cover={<img alt="project pic" src={project.img} loading="lazy" style={{ height: "400px", objectFit: 'contain' }} />}
                    >
                        <Meta title={project.title} description={project.description} />
                        <Flex wrap style={{ paddingTop: "24px" }}>
                            {project.technology && project.technology.map((tag) =>
                                <Tag>{tag}</Tag>
                            )}
                        </Flex>
                    </Card>
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
                            selectedProject.live_app && (
                                <Button type="primary" key="github" href={selectedProject.live_app} target="_blank">
                                    Live App
                                </Button>
                            ),
                        ]}
                    >
                        <Flex vertical>
                            <Flex>
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

                            <Title level={4}>Description</Title>
                            <p>{selectedProject.longer_desc}</p>

                            <Title level={4}>Technology Stack</Title>
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