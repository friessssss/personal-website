import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

import matlab from "../assets/icons/matlab.svg";
import dspace from "../assets/icons/dspace.png";
import autodesk from "../assets/icons/autodesk.svg";
import rasp_pi from "../assets/icons/rasp-pi.svg";
import arduino from "../assets/icons/arduino.svg";
import jira from "../assets/icons/jira.svg";
import cpp from "../assets/icons/cpp.svg";
import python from "../assets/icons/python.svg";
import java from "../assets/icons/java.svg";
import schaeffler from "../assets/images/schaeffler.png";
import fives from "../assets/images/fives.png";
import mu from "../assets/images/mu.png";
import deej from "../assets/icons/deej.png";
import fluids from "../assets/icons/fluids.png";
import money from "../assets/icons/money.png";
import c from "../assets/icons/c.svg";



export const skills = [
    {
        imageUrl: matlab,
        name: "MATLAB",
        type: "Engineering",
    },
    {
        imageUrl: dspace,
        name: "DSpace",
        type: "Engineering",
    },
    {
        imageUrl: autodesk,
        name: "Autodesk",
        type: "Engineering",
    },
    {
        imageUrl: rasp_pi,
        name: "Raspberry Pi",
        type: "Engineering",
    },
    {
        imageUrl: arduino,
        name: "Arduino",
        type: "Engineering",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Engineering",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Engineering",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Engineering",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Engineering",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Chassis Mechatronics Engineer",
        company_name: "Schaeffler",
        icon: schaeffler,
        iconBg: "#95EAC4",
        date: "Jun 2021 - Aug 2023",
        points: [
            "Designed, Implemented, Troubleshooted, and Iterated on brand new Industry prototype designs for future electric automotive market.",
            "Wrote software to precisely estimate steering rack forces within steer-by-wire systems, while aligning with stringent customer specifications.",
            "Spearheaded development on demonstration vehicle for the Detroit Auto Show and successfully brought project to fruition within strict time deadlines.",
            "Presented prototype vehicle to customers in order to secure $10 million per year contracts to supply new vehicles.",
            "Piloted foundational architecture design for Battery Management System, in order to bolster product portfolio for EV Market."
        ],
    },
    {
        title: "Obsolence Engineer",
        company_name: "Fives North American Combustion",
        icon: fives,
        iconBg: "#A05788",
        date: "Jun 2019 - Jan 2020",
        points: [
            "Established annual product volume metrics, while creating foundational reference for identifying product obsolescence triggers, including inventory levels and active customer engagement by employing in-depth analysis of customer sales data.",
            "Identified surplus parts no longer essential for inventory maintenance by analyzing Bill of Materials (BOM) along with authoring Engineering Change Notices (ECNs) to formalize and disseminate obsolescence directives throughout global organization.",
            "Achieved notable 15% reduction in comprehensive product portfolio by leading team of four in spearheading product obsolescence initiative."
        ],
    },
    {
        title: "Student",
        company_name: "Miami University of Ohio",
        icon: mu,
        iconBg: "#FF3E54",
        date: "Aug 2018 - May 2022",
        points: [
            "Bachelor of Science in Mechanical Engineering",
            "Minor in Computer Science",
            "GPA: 3.4",
            "NCAA Division 1 Cross Counnty & Track and Field Athlete",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: deej,
        theme: 'btn-back-pink',
        name: 'Deej Volume Mixer',
        description: 'Designed and Printed 3D encloser with app logos, as well as sourced and built electrical components for a volume mixer.',
    },
    {
        iconUrl: money,
        theme: 'btn-back-green',
        name: 'RITA Tax Software',
        description: 'Developed software to automate the process of filing the RITA Tax form, saving over $8000 for friends and family.',
    },
    {
        iconUrl: fluids,
        theme: 'btn-back-lightblue',
        name: 'Chiller Plant Redesign',
        description: 'Wrote software to quickly design and plan optimal chiller plant pumps, pipe sizes, and cleaning schedule in order to produce optimal 20 year cost',
    },
    {
        iconUrl: c,
        theme: 'btn-back-lightblue',
        name: 'PID for C',
        description: 'Developed a PID controller for C, which can be used to control a variety of systems. Also incliudes graphical output of the system response.',
    },
];