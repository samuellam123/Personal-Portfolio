'use client';

import { Fragment } from "react";

import { Divider, Flex } from "antd";

type Section = {
    id: string;
    render: (focus?: string) => JSX.Element;
};

import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Education from "./Education";

type WebContentProps = {
    focus?: string;
};

const sections: Section[] = [
    { id: 'home', render: (focus) => <Home focus={focus} /> },
    { id: 'education', render: () => <Education /> },
    { id: 'experience', render: () => <Experience /> },
    { id: 'projects', render: () => <Projects /> },
    { id: 'about', render: () => <About /> },
];

export default function WebContent({ focus }: WebContentProps = {}) {
    return (
        <>
            <Flex vertical style={{ width: '100%' }}>
                {sections.map((section, index) => (
                    <Fragment key={section.id}>
                        <section id={section.id}>
                            {section.render(focus)}
                        </section>
                        {index < sections.length - 1 && (
                            <Divider style={{ margin: '48px 0 ' }} />
                        )}
                    </Fragment>
                ))}
            </Flex>
        </>
    )
}
