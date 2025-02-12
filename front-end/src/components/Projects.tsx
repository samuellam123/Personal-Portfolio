import { Flex, Typography, Card, Tag, Divider, Modal, Image, Avatar, Button } from "antd";
import { useState, useEffect } from 'react';
// import Papa from "papaparse";

const { Title, Text } = Typography
const { Meta } = Card;

//import project images
import dbsWebapp from '../assets/images/dbs-webapp.png';

interface Project {
    title: string;
    description: string;
    frontend: string;
    technology?: string[];
    backend?: string;
    img?: string;
    github?: string;
}

// List of Projects
const projectList: Project[] = [
    {
        title: "DBS Digital Onboarding Web App",
        description: "Redesigned the deposit account onboarding process for foreigners to reduce drop-off rates during application submissions.",
        frontend: "React",
        backend: "Node.js",
        technology: ['HTML', 'CSS', 'Ruby on Rails', 'Google Cloud'],
        img: dbsWebapp,
    },
    {
        title: "E-Commerce Platform",
        description: "A fully functional e-commerce website with payments integration.",
        frontend: "Next.js",
        backend: "Express.js",
        technology: ["MongoDB", "Stripe API"],
        img: dbsWebapp,
    },
    {
        title: "Chat Application",
        description: "A real-time chat app using WebSockets.",
        frontend: "Vue.js",
        backend: "Firebase",
        technology: ["Socket.io", "TailwindCSS"],
        img: dbsWebapp,
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5% 5% 0% 5%" }}>
            <Title>Projects</Title>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsu</Text>

            <Flex wrap gap={"large"}>
                {projectList.map((project, index) => (
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 400 }}
                        onClick={() => setSelectedProject(project)}
                        cover={<img alt="project pic" src={project.img} loading="lazy" />}
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
                        ]}
                    >
                        <Flex vertical>
                            <Flex>
                                <Image
                                    width={'50%'}
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                />
                                <Image
                                    width={'50%'}
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                />
                            </Flex>

                            <Title level={4}>Description</Title>
                            <p>{selectedProject.description}</p>

                            <Title level={4}>Technology Stack</Title>
                            <Flex align="center" gap={"small"}>
                                <p>Frontend:</p>
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                            </Flex>
                            <Flex align="center" gap={"small"}>
                                <p>Backend:</p>
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                            </Flex>
                            <Flex align="center" gap={"small"}>
                                <p>Technology:</p>
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
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