import type { ReactNode } from "react";

import { Typography } from "antd";

const { Title } = Typography

//import all project images
import { imageAssets } from "../data/imageAssets";

export interface Project {
    title: string;
    description: string;
    longer_desc: ReactNode;
    frontend?: string;
    backend?: string;
    otr_tech?: string;
    technology?: string[];
    img?: string;
    sub_img?: string;
    github?: string;
    direct_link?: { label: string, link: string };
    ongoing?: boolean;
}

export const projectList: Project[] = [
    {
        title: "DBS Digital Onboarding Web App",
        description: "Collborated closely with DBS product team to redesign the deposit account onboarding process for foreigners to reduce drop-off rates during application submissions.",
        longer_desc: <>

            As the <b>lead software developer</b>, I took charge of the core development and technical implementation of this project. My key contributions include:
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>Project Setup & Deployment:</b> Established the project framework, managed page routing, and deployed the application on Google Cloud using Docker.</li>
                <li> <b>Authentication Feature:</b> Integrated Twilio OTP services to implement secure user authentication.</li>
                <li> <b>Database & Application Features:</b> Designed the database structure with SQLite3 and implemented key features, including auto-save and application record retrieval.</li>
                <li> <b>UX Optimization:</b> In the final sprint of the project, revamped the entire user flow, reducing the number of clicks from 19 to 13 (a 36% improvement) for a more seamless experience.</li>
                <li> <b>UML & Solution Class Diagrams:</b> Designed comprehensive UML diagrams and solution class diagrams to ensure a scalable and efficient system architecture.</li>
            </ul>
            <Title level={5}> Project Background & Purpose:</Title>
            The project aimed to streamline the user experience, reduce submission errors, and improve accessibility through modern features and best practices. Key project highlights include:
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>UI/UX Enhancements:</b> Improved pre-submission guidance and introduced multilingual support to enhance accessibility.</li>
                <li> <b>OCR Integration:</b> Incorporated optical character recognition (OCR) technology to automate document uploads, eliminating manual inputs.</li>
                <li> <b>Agile Development:</b> Led the project using Agile methodology, collaborating with DBS clients in <b>four structured sprints</b> to ensure iterative improvements.</li>
                <li> <b>Design Thinking:</b> Developed user personas, storyboards, and user stories to address pain points and propose practical solutions.</li>
                <li> <b>Scalable Architecture:</b> Utilized RESTful APIs and a microservices architecture to ensure system scalability and efficiency.</li>
            </ul>

            For more details and a complete project overview, please visit our <b>Project Google Site</b> by clicking the "Project Site" button below.
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
        title: "Mobile Bluetooth Gaming Controller",
        description: "This project aimed to transform smartphones into fully functional gaming controllers for PCs using Bluetooth connectivity, built with Java and XML in Android Studio.",
        longer_desc: <>
            A native Android app that transforms smartphones into gaming controllers for PCs using Bluetooth connectivity. Built with Java and XML by a team of five, the app offers customizable controls, gyroscopic input, and real-time syncing via Firebase, delivering an immersive and interactive gaming experience.

            <Title level={5}> Key Features & Technologies:</Title>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>Modular Architecture with MVC Model:</b> Implemented the Model-View-Controller (MVC) pattern to ensure separation of concerns, enabling independent modification of the user interface and business logic.</li>
                <li> <b>Customizable Controller Interface:</b> Designed an intuitive layout editor allowing users to create personalized control schemes with buttons, thumbsticks, and gyroscopic controls.</li>
                <li> <b>Bluetooth GATT Server:</b> Utilized Bluetooth Low Energy (BLE) with GATT profiles to ensure efficient and low-latency wireless communication between the smartphone and PC.</li>
                <li> <b>Gyroscope Integration:</b> Enabled motion-based controls using gyroscope data, converting device orientation into real-time inputs for racing and flight simulation games.</li>
                <li> <b>Cloud Integration with Firebase:</b> Integrated Firebase for real-time data synchronization, user profile management, and secure authentication.</li>
                <li> <b>Multi-Touch Support:</b> Optimized input handling with multi-touch capabilities to support up to 5 simultaneous touch points, enhancing gameplay for complex control schemes.</li>
                <li> <b>User Profile Management:</b> Implemented local and cloud-based storage for saving custom control layouts, enabling users to switch profiles easily.</li>
                <li> <b>In-App Tutorial:</b> Provided a built-in tutorial with step-by-step guidance on pairing the device and configuring custom controls.</li>
            </ul>
            <Title level={5}> Awards & Recognition:</Title>
            This project received <b>two awards</b> for its innovation and technical excellence, reflecting its impact and uniqueness:
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li>SUTD ISTD Design Exhibition | Outstanding 1D Project Exhibit</li>
                <li>Singtel Information Systems and Programming Awards 2024 | 1st Prize</li>
            </ul>

            Watch our <b>Demo Video</b> for more information.
        </>
        ,
        frontend: "Java, XML",
        otr_tech: "Google Firebase (Cloud), Bluetooth API",
        technology: ["Java", "XML", "Google Firebase", "Android Studio"],
        img: imageAssets.playem,
        sub_img: imageAssets.playem_display,
        direct_link: { label: "Demo Video", link: "https://youtu.be/NwHDZt8219s" }
    },
    {
        title: "ObstaX: Landing Page",
        description: "A responsive landing page built with Next.js and Tailwind CSS to showcase ObstaX's product, user testimonials, FAQs, and collect pre-orders.",
        longer_desc: <>
            ObstaX Landing Page is a web-based platform designed to showcase our product, share user testimonials, address FAQs, and enable pre-orders.
            Built with the Next.js with React.js and styled using Tailwind CSS, the site ensures a fast, responsive, and seamless user experience.

            <Title level={5}> Key Features:</Title>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>Product Showcase:</b> Provides detailed information about ObstaX's assistive technology solutions.</li>
                <li> <b>User Testimonials:</b> Highlights feedback from early adopters, increasing credibility and trust.</li>
                <li> <b>FAQs Section:</b> Addresses common questions about the product, features, and usage.</li>
                <li> <b>Contact Us:</b> Includes a contact form for inquiries and partnership opportunities.</li>
                <li> <b>Pre-Order Functionality:</b> Enables users to place pre-orders, gathering early interest and market demand.</li>
                <li> <b>Performance & Responsiveness:</b> Optimized for both desktop and mobile using Tailwind CSS.</li>
            </ul>

            Stay tuned for updates by following our <b>ObstaX LinkedIn page</b> using the button below!
        </>,
        frontend: "ReactTSX, Tailwind CSS (UI Library)",
        backend: "Express, Node.js, MongoDB",
        technology: ["ReactTSX", "Next.js"],
        img: imageAssets.obstaxlandingpage,

        direct_link: { label: "Figma Design", link: "https://www.figma.com/design/hO9DrZ6TXmS8oUadvYuktB/ObstaX-Landing-Page-(Tailwind-CSS)?node-id=7527-1206&t=eQNyjQOdDrQvAwmI-1" },
        ongoing: true,
    },
    {
        title: "Cryptocurrency Swap Form",
        description: "A cryptocurrency swap platform built with ReactJS, offering real-time exchange rates, wallet connectivity, and an intuitive user interface.",

        longer_desc: <>
            This project was developed as part of a coding test for a fintech company. It is a cryptocurrency swap platform built using ReactJS, designed to provide users with real-time exchange rates and seamless wallet connectivity for direct token swaps.

            <Title level={5}> Key Features:</Title>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>User Interface:</b> Designed a fully responsive web interface using ReactJS with clean and modern styling.</li>
                <li> <b>Real-Time Exchange Rates:</b> Integrated a third-party API to display live cryptocurrency exchange rates.</li>
                <li> <b>Wallet Connectivity:</b> Implemented wallet integration to enable users to connect their wallets and swap tokens directly.</li>
                <li> <b>Component-Based Architecture:</b> Built reusable components to enhance scalability and maintainability.</li>
                <li> <b>Deployment:</b> Hosted the web application on Vercel for easy public access.</li>
            </ul>

            <b> Technologies Used:</b>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>Frontend:</b> ReactJS, HTML, CSS, JavaScript</li>
                <li> <b>API:</b> Integrated with a real-time exchange rate API</li>
                <li> <b>Wallet Integration:</b> Web3.js for wallet connectivity</li>
                <li> <b>Deployment:</b> Vercel</li>
            </ul>

            Watch our <b>Demo Video</b> for more information or visit <b>GitHub</b> for the source code.
        </>
        ,
        frontend: "React, HTML, CSS, JavaScript",
        backend: "Integrated with a real-time exchange rate API",
        technology: ["ReactJS", "HTML", "CSS", "JavaScript"],
        img: imageAssets.crypto_swap,
        github: "https://github.com/samuellam123/Cryptocurrency_Swap_Form/tree/reactjs",
        direct_link: { label: "Live App", link: "https://cryptocurrency-swap-form.vercel.app/" }
    },
    {
        title: "Healthy Eating Diet App",
        description: "A sustainable diet-planning mobile app providing personalized meal plans and grocery lists, built for an international hackathon where we won 4th place.",
        longer_desc: <>
            This project was created for an international hackathon focusing on UI design and sustainability.The mobile app offers personalized meal planning, tracks nutritional intake, and generates budget - based grocery lists.The project reached the finals and won < b > 4th place</b > at the Varsity Hackathon USM 2023.

            <Title level={5}> Key Features:</Title>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>UI/UX Design:</b> Designed an intuitive interface using <b>Figma</b>, informed by user research and feedback.</li>
                <li> <b>Personalized Meal Plans:</b> Generated meal recommendations tailored to users’ dietary preferences and goals.</li>
                <li> <b>Budget-Based Grocery Lists:</b> Provided grocery lists optimized for cost and nutritional value.</li>
                <li> <b>Focus on Sustainability:</b> Promoted eco-friendly food choices and reduced food waste through efficient meal planning.</li>
            </ul>

            <Title level={5}> Awards & Recognition:</Title>

            - 4th Place at < b > Varsity Hackathon USM 2023</b > (International Hackathon)
            - Recognized for exceptional UI design and focus on sustainability

            Visit our Figma design by clicking the button below.

        </>,
        frontend: "HTML, CSS, JavaScript",
        technology: ["HTML", "CSS", "JavaScript"],
        img: imageAssets.cook4good,
        direct_link: { label: "Figma Design", link: "https://www.figma.com/design/hyrLhmy48X5Gy7dfiEOM6y/C4G-Latest?node-id=0-1&t=2zRuS6iyFOKTyxsU-1" }
    },
    {
        title: "Personal Project: Cuby",
        description: "A 3D obstacle-dodging game built with Unity and C++, featuring real-time scoring and progress tracking, published on itch.io for Windows users.",
        longer_desc: <>
            <i>Cuby</i> is a personal project — a 3D obstacle-dodging game built with Unity Engine and C++. The game challenges players to avoid obstacles while tracking their score in real time. It is published on <b>itch.io</b> and available for Windows users.

            <Title level={5}> Key Features:</Title>
            <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
                <li> <b>Core Mechanics:</b> Implemented smooth character movement, dynamic obstacle generation, and accurate collision detection.</li>
                <li> <b>Interface Design:</b> Developed a user-friendly interface displaying live scores, fails, and progress tracking.</li>
                <li> <b>Real-Time Scoring:</b> Integrated a real-time scoring system to track player performance and display high scores.</li>
                <li> <b>Deployment:</b> Published the game on itch.io for public access and easy downloads.</li>
            </ul>

            <b> Live Game:</b> Play now on itch.io by clicking the <b>Live Game</b> button below!
        </>
        ,
        otr_tech: "Unity Engine (Game Engine), C++",
        technology: ["Unity Engine", "C++"],
        img: imageAssets.cuby2,
        sub_img: imageAssets.cuby1,
        direct_link: { label: "Live Game", link: "https://samuellam123.itch.io/cuby" }
    },

];
