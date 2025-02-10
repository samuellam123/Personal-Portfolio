import { Button, Flex, Typography, Image } from "antd";
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography

export default function Home() {
    return (
        <>
            <Flex align="center" justify="space-between" style={{
                justifySelf: 'center', height: '80vh', backgroundColor: 'lightblue', padding: "0 5%"
            }}
            >
                <Flex gap='large' vertical style={{ maxWidth: '60%' }}>
                    <Title>Lam Yu En (Samuel)</Title>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, </Text>
                    <Button style={{}} icon={<DownOutlined />} type="primary">View my projects</Button>
                </Flex>
                <Image
                    width={'30%'}
                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                />
            </Flex>

        </>
    )
}
