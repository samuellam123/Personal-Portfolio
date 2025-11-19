'use client';

import { Fragment } from "react";

import { Divider, Flex, Grid } from "antd";

type Section = {
    id: string;
    render: (focus?: string) => JSX.Element;
};

import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Education from "./Education";
import Awards from "./Awards";

type WebContentProps = {
    focus?: string;
};
const { useBreakpoint } = Grid;

const sections: Section[] = [
    { id: 'home', render: (focus) => <Home focus={focus} /> },
    { id: 'education', render: () => <Education /> },
    { id: 'experience', render: () => <Experience /> },
    { id: 'awards', render: () => <Awards /> },
    { id: 'projects', render: () => <Projects /> },
    { id: 'about', render: () => <About /> },
];

export default function WebContent({ focus }: WebContentProps = {}) {
    const screens = useBreakpoint();
    const isDesktop = screens.md;
    const sectionPadding = isDesktop ? "16px 0" : "12px 0";
    const dividerMargin = isDesktop ? '16px 0' : '12px 0';

    return (
        <>
            <Flex vertical style={{ width: '100%' }}>
                {sections.map((section, index) => (
                    <Fragment key={section.id}>
                        <section id={section.id} style={{ padding: sectionPadding }}>
                            {section.render(focus)}
                        </section>
                        {index < sections.length - 1 && (
                            <Divider style={{ margin: dividerMargin }} />
                        )}
                    </Fragment>
                ))}
            </Flex>
        </>
    )
}
