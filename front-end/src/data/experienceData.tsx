import { Typography } from "antd";

const { Paragraph } = Typography

//import project images
import dbsWebapp from '../assets/images/dbs-webapp.png';
import test from '../assets/images/test.webp';

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
        title: "DBS Digital Onboarding Web App",
        description: "Redesigned the deposit account onboarding process for foreigners to reduce drop-off rates during application submissions.",
        longer_desc:
            <Paragraph>
                Redesigned the deposit account onboarding process for foreigners to reduce drop- off rates during application submissions.
                <ul>
                    <li>Enhanced <b>UI/UX</b> to improve pre-submission guidance and provide multilingual support.</li>
                    <li>Integrated OCR technology to eliminate manual input for required documents.</li>
                    <li>Led the project using Agile methodology, structured into four sprints, collaborating closely with DBS clients for iterative development.</li>
                    <li>Developed user personas, storyboards, and user stories to visualize key challenges and solutions.</li>
                    <li>Utilized RESTful APIs and a microservices architecture to ensure scalability and efficiency.</li>
                </ul>
            </Paragraph >
        ,
        frontend: "React",
        backend: "Node.js",
        technology: ['HTML', 'CSS', 'Ruby on Rails', 'Google Cloud'],
        img: dbsWebapp,
        sub_img: test,
        link: "https://link.com/samuellam123/DBS-Doc-Check",
    },
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
        img: test,
        link: "https://link.com/samuellam123/Personal-Portfolio"
    },
];