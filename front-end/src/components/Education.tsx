
import { Flex, Typography } from "antd";

import { educationDetails } from "../data/aboutData";

const { Title, Text } = Typography;

export default function Education() {
    return (
        <>
            <Flex gap={"large"} vertical style={{ width: '100%' }}>
                <Title>Education</Title>

                {educationDetails.map((item) => (
                    <Flex key={item.institution} vertical gap="small">
                        <Title level={3} style={{ margin: 0 }}>{item.institution}</Title>
                        <Text type="secondary" style={{ fontSize: '18px' }}>
                            {item.program}  |  {item.period}
                        </Text>
                        <ul style={{ margin: '12px 0 0', paddingLeft: 0, listStylePosition: 'inside', fontSize: '16px' }}>
                            {item.highlights.map((highlight) => (
                                <li key={highlight} style={{ marginBottom: '4px' }}>{highlight}</li>
                            ))}
                        </ul>
                    </Flex>
                ))}

            </Flex>
        </>
    )
}
