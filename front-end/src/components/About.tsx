import { Flex, Typography, } from "antd";

const { Title, Text } = Typography

export default function About() {
    return (
        <>
            <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5%" }}>
                <Title>About</Title>
                <Text>Hi, I'm Yu En Lam, a passionate software developer and product designer based in Singapore. I enjoy building scalable applications, AI-driven solutions, and enhancing user experiences through design.</Text>

                <Title level={4}>Education</Title>
                SUTD

                <Title level={4}>Skills</Title>
                PIC PIC PIC

                <Title level={4}>Contact</Title>
                <p>Contact details</p><p>Contact details</p><p>Contact details</p><p>Contact details</p>

            </Flex >
        </>
    )
}