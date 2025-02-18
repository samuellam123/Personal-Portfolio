import { Typography } from "antd";

const { Paragraph } = Typography

export interface Experience {
    title: string;
    description: string;
    longer_desc: React.ReactNode;
    frontend: string;
    backend?: string;
    technology?: string[];
    img?: string;
    sub_img?: string;
    link?: string;
}

export const experienceList: Experience[] = [
    {
        title: "Personal Portfolio Website",
        description: "My Interactive Portfolio Showcasing Projects and Skills",
        longer_desc: <Paragraph>
            Developed a fully responsive personal portfolio using React, TypeScript, and Ant Design to showcase my projects and achievements.
            <ul>
                <li><b>Frontend:</b> Built with React, TypeScript, and Vite for high performance.</li>
                <li><b>Design:</b> Styled with Ant Design components for a sleek UI.</li>
                <li><b>Deployment:</b> Hosted on Vercel for seamless access.</li>
            </ul>
            <p><b>Technologies:</b> React, TypeScript, Vite, Ant Design</p>
        </Paragraph>,
        frontend: "React, TypeScript, Vite",
        technology: ["React", "TypeScript", "Vite", "Ant Design"],
        link: "https://link.com/samuellam123/Personal-Portfolio"
    },
];