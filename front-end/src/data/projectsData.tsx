import { Typography } from "antd";

const { Paragraph } = Typography

//import project images
import dbsWebapp from '../assets/images/dbs-webapp.png';
import test from '../assets/images/test.webp';

export interface Project {
    title: string;
    description: string;
    longer_desc: React.ReactNode;
    frontend?: string;
    backend?: string;
    technology?: string[];
    proj_img?: string;
    sub_img?: string;
    github?: string;
    live_app?: string;
}

export const projectList: Project[] = [
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
        proj_img: dbsWebapp,
        sub_img: test,
        github: "https://github.com/samuellam123/DBS-Doc-Check",
        live_app: "https://google.com"
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
        proj_img: test,
        github: "https://github.com/samuellam123/Personal-Portfolio"
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
        proj_img: dbsWebapp,
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
        proj_img: dbsWebapp,
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
        proj_img: dbsWebapp,
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
        proj_img: dbsWebapp,
        github: "https://samuellam123.itch.io/cuby"
    }
];