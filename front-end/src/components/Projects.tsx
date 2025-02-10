import { Flex, Typography, Card, Tag } from "antd";

const { Title, Text } = Typography
const { Meta } = Card;

export default function Projects() {
    return (
        <>
            <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5%" }}>
                <Title>Projects</Title>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsu</Text>

                <Flex wrap gap={"large"}>
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

                </Flex>
            </Flex >
        </>
    )
}