import { Github, Linkedin, Twitter, BrainCircuit, Code, Database, Rocket, BookOpen, Award, BarChart, Cpu, Microscope, School, Scroll, GraduationCap } from 'lucide-react';

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
    name: "Data Sage",
    subtitle: "Level 99 Data Scientist",
    story: "Born in the binary forests of Silicon Valley, I embarked on a quest to master the arcane arts of data. My journey led me through treacherous datasets and across chaotic clouds, forging my skills in the fires of machine learning. I now wield algorithms to unveil hidden truths and craft tales of insight from raw information.",
    avatar: "https://placehold.co/160x160.png",
    stats: [
        { label: "Problem Solving", value: 95 },
        { label: "Machine Learning", value: 92 },
        { label: "Data Visualization", value: 88 },
        { label: "Statistical Analysis", value: 90 },
    ]
};

export const SKILLS_DATA = {
    title: "Skills Inventory",
    description: "My digital toolkit. Each skill is a well-honed weapon in my data science arsenal.",
    skills: [
        { name: 'Python', icon: Code },
        { name: 'SQL', icon: Database },
        { name: 'Machine Learning', icon: BrainCircuit },
        { name: 'Data Visualization', icon: BarChart },
        { name: 'Deep Learning', icon: Cpu },
        { name: 'Statistical Analysis', icon: Microscope },
        { name: 'React & Next.js', icon: Rocket },
        { name: 'Cloud (GCP/AWS)', icon: Code },
        { name: 'Docker', icon: Code },
        { name: 'Git & GitHub', icon: Github },
    ]
}

export const PROJECTS_DATA = {
    title: "Project Levels",
    description: "Embark on a journey through my completed quests. Each project is a level I've designed and conquered.",
    projects: [
        {
            title: "Project Alpha",
            description: "A deep learning model to predict customer churn with 95% accuracy, saving the kingdom millions in revenue.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "fantasy castle",
            skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
            link: "#"
        },
        {
            title: "Project Beta",
            description: "An interactive dashboard visualizing real-time market trends, providing actionable insights for traders.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "glowing cave",
            skills: ["React", "D3.js", "Next.js", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Project Gamma",
            description: "A natural language processing engine to analyze sentiment on social media, with a custom-built API.",
            image: "https://placehold.co/600x400.png",
            dataAiHint: "enchanted forest",
            skills: ["NLP", "Hugging Face", "FastAPI", "Docker"],
            link: "#"
        },
    ]
}

export const EXPERIENCE_DATA = {
    title: "Career Quest",
    description: "Chronicles of my professional adventures in the realm of data.",
    entries: [
        {
            date: "2020 - Present",
            title: "Lead Data Scientist",
            company: "Innovate Inc.",
            description: "Led a team of data mages to develop predictive models and data-driven strategies."
        },
        {
            date: "2018 - 2020",
            title: "Data Scientist",
            company: "DataCorp",
            description: "Honed my skills in data analysis, visualization, and machine learning on various quests."
        },
        {
            date: "2017 - 2018",
            title: "Junior Data Analyst",
            company: "Analytics Guild",
            description: "Began my journey as an apprentice, learning the fundamentals of data extraction and reporting."
        }
    ]
}

export const EDUCATION_DATA = {
    title: "Educational Lore",
    entries: [
        {
            degree: "M.S. in Computer Science",
            institution: "University of Technology",
            date: "2015-2017",
            icon: GraduationCap,
        },
        {
            degree: "B.S. in Statistics",
            institution: "State College",
            date: "2011-2015",
            icon: School,
        }
    ]
}

export const PUBLICATIONS_DATA = {
    title: "Ancient Scrolls",
    description: "Codified knowledge I've contributed to the great libraries of science.",
    entries: [
        {
            title: "The Theory of Pixelated Probabilities",
            journal: "Journal of Arcane Data",
            year: 2022,
            link: "#",
            icon: Scroll
        },
        {
            title: "Neural Networks in Retro Gaming",
            journal: "Conference on Interactive Entertainment",
            year: 2021,
            link: "#",
            icon: Scroll
        }
    ]
}

export const CERTIFICATIONS_DATA = {
    title: "Achievements Unlocked",
    description: "Badges of honor earned by conquering specialized challenges.",
    entries: [
        { name: "Cloud Professional Data Engineer", issuer: "Cloud Platform", icon: Award },
        { name: "TensorFlow Developer Certificate", issuer: "DeepLearning.AI", icon: Award },
        { name: "Certified Analytics Professional", issuer: "INFORMS", icon: Award },
        { name: "Machine Learning Specialist", issuer: "Cloud Platform", icon: Award }
    ]
}
