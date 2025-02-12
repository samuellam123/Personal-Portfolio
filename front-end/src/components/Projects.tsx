import { Flex, Typography, Card, Tag, Divider, Modal, Image, Avatar, Button } from "antd";
import { useState, useEffect } from 'react';
// import Papa from "papaparse";

const { Title, Text } = Typography
const { Meta } = Card;

//import project images
import dbsWebapp from '../assets/images/dbs-webapp.png';

// interface Project {
//     name: string;
//     description: string;
//     frontend: string;
//     backend: string;
//     technology?: string;
// }

export default function Projects() {
    //     const [projects, setProjects] = useState<Project[]>([]);
    //     const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [openResponsive, setOpenResponsive] = useState(false);

    //     useEffect(() => {
    //         const fetchCSVData = async () => {
    //             const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSqP9UiQn6r9ITxUU0C-VoSFzFcBnLjlpPvWpc_CIo4NDTgxY2ZYX9rJykiUlIvrIR-nl1PikkSRJHr/pub?gid=0&single=true&output=csv"); // Replace with actual Google Sheet CSV URL or local '/projects.csv'
    //             const text = await response.text();
    //             Papa.parse(text, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //                 complete: (result) => {
    //                     setProjects(result.data as Project[]);
    //                 },
    //             });
    //         };
    //         fetchCSVData();
    //     }, []);

    return (
        <>
            <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5% 5% 0% 5%" }}>
                <Title>Projects</Title>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsu</Text>

                <Flex wrap gap={"large"}>
                    <Card
                        hoverable
                        style={{ width: 400 }}
                        onClick={() => setOpenResponsive(true)}
                        cover={<img alt="project pic" src={dbsWebapp} loading="lazy" />}
                    >
                        <Meta title="DBS Digital Onboarding Web App" description="Redesigned the deposit account onboarding process for foreigners to reduce drop-off rates during application submissions." />
                        <Flex wrap style={{ paddingTop: "24px" }}>
                            <Tag> HTML</Tag>
                            <Tag> CSS</Tag>
                            <Tag> Ruby on Rails</Tag>
                            <Tag> Google Cloud</Tag>
                        </Flex>
                    </Card>

                    <Modal
                        title="Europe Street Beat"
                        centered
                        open={openResponsive}
                        // onOk={() => setOpenResponsive(false)}
                        onCancel={() => setOpenResponsive(false)}
                        width={{
                            xs: '90%',
                            sm: '80%',
                            md: '80%',
                            lg: '70%',
                            xl: '50%',
                            xxl: '40%',
                        }}
                        height={"80%"}
                        footer={[
                            <Button
                                key="link"
                                href="https://google.com"
                                target="_blank"
                            >
                                Search on Google
                            </Button>,
                        ]}
                    >
                        <Flex vertical>
                            <Flex>
                                <Image
                                    width={'50%'}
                                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                                />
                                <Image
                                    width={'50%'}
                                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                                />
                            </Flex>

                            <Title level={4}>Description</Title>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsu.rem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsu.rem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsu..</p>

                            <Title level={4}>Technology</Title>
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
                            </Flex>                            <Flex align="center" gap={"small"}>
                                <p>Technology:</p>
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                                <Avatar src={<img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt="avatar" />} />
                            </Flex>
                        </Flex>

                    </Modal>


                    <Card
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" />}
                    >
                        <Meta title="Europe Street beat" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem IpsuLorem Ipsum is simply dummy text of the pr" />
                        <Flex wrap gap={"small"} style={{ paddingTop: "16px" }}>
                            <Tag> React</Tag>
                            <Tag> Typescript</Tag>
                            <Tag> Java</Tag>
                        </Flex>
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" />}
                    >
                        <Meta title="Europe Street beat" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem IpsuLorem Ipsum is simply dummy text of the pr" />
                        <Flex wrap gap={"small"} style={{ paddingTop: "16px" }}>
                            <Tag> React</Tag>
                            <Tag> Typescript</Tag>
                            <Tag> Java</Tag>
                        </Flex>
                    </Card>

                    <Card
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" />}
                    >
                        <Meta title="Europe Street beat" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem IpsuLorem Ipsum is simply dummy text of the pr" />
                        <Flex wrap gap={"small"} style={{ paddingTop: "16px" }}>
                            <Tag> React</Tag>
                            <Tag> Typescript</Tag>
                            <Tag> Java</Tag>
                        </Flex>
                    </Card>

                </Flex >

                <Divider style={{ marginTop: "64px" }} />
            </Flex >
        </>
    )
}