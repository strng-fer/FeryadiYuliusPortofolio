import { Github, Linkedin, Twitter, BrainCircuit, Code, Database, Rocket, BookOpen, Award, BarChart, Cpu, Microscope, School, Scroll, GraduationCap, FileText, Presentation } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }, // This will be the footer
];

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];


export const ABOUT_DATA = {
    title: "Character Profile",
    name: "Feryadi Yulius",
    subtitle: "Undergraduated Data Science Student",
    story: "Data Science student at Sumatera Institute of Technology with a passion for technology, mathematics, data science, and machine learning especially in NLP and Image Processing. Fluent both in English and Bahasa Indonesia. Mastering Python, R, and SQL for data analysis. With strong leadership, communication, critical thinking, and analytical skills, envisions making meaningful contributions to data-driven decision-making and technology.",
    avatar: "https://placehold.co/160x160.png",
    stats: [
        { label: "Natural Language Processing (NLP)" },
        { label: "Image Processing & Computer Vision" },
        { label: "Predictive Modeling" },
        { label: "Data-Driven Decision Making" },
    ]
};

export const SKILLS_DATA = {
    title: "Skills Inventory",
    description: "My digital toolkit. Each skill is a well-honed weapon in my data science arsenal.",
    skills: [
        { name: 'Python', icon: Code, description: "A versatile programming language for data analysis, machine learning, and web development." },
        { name: 'R', icon: Code, description: "A language and environment for statistical computing and graphics." },
        { name: 'SQL', icon: Database, description: "Structured Query Language for managing and querying relational databases." },
        { name: 'PowerBI', icon: BarChart, description: "A business analytics service by Microsoft for creating interactive visualizations and business intelligence dashboards." },
        { name: 'Tableau', icon: BarChart, description: "A powerful data visualization tool used for business intelligence." },
        { name: 'Streamlit', icon: Rocket, description: "An open-source Python library that makes it easy to create and share custom web apps for machine learning and data science." },
        { name: 'MS Excel', icon: FileText, description: "A spreadsheet program for data analysis, calculations, and visualization." },
        { name: 'Google Colab', icon: Cpu, description: "A free cloud-based Jupyter notebook environment for writing and executing Python code." },
        { name: 'Jupyter Notebook', icon: BookOpen, description: "An open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text." },
        { name: 'MySQL', icon: Database, description: "An open-source relational database management system." },
        { name: 'PostgreSQL', icon: Database, description: "A powerful, open source object-relational database system." },
        { name: 'Hadoop', icon: Database, description: "An open-source framework for distributed storage and processing of large datasets." },
    ]
}

export const PROJECTS_DATA = {
    title: "Project Levels",
    description: "Embark on a journey through my completed quests. Each project is a level I've designed and conquered.",
    projects: [
        {
            title: "Outfit Recommendation Chatbot using NVIDIA",
            description: "Developed a personalized outfit recommendation system using Retrieval-Augmented Generation (RAG) architecture powered by NVIDIA LLM (Llama-3.1 Nemotron Nano 8B). Integrated FAISS for fast similarity search on vectorized instruction-following dataset. Applied prompt engineering to fine-tune responses in the style of a fashion stylist. The system provides context-aware, text-based outfit suggestions with potential for future multimodal expansion and real-world deployment.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "fashion chatbot",
            skills: ["NVIDIA", "RAG", "FAISS", "LLM"],
            link: "#"
        },
        {
            title: "Infographic: Exploring Rice Production in Indonesia",
            description: "Behind Indonesia's glittering achievement as one of the world's largest rice producers lies a paradox that challenges national food security. The infographic 'From Fields to Distribution' reveals a stark contrast between impressive production milestones and the unequal realities of distribution. An infographic submitted to the 2025 Gammafest IPB Statistical Visualization Competition.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "rice fields infographic",
            skills: ["Infographic", "Data Visualization"],
            link: "#"
        },
        {
            title: "Toy Store KPI Analysis with PowerBI Dashboard",
            description: "As one of the most dynamic sectors in retail, the toy industry is undergoing rapid changes driven by product innovation and shifting consumer preferences. 'Maven Toys,' as one of the key players in this industry, must have a deep understanding of its sales performance in order to compete effectively. In this context, the use of BI dashboards is becoming increasingly important to provide data-driven insights to management. Dashboards not only present information visually but also enable in-depth interactive analysis.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "business dashboard toys",
            skills: ["PowerBI", "Dashboard", "KPI Analysis"],
            link: "#"
        },
        {
            title: "Plankton Classification using ResNet",
            description: "Plankton classification model using Deep Learning based on the ResNet-101 architecture pre-trained on ImageNet. The model achieved accuracies of 99.55% (training), 88.17% (validation), and 99.15% (testing).",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "plankton microscope",
            skills: ["Deep Learning", "ResNet", "ImageNet", "Python"],
            link: "#"
        },
        {
            title: "Spices Detection With Streamlit",
            description: "Spice Detection is an AI-powered online platform designed to identify 31 varieties of Indonesian spices through image analysis. Developed using Python and implemented with the Streamlit framework, this platform boasts a prediction accuracy of up to 83%.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "indonesian spices",
            skills: ["Streamlit", "Python", "AI", "Image Analysis"],
            link: "#"
        },
        {
            title: "Know Your Batik Website With Streamlit",
            description: "Know Your Batik is a website that allows users to detect types of batik based on uploaded images or photos. This website is designed to help users recognize and understand different types of batik through image processing technology.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "batik pattern",
            skills: ["Streamlit", "Image Processing", "Python"],
            link: "#"
        },
        {
            title: "Journal Mancing With Streamlit",
            description: "A final project for a Programming Algorithms course involved creating a fishing log app using Python libraries like Streamlit, Sqlite3, and Pandas. The application functions similarly to a note-taking app on mobile devices but is tailored for fishing activities.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "fishing app",
            skills: ["Streamlit", "Python", "SQLite", "Pandas"],
            link: "#"
        },
    ]
}

