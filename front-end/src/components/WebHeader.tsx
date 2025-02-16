import { Anchor, Button, Flex, Grid, Typography, type AnchorProps } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { ResumeLink } from '../data/headerData';

const { Title } = Typography;
const { useBreakpoint } = Grid;

type AnchorItem = Required<AnchorProps>['items'][number];

const items: AnchorItem[] = [
    {
        key: 'home',
        href: '#home',
        title: 'Home',
    },
    {
        key: 'projects',
        href: '#projects',
        title: 'Projects',
    },
    {
        key: 'experience',
        href: '#experience',
        title: 'Experience',
    },
    {
        key: 'about',
        href: '#about',
        title: 'About',
    },]

export default function WebHeader() {
    const screens = useBreakpoint();
    const isSmallScreen = !screens.md;
    const isSmallerScreen = !screens.sm;

    return (
        <>
            <Flex align="center" justify='space-between' style={{ height: '100%' }}>

                {/* Hide title on small screens */}
                {!isSmallScreen && (
                    <a href='/'>
                        <Title level={4} style={{ margin: 0, }}>Personal Portfolio</Title>
                    </a>
                )}

                <Flex align='center' gap={"large"}>
                    <Anchor
                        direction="horizontal"
                        items={items}
                        offsetTop={64}
                        affix={false}
                        style={{
                            backgroundColor: 'white',
                            flexWrap: 'nowrap',
                        }}
                    >
                    </Anchor>

                    {/* Hide title on small screens */}
                    {!isSmallerScreen && (
                        <Button iconPosition="end" href={ResumeLink} target="__blank" icon={<DownloadOutlined />}>
                            Download Resume
                        </Button>
                    )}
                </Flex>
            </Flex >
        </>
    )
}
