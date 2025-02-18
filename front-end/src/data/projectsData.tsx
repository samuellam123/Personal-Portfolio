import { Typography } from "antd";

const { Paragraph, Title } = Typography

//import all project images
import { imageAssets } from "../data/imageAssets";

export interface Project {
    title: string;
    description: string;
    longer_desc: React.ReactNode;
    frontend?: string;
    backend?: string;
    otr_tech?: string;
    technology?: string[];
    img?: string;
    sub_img?: string;
    github?: string;
    direct_link?: { label: string, link: string };
}

export const projectList: Project[] = [
    {
        title: "DBS Digital Onboarding Web App",
        description: "Collborated closely with DBS product team to redesign the deposit account onboarding process for foreigners to reduce drop-off rates during application submissions.",
        longer_desc: <>
            <Paragraph>
                As the <b>lead software developer</b>, I took charge of the core development and technical implementation of this project. My key contributions include:
                <ul>
                    <li>🚀 <b>Project Setup & Deployment:</b> Established the project framework, managed page routing, and deployed the application on Google Cloud using Docker.</li>
                    <li>🔒 <b>Authentication Feature:</b> Integrated Twilio OTP services to implement secure user authentication.</li>
                    <li>⚙️ <b>Database & Application Features:</b> Designed the database structure with SQLite3 and implemented key features, including auto-save and application record retrieval.</li>
                    <li>💡 <b>UX Optimization:</b> In the final sprint of the project, revamped the entire user flow, reducing the number of clicks from 19 to 13 (a 36% improvement) for a more seamless experience.</li>
                    <li>📊 <b>UML & Solution Class Diagrams:</b> Designed comprehensive UML diagrams and solution class diagrams to ensure a scalable and efficient system architecture.</li>
                </ul>
            </Paragraph>
            <Title level={5}>📌 Project Background & Purpose:</Title>
            <Paragraph>
                The project aimed to streamline the user experience, reduce submission errors, and improve accessibility through modern features and best practices. Key project highlights include:
                <ul>
                    <li>🖥️ <b>UI/UX Enhancements:</b> Improved pre-submission guidance and introduced multilingual support to enhance accessibility.</li>
                    <li>📸 <b>OCR Integration:</b> Incorporated optical character recognition (OCR) technology to automate document uploads, eliminating manual inputs.</li>
                    <li>🌀 <b>Agile Development:</b> Led the project using Agile methodology, collaborating with DBS clients in <b>four structured sprints</b> to ensure iterative improvements.</li>
                    <li>🧠 <b>Design Thinking:</b> Developed user personas, storyboards, and user stories to address pain points and propose practical solutions.</li>
                    <li>🌐 <b>Scalable Architecture:</b> Utilized RESTful APIs and a microservices architecture to ensure system scalability and efficiency.</li>
                </ul>

                For more details and a complete project overview, please visit our <b>Project Google Site</b> by clicking the "Project Site" button below.
            </Paragraph>
        </>
        ,
        frontend: "HTML, CSS, JavaScript",
        backend: "Ruby on Rails, MySQL3",
        otr_tech: "Cucumber, Capybara (Code testing)",
        technology: ['HTML', 'CSS', 'Ruby on Rails', 'Google Cloud'],
        img: imageAssets.dbsWebapp,
        sub_img: imageAssets.dbsWebapp_ocr,
        github: "https://github.com/samuellam123/DBS-Doc-Check",
        direct_link: { label: "Project Site", link: "https://sites.google.com/view/next-gen-ai/" }
    },
    {
        title: "Personal Portfolio Website",
        description: "A responsive personal portfolio website built with React and TypeScript, showcasing my projects, skills, and experiences in a single-page application.",
        longer_desc: <>
            <Paragraph>
                This is my personal portfolio website, fully designed and developed by me, from the initial <a target="__blank" href="https://www.figma.com/design/lKo7srah6sxiHZXBcJe2rV/Personal-Portfolio?node-id=179446-3670&t=ZsR2EcBPj8atuaqi-1">Figma</a> design to the final implementation using React and TypeScript. The website serves as a showcase of my projects, technical skills, and experiences, built as a single-page application (SPA) with smooth navigation and fast loading times.
            </Paragraph>
            <Title level={5}>💡 My Responsibilities:</Title>
            <Paragraph>
                <ul>
                    <li>🎨 <b>UI/UX Design:</b> Designed the entire website using Figma, focusing on a clean and user-friendly interface.</li>
                    <li>💻 <b>Frontend Development:</b> Coded the entire project using React with TypeScript, utilizing functional components and hooks.</li>
                    <li>📚 <b>UI Library Integration:</b> Used Ant Design for consistent UI components and a professional appearance.</li>
                    <li>🛠️ <b>Customizable Data System:</b> Implemented a data-driven structure by separating all content (projects, experiences, and contact info) into a dedicated <b>`data/`</b> directory.</li>
                    <li>📂 <b>CSV Data Integration (In Progress):</b> Planned to support reading page content from a CSV file for easier content updates.</li>
                    <li>☁️ <b>Deployment:</b> Deployed the site on <b>Vercel</b> with automatic CI/CD for easy updates.</li>
                </ul>
            </Paragraph>

            <Title level={5}>🚧 Challenges Faced & Solutions:</Title>

            <Paragraph>
                <ul>
                    <li>💡 <b>Open Source Customization:</b> Since I wanted the GitHub repository to be public and forkable, I had to ensure users could easily customize the portfolio for their use. I achieved this by storing all page content in a <b>`data/`</b> directory, separating logic from content.</li>
                    <li>📂 <b>Content Management:</b> To make editing content even more user-friendly, I planned a system to read portfolio data from a CSV file, enabling non-developers to update information easily.</li>
                </ul>
            </Paragraph>

            <Title level={5}>🎯 Project Purpose & Goals:</Title>

            <Paragraph>
                <ul>
                    <li>👔 <b>For Recruiters:</b> To showcase all my projects, experiences, and skills in one place, making it easy for recruiters to review my work.</li>
                    <li>🌐 <b>For Developers:</b> To provide an open-source template on GitHub for anyone wanting to create their own portfolio by forking my repository.</li>
                </ul>

                Visit GitHub for more details, or click the <b>Live App</b> button below to explore the deployed website.
            </Paragraph>
        </>
        ,
        frontend: "React Vite, TypeScript, Ant Design (UI Library)",
        otr_tech: "Deployed on Vercel",
        technology: ["React", "TypeScript", "Vite", "Ant Design", 'Vercel'],
        img: imageAssets.portfolio,
        github: "https://github.com/samuellam123/Personal-Portfolio",
        direct_link: { label: "Live App", link: "https://personal-portfolio-henna-alpha-21.vercel.app/" }
    },
    {
        title: "Mobile Bluetooth Gaming Controller",
        description: "Transforming Smartphones into Gaming Controllers with Seamless Bluetooth Connectivity",
        longer_desc: <Paragraph>
            Built a native Android application using Java and XML in Android Studio, enabling users to convert their smartphones into fully functional gaming controllers for PCs via Bluetooth technology.
            <ul>
                <li>💡 <b>Engineered with OOP Principles:</b> Developed a modular codebase with object-oriented programming (OOP) concepts in Java for easy scalability and feature enhancements.</li>
                <li>⚙️ <b>Real-Time Data Sync:</b> Integrated Google Firebase for real-time data synchronization and secure user authentication.</li>
                <li>🎮 <b>Enhanced User Experience:</b> Designed intuitive controls and a responsive interface, converting mobile devices into versatile game controllers.</li>
            </ul>
            This project highlights my proficiency in mobile app development, cloud integration, and Bluetooth connectivity.
        </Paragraph>,
        frontend: "Java, XML",
        backend: "Firebase",
        technology: ["Bluetooth", "Google Firebase", "Android Studio"],
        img: imageAssets.dbsWebapp,
        github: "https://github.com/samuellam123/Bluetooth-Controller"
    },
    {
        title: "Cryptocurrency Swap Form",
        description: "User-friendly Cryptocurrency Token Swap System",
        longer_desc: <Paragraph>
            Developed a practical token swap system using ReactJS with dynamic token selection and real-time exchange rates.
            <ul>
                <li><b>User Interface:</b> Designed a responsive web interface with ReactJS.</li>
                <li><b>Real-Time Rates:</b> Integrated real-time exchange rate API.</li>
                <li><b>Wallet Connectivity:</b> Enabled users to swap tokens directly from their wallets.</li>
            </ul>
            <p><b>Technologies:</b> ReactJS, HTML, CSS, JavaScript</p>
        </Paragraph>,
        frontend: "ReactJS",
        backend: "None (API Integrated)",
        technology: ["ReactJS", "HTML", "CSS", "JavaScript"],
        img: imageAssets.dbsWebapp,
        github: "https://cryptocurrencyswapform.vercel.app",
    },
    {
        title: "Healthy Eating Diet App",
        description: "Personalized Meal Planning Mobile App",
        longer_desc: <Paragraph>
            Designed a diet-planning mobile app using HTML, CSS, and JavaScript to create personalized meal plans, track nutritional intake, and generate grocery lists.
            <ul>
                <li><b>UI/UX Design:</b> Developed using Figma based on user research for an intuitive interface.</li>
                <li><b>Feature-Rich:</b> Included personalized meal recommendations and budget-based grocery lists.</li>
                <li><b>Recognition:</b> 4th Place at Varsity Hackathon USM 2023.</li>
            </ul>
            <p><b>Technologies:</b> HTML, CSS, JavaScript</p>
        </Paragraph>,
        frontend: "HTML, CSS, JavaScript",
        technology: ["HTML", "CSS", "JavaScript"],
        img: imageAssets.dbsWebapp,
    },
    {
        title: "Personal Project: Cuby",
        description: "3D Obstacle-Dodging Game",
        longer_desc: <Paragraph>
            Built a 3D obstacle-dodging game with Unity Engine and C++ featuring real-time progress tracking and scoring.
            <ul>
                <li><b>Core Mechanics:</b> Implemented character movement, obstacle generation, and collision detection.</li>
                <li><b>Interface:</b> Designed a user-friendly interface showing live scores and fails.</li>
                <li><b>Deployment:</b> Published on itch.io for Windows users.</li>
            </ul>
            <p><b>Technologies:</b> Unity Engine, C++</p>
        </Paragraph>,
        frontend: "Unity Engine, C++",
        technology: ["Unity", "C++"],
        img: imageAssets.dbsWebapp,
        github: "https://samuellam123.itch.io/cuby"
    }
];