export const EXPERIENCE_DATA = {
    title: "Career Quest",
    description: "Chronicles of my professional adventures in the realm of data.",
    entries: [
        {
            date: "June 2025 – Now",
            title: "Research Assistant Intern",
            company: "Indonesian National Research and Innovation Agency (BRIN-RI)",
            description: "Drafted a research paper on deep learning modeling for plankton identification from Belitung Island. Trained and evaluated four deep learning architectures (AlexNet, DenseNet, VGG16, and InceptionV3) on the Belitung plankton dataset, achieving the highest accuracy of 95% with the DenseNet model. Performed manual labeling and segmentation of 86 microscopic plankton images, and applied data augmentation techniques to expand the dataset to over 500 annotated images. Developed and refined an Android-based plankton identification application integrated with a mobile microscope."
        },
        {
            date: "January 2025 – June 2025",
            title: "Statistical for Data Science Practicum Assistant",
            company: "Sumatera Institute of Technology",
            description: "Taught statistical concepts (hypothesis testing, regression) to 60+ students. Assisted in 10 laboratory sessions on R tools. Managing 500+ pre-test data and student assignments. Mentored 1 students group in capstone projects for real-world problems. Evaluating students' learning outcomes."
        },
        {
            date: "September 2024 – December 2024",
            title: "Programming Algorithm Practicum Assistant",
            company: "Sumatera Institute of Technology",
            description: "Delivered practical programming labs to 60+ students to understanding of the Programming Algorithms course. Assisted in 10 laboratory sessions, helping 95% of students successfully complete Python algorithmic projects. Managing 500+ pre-test data and student assignments. Motivating students. Evaluating students' learning outcomes."
        },
        {
            date: "September 2023 – January 2025",
            title: "Basic Math Tutorial Assistant",
            company: "Sumatera Institute of Technology",
            description: "Teaching 10 basic math module to 130+ first-year students across 2 semester. Discussing issues raised by the professor, answering questions from mid-semester and end-of-semester exams. Designed and assigned 10+ self-study task modules per semester, resulting in an 85% completion rate and improved independent problem-solving skills. Increased student enthusiasm through interactive workshops, reflected in a 4.5/5 satisfaction score in post-semester feedback surveys. Evaluate the comprehension and difficulties of first-year students to avoid hindering their learning."
        },
    ]
}

export const EDUCATION_DATA = {
    title: "Educational Lore",
    entries: [
        {
            degree: "Data Science (CGPA: 3.43/4.00)",
            institution: "Sumatera Institute of Technology",
            date: "September 2022 - Now",
            icon: GraduationCap,
        },
        {
            degree: "Natural Science",
            institution: "SMA N 1 Lubai Ulu",
            date: "2019 - 2022",
            icon: School,
        }
    ]
}

export const PUBLICATIONS_DATA = {
    title: "Ancient Scrolls",
    description: "Codified knowledge I've contributed to the great libraries of science.",
    entries: [
        {
            title: "Implementasi Ekosistem Hadoop untuk Analisis Segmentasi Pelanggan E-commerce di Pulau Sumatera",
            journal: "UPN Jatim Data Science National Seminar",
            year: 2025,
            link: "#",
            icon: Presentation
        },
        {
            title: "Variable Selection Methods in Linear Regression Modeling of Rainfall Data in Lampung Province.",
            journal: "UPN Jatim Data Science National Seminar",
            year: 2024,
            link: "#",
            icon: Presentation
        }
    ]
}

export const CERTIFICATIONS_DATA = {
    title: "Achievements Unlocked",
    description: "Badges of honor earned by conquering specialized challenges.",
    entries: [
        { name: "Data Scientist Associated", issuer: "Credential ID: DSA0014978540656", icon: Award },
        { name: "Python Data Associated", issuer: "Credential ID: PDA0015038237495", icon: Award },
    ]
}
