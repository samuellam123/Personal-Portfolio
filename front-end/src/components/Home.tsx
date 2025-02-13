import { Button, Flex, Typography, Image } from "antd";
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography

export default function Home() {
    return (
        <>
            <Flex align="center" justify="space-between" style={{
                justifySelf: 'center', height: '80vh', backgroundColor: 'lightblue', padding: "5% 5% 0% 5%"
            }}
            >
                <Flex gap='large' vertical style={{ maxWidth: '60%' }}>
                    <Title style={{ margin: 0 }}>Lam Yu En (Samuel)</Title>
                    <Text>Hi, I'm Yu En Lam, a passionate software developer and product designer based in Singapore.
                        I enjoy building scalable applications, AI-driven solutions, and enhancing user experiences through design.
                        I am currently seeking a summer 2025 internship (May till Aug).
                    </Text>
                    <Button href="#projects" icon={<DownOutlined />} type="primary" style={{ minWidth: "200px", maxWidth: "300px" }}>View my projects</Button>
                </Flex>
                <Image
                    width={'30%'}
                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                />
            </Flex>

        </>
    )
}
