import { Github, Linkedin, Code, Database, Rocket, BookOpen, Award, BarChart, Cpu, FileText, Presentation, Smartphone, Phone, Mail, MapPin } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Writing', href: '#publications' },
  { name: 'Certification', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/strng-fer', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/feryadi-yulius/', icon: Linkedin },
    { name: 'WhatsApp', url: 'https://wa.me/6285174484303', icon: Phone }
];

export const ABOUT_DATA = {
    title: "Profile",
    name: "Feryadi Yulius",
    subtitle: "Data Scientist & AI Engineer",
    story: "Graduated Data Science student from Sumatera Institute of Technology (ITERA), focused on machine learning, deep learning, computer vision, natural language processing, business intelligence, and operations research. I build practical data products and explain technical ideas clearly.",
    avatar: "/images/feryadi-yulius-avatar.webp",
    stats: [
        { label: "Machine learning and deep learning" },
        { label: "Computer vision and NLP" },
        { label: "Business intelligence and data visualization" },
        { label: "Operations research and process optimization" },
    ]
};

export const SKILLS_DATA = {
    title: "Tools I Work With",
    description: "A practical toolkit for teaching, research, analysis, and building data-driven products.",
    skills: [
        { name: 'Python', icon: Code, description: "A versatile programming language for data analysis, machine learning, and web development." },
        { name: 'R', icon: Code, description: "A language and environment for statistical computing and graphics." },
        { name: 'Google Colaboratory', icon: Cpu, description: "A hosted notebook environment for running Python data science and machine learning workflows." },
        { name: 'Power BI', icon: BarChart, description: "A business intelligence platform for interactive dashboards and KPI analysis." },
        { name: 'Streamlit', icon: Rocket, description: "An open-source Python library that makes it easy to create and share custom web apps for machine learning and data science." },
        { name: 'Git & GitHub', icon: Code, description: "Version control and collaboration tools for managing data science and software projects." },
        { name: 'Machine Learning', icon: Database, description: "Modeling workflows for prediction, classification, and evaluation." },
        { name: 'Deep Learning', icon: Cpu, description: "Neural network methods for image, text, and other complex data." },
        { name: 'Computer Vision', icon: Smartphone, description: "Image and video analysis for detection, classification, and monitoring." },
        { name: 'NLP', icon: BookOpen, description: "Natural language processing for text embeddings, similarity, and generative applications." },
        { name: 'Operations Research', icon: BarChart, description: "Quantitative modeling for process analysis and optimization." },
    ]
}

export const PROJECTS_DATA = {
    title: "Selected Work",
    description: "Research and applied projects across computer vision, deep learning, NLP, business intelligence, and operations research.",
    projects: [
        {
            title: "Pineapple Detection & Monitoring System",
            description: "A computer vision project for detecting and monitoring pineapple plants and fruits from images and videos. The system explores object detection, confidence visualization, and a pipeline for future tracking and counting in precision agriculture.",
            image: "/images/classification.png",
            dataAiHint: "pineapple detection",
            skills: ["Python", "PyTorch", "YOLO", "OpenCV", "Computer Vision"],
            keyFeatures: [
                "Pineapple object detection using deep learning",
                "Image and video inference",
                "Bounding box visualization and confidence scores",
                "Pipeline preparation for object tracking and counting",
                "Computer vision exploration for precision agriculture",
            ],
            techStack: ["Python", "PyTorch", "YOLO", "OpenCV", "Computer Vision"],
            focus: ["Object Detection", "Deep Learning", "Computer Vision", "Precision Agriculture"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Evaluation Faster R-CNN & YOLO for Belitung Coastal Waters",
            description: "Bachelor thesis evaluating Faster R-CNN and YOLO for object detection on coastal water imagery. The work compares accuracy and inference speed through preprocessing, augmentation, fine-tuning, and evaluation using mAP, precision, recall, and F1-score.",
            image: "/images/planktoscan-androidapps.png",
            dataAiHint: "coastal object detection",
            skills: ["Python", "Faster R-CNN", "YOLO", "PyTorch", "Model Evaluation"],
            keyFeatures: [
                "Comparative evaluation of Faster R-CNN and YOLO",
                "Preprocessing, augmentation, and model fine-tuning",
                "Accuracy and inference-speed comparison",
                "Evaluation with mAP, precision, recall, and F1-score",
            ],
            techStack: ["Python", "PyTorch", "Faster R-CNN", "YOLO", "Data Augmentation"],
            focus: ["Object Detection", "Deep Learning", "Model Evaluation", "Coastal Monitoring"],
            year: "Bachelor thesis",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Pothole Detection — Road Infrastructure Monitoring",
            description: "A YOLOv8 computer vision model for real-time pothole detection and spatial localization to support road maintenance planning. The project achieved Precision 0.831 and mAP@50 0.774.",
            image: "/images/Screenshot_2025-03-25_103126.png",
            dataAiHint: "pothole detection",
            skills: ["Python", "YOLOv8", "OpenCV", "Infrastructure Monitoring"],
            keyFeatures: [
                "Real-time pothole detection with YOLOv8",
                "Spatial localization for road infrastructure monitoring",
                "Precision of 0.831 and mAP@50 of 0.774",
                "Computer vision support for road maintenance planning",
            ],
            techStack: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
            focus: ["Object Detection", "Deep Learning", "Infrastructure Monitoring", "Model Evaluation"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Phytoplankton Classification from Belitung Coastal Waters",
            description: "Processed 236 images across 26 phytoplankton classes, expanded the dataset to over 10,000 images using nine augmentation techniques, and evaluated 13 CNN architecture variants. The work was deployed as a website and Android app, PlanktoScan, with BRIN copyright registration.",
            image: "/images/classification.png",
            dataAiHint: "phytoplankton classification",
            skills: ["Python", "CNN", "Android", "Web Development", "Deep Learning"],
            keyFeatures: [
                "Classification of 26 phytoplankton classes",
                "Dataset expansion from 236 images to more than 10,000 images",
                "Evaluation of 13 CNN architecture variants",
                "Web and Android deployment through PlanktoScan",
                "Copyright registration with BRIN",
            ],
            techStack: ["Python", "CNN", "Deep Learning", "Android", "Web Development"],
            focus: ["Image Classification", "Deep Learning", "Computer Vision", "Marine Research"],
            link: "https://github.com/strng-fer/PlanktonIdentificationApps",
            year: "2025",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Queue System Analysis for Car Refueling Lanes",
            description: "A quantitative study of vehicle queues at gas stations near Institut Teknologi Sumatera using M/M/1 and M/M/s queuing theory. The analysis identified peak congestion at ρ = 1.14 and recommended adding one server during rush hours.",
            image: "/images/Screenshot_2025-03-24_131840.png",
            dataAiHint: "queue analysis",
            skills: ["Quantitative Analysis", "Queuing Theory", "Statistical Analysis", "Process Optimization"],
            keyFeatures: [
                "Analysis of vehicle queues at gas stations near ITERA",
                "M/M/1 and M/M/s queuing model comparison",
                "Identification of peak congestion at ρ = 1.14",
                "Recommendation to add one server during rush hours",
            ],
            techStack: ["Statistical Analysis", "Queuing Theory", "Quantitative Analysis", "Process Optimization"],
            focus: ["Operations Research", "Queueing Theory", "Process Analysis", "Optimization"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Outfit Recommendation Chatbot using NVIDIA",
            description: "A personalized outfit recommendation system using Retrieval-Augmented Generation with NVIDIA Llama-3.1 Nemotron Nano 8B. It uses FAISS similarity search and prompt engineering to create context-aware stylist responses.",
            image: "/images/Salinan_dari_Apa_itu_Jupyter_Notebook.jpg",
            dataAiHint: "outfit recommendation chatbot",
            skills: ["Python", "Llama-3.1", "RAG", "FAISS", "NVIDIA API", "NLP"],
            keyFeatures: [
                "Context-aware outfit recommendations",
                "Retrieval-Augmented Generation workflow",
                "FAISS similarity search for relevant fashion context",
                "Prompt engineering for stylist-style responses",
            ],
            techStack: ["Python", "Llama-3.1 Nemotron", "RAG", "FAISS", "NVIDIA API"],
            focus: ["Generative AI", "Natural Language Processing", "Recommendation Systems", "Semantic Search"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Unsupervised LinkedIn Company Profile Embedding",
            description: "An LSTM autoencoder that generates text embeddings from company profiles for similarity search. The work evaluates semantic similarity through embedding analysis and PCA/t-SNE visualization.",
            image: "/images/Screenshot_2025-03-22_223137.png",
            dataAiHint: "company profile embeddings",
            skills: ["Python", "LSTM", "Autoencoder", "NLP", "Similarity Search"],
            keyFeatures: [
                "Unsupervised learning for company profile representation",
                "LSTM autoencoder-based text embeddings",
                "Similarity search across company profiles",
                "PCA and t-SNE embedding visualization",
            ],
            techStack: ["Python", "LSTM", "Autoencoder", "NLP", "PCA", "t-SNE"],
            focus: ["Unsupervised Learning", "NLP", "Text Embeddings", "Similarity Search"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Infographic: Exploring Rice Production in Indonesia",
            description: "An infographic titled “From Fields to Distribution” that uses harvest area, average grain prices, and total production data to highlight geographical inequalities in Indonesian food security. Submitted to the 2025 Gammafest IPB Statistical Visualization Competition.",
            image: "/images/Screenshot_2025-03-25_103126.png",
            dataAiHint: "rice production infographic",
            skills: ["Data Visualization", "Graphic Design", "Statistical Analysis", "Storytelling"],
            keyFeatures: [
                "Visualization of harvest area, grain prices, and production",
                "Geographical comparison of Indonesian rice production",
                "Data storytelling for food security insights",
                "Submission to the 2025 Gammafest IPB competition",
            ],
            techStack: ["Data Visualization", "Statistical Analysis", "Graphic Design", "Data Storytelling"],
            focus: ["Data Visualization", "Statistical Analysis", "Food Security", "Communication"],
            year: "2025",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Toy Store KPI Analysis with Power BI Dashboard",
            description: "A business intelligence dashboard for Maven Toys that tracks total orders, revenue, profit, product-category trends, and revenue growth for interactive management analysis.",
            image: "/images/Screenshot_2025-03-24_131840.png",
            dataAiHint: "toy store dashboard",
            skills: ["Power BI", "Data Analytics", "KPI Dashboarding"],
            keyFeatures: [
                "Interactive tracking of orders, revenue, and profit",
                "Product-category performance analysis",
                "Revenue growth monitoring",
                "Management-ready KPI dashboard",
            ],
            techStack: ["Power BI", "Data Analytics", "KPI Dashboarding"],
            focus: ["Business Intelligence", "Data Analytics", "KPI Monitoring", "Data Visualization"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Spices Detection with Streamlit",
            description: "An AI-powered platform that identifies 31 varieties of Indonesian spices through image analysis. The Streamlit app reaches up to 83% prediction accuracy and supports cultural and culinary education.",
            image: "/images/banner-rempah-indonesia-600x315h.webp",
            dataAiHint: "indonesian spices",
            skills: ["Python", "Deep Learning", "Streamlit", "Computer Vision"],
            keyFeatures: [
                "Image-based identification of 31 Indonesian spice varieties",
                "Interactive Streamlit inference interface",
                "Prediction accuracy of up to 83%",
                "Application for cultural and culinary education",
            ],
            techStack: ["Python", "Deep Learning", "Streamlit", "Computer Vision"],
            focus: ["Image Classification", "Deep Learning", "Computer Vision", "Cultural Education"],
            link: "https://deteksi-rempah.streamlit.app/",
            relatedUrl1: "https://github.com/strng-fer/deteksirempah",
            year: "2024",
            collaborators: ["Feryadi Yulius"]
        },
        {
            title: "Know Your Batik Website with Streamlit",
            description: "An interactive website that detects batik types from uploaded images. It applies image processing for pattern recognition and supports digital cultural preservation and public education.",
            image: "/images/Salinan_dari_Apa_itu_Jupyter_Notebook.jpg",
            dataAiHint: "batik pattern",
            skills: ["Python", "Deep Learning", "Streamlit", "Computer Vision"],
            keyFeatures: [
                "Image upload and batik pattern detection",
                "Image processing for cultural pattern recognition",
                "Interactive Streamlit website",
                "Digital cultural preservation and public education",
            ],
            techStack: ["Python", "Deep Learning", "Streamlit", "Computer Vision"],
            focus: ["Image Classification", "Computer Vision", "Cultural Preservation", "Public Education"],
            link: "https://knowyourbatik.streamlit.app/",
            relatedUrl1: "https://github.com/rayths/KNOB",
            year: "2024",
            collaborators: ["Feryadi Yulius"]
        },
    ]
}

export const EXPERIENCE_DATA = {
    title: "Experience",
    description: "Research and development experience in applied data science and AI.",
    entries: [
        {
            date: "June 2025 – August 2025",
            title: "Research Assistant Intern",
            company: "Badan Riset dan Inovasi Nasional (BRIN)",
            logo: "/images/logo-brin.png",
            description: "Conducted research and development activities under the Indonesian National Research and Innovation Agency, supporting applied computational work in data processing, analysis, and AI."
        },
    ]
}

export const OTHER_EXPERIENCE_DATA = {
    title: "Other Experience",
    description: "Teaching, tutoring, and academic support roles.",
    entries: [
        {
            date: "January 2026 – present",
            title: "Part-time Programming Teacher",
            company: "Timedoor Academy · Bandar Lampung",
            logo: "/images/logo-itera.png",
            description: "Teach programming logic and coding for students aged 5–18 through age-appropriate lessons, hands-on activities, and guided practice across AI, coding, IoT, and robotics."
        },
        {
            date: "June 2026 – present",
            title: "Part-time Teacher",
            company: "Ruangguru · Bandar Lampung",
            logo: "/images/logo-sainsdata.png",
            description: "Teach TIU for CASN preparation, focusing on verbal reasoning, numerical logic, analytical thinking, and test-taking strategies."
        },
        {
            date: "November 2025 – January 2026",
            title: "Part-time Teacher",
            company: "Bimbel Ruang Juara",
            logo: "/images/logo-sman1lubaiulu.png",
            description: "Provided one-on-one tutoring in basic literacy and numeracy for early learners using personalized teaching methods."
        },
        {
            date: "September 2023 – June 2026",
            title: "Tutorial & Practicum Assistant",
            company: "Sumatera Institute of Technology",
            logo: "/images/logo-itera.png",
            description: "Supported undergraduate tutorials and practicums through academic mentoring, practicum supervision, grading, and assessment across mathematics, statistics, optimization, data mining, programming, and algorithms."
        },
    ]
}

export const EDUCATION_DATA = {
    title: "Education",
    entries: [
        {
            degree: "Data Science (CGPA: 3.52/4.00)",
            institution: "Sumatera Institute of Technology",
            date: "2022 – 2026",
            logo: "/images/logo-itera.png",
        },
        {
            degree: "Natural Science",
            institution: "SMA N 1 Lubai Ulu",
            date: "2019 - 2022",
            logo: "/images/logo-sman1lubaiulu.png",
        }
    ]
}

export const PUBLICATIONS_DATA = {
    title: "Research & Intellectual Property",
    description: "Applied work connected to data science, big data, and computational biology.",
    entries: [
        {
            title: "PlanktoScan – Computer Program (BRIN)",
            journal: "Intellectual Property",
            year: 2025,
            link: "https://github.com/strng-fer/PlanktonIdentificationApps",
            icon: FileText,
            authors: ["Feryadi Yulius"],
            doi: "",
            abstract: "A computer program and Android prototype for plankton identification, developed during research activities with BRIN."
        },
        {
            title: "Implementasi Ekosistem Hadoop untuk Analisis Segmentasi Pelanggan E-commerce di Pulau Sumatera",
            journal: "UPN Jatim Data Science National Seminar",
            year: 2025,
            link: "https://prosiding-senada.upnjatim.ac.id/index.php/senada/article/view/213",
            icon: Presentation,
            authors: ["Nabila Zakiyah Zahra", "Ardika Satria", "Feryadi Yulius", "Khoirul Mizan Abdullah", "Kharisa Harvanny", "Luluk Muthoharoh", "Vidia Vidia"],
            doi: "https://doi.org/10.33005/senada.v5i1.465",
            abstract: "Studi ini mengembangkan solusi big data berbasis ekosistem Hadoop untuk analisis segmentasi pelanggan e-commerce di wilayah Sumatera. Pendekatan arsitektur medallion tiga lapis (bronze, silver, gold) diimplementasikan dengan memanfaatkan teknologi Sqoop untuk integrasi data, Spark SQL untuk transformasi, dan MLlib untuk pemodelan prediktif. Pada lapisan bronze, data mentah disimpan dalam format Parquet di HDFS, kemudian diproses di lapisan silver melalui tahap pembersihan data dan ekstraksi fitur RFM (Recency, Frequency, Monetary Value). Pada lapisan gold, algoritma K-Means dioptimalkan menggunakan kombinasi Metode Elbow dan Silhouette Score untuk menentukan jumlah cluster optimal, menghasilkan empat segmen pelanggan yang berbeda. Visualisasi hasil segmentasi dikembangkan menggunakan Apache Superset, menyediakan dashboard interaktif untuk analisis bisnis. Seluruh alur kerja diotomatisasi melalui Apache Oozie, dengan dukungan Apache Atlas untuk manajemen metadata dan integrasi Apache Ambari serta ZooKeeper untuk pemantauan kluster secara real-time. Temuan penelitian membuktikan kemampuan sistem dalam mengatasi tantangan pengolahan data e-commerce skala besar di Sumatera, sekaligus menyediakan landasan yang kuat untuk pengembangan strategi pemasaran berbasis data yang lebih efektif dan terukur."
        },
        {
            title: "Metode Seleksi Variabel dalam Pemodelan Regresi Linear Data Curah Hujan Provinsi Lampung",
            journal: "UPN Jatim Data Science National Seminar",
            year: 2024,
            link: "https://prosiding-senada.upnjatim.ac.id/index.php/senada/article/view/213",
            icon: Presentation,
            authors: ["Elok Fiola", "Feryadi Yulius", "Presilia Presilia", "Dea Mutia Risani", "Mika Alvionita", "Febri Dwi Irawati"],
            doi: "https://doi.org/10.33005/senada.v4i1.213",
            abstract: "Penelitian ini dilakukan dengan tujuan untuk untuk mengseleksi jumlah variabel dalam model regresi linear berganda dengan menggunakan metode best subset, forward stepwise, dan backward stepwise. Evaluasi model dilakukan berdasarkan nilai Adjusted R2 tertinggi, nilai Bayesian Information Criterion (BIC) terendah. Hasil analisis menunjukkan bahwa seleksi jumlah variabel pada model regresi linear berganda yaitu jumlah hari hujan, rata-rata kecepatan angin, rata-rata kelembaban udara, rata-rata suhu udara, dan rata-rata suhu udara minimum. Nilai adjusted R2 tertinggi yang diperoleh adalah 67.1%, serta nilai Bayesian Information Criterion (BIC), yaitu senilai -5.715773. Ketiga metode best subset, forward stepwise, dan backward stepwise menunjukkan konsistensi dalam memilih variabel prediktor yang dimasukkan."
        },
        {
            title: "Juara 3 – INNOVEST 2026",
            journal: "Politeknik Negeri Jember · Clash of Champions",
            year: 2026,
            link: "",
            icon: Award,
            authors: ["Feryadi Yulius"],
            doi: "",
            abstract: "Third-place award at INNOVEST 2026, held at Politeknik Negeri Jember, with the theme “Clash of Champions”."
        },
    ]
}

export const CERTIFICATIONS_DATA = {
    title: "Professional Certifications",
    description: "Verified DataCamp credentials and their validity periods.",
    entries: [
        {
            name: "Associate Data Scientist",
            issuer: "DataCamp",
            url: "https://www.datacamp.com/certificate/DSA0014978540656",
            credentialId: "DSA0014978540656",
            issueDate: "October 2024",
            expirationDate: "October 2026",
        },
        {
            name: "Python Data Associate",
            issuer: "DataCamp",
            url: "https://www.datacamp.com/certificate/PDA0015038237495",
            credentialId: "PDA0015038237495",
            issueDate: "September 2024",
            expirationDate: "September 2026",
        },
    ],
};

export const CONTACT_DATA = {
    title: "Contact Me",
    description: "Let's connect and collaborate on exciting data science projects!",
    contacts: [
        {
            name: "WhatsApp",
            value: "+62 851-7448-4303",
            href: "https://wa.me/6285174484303",
            icon: Phone,
            description: "Send me a message on WhatsApp"
        },
        {
            name: "LinkedIn",
            value: "Feryadi Yulius",
            href: "https://www.linkedin.com/in/feryadi-yulius/",
            icon: Linkedin,
            description: "Connect with me on LinkedIn"
        },
        {
            name: "GitHub",
            value: "@strng-fer",
            href: "https://github.com/strng-fer",
            icon: Github,
            description: "Check out my repositories"
        },
        {
            name: "Email",
            value: "feryadiyulius24@gmail.com",
            href: "mailto:feryadiyulius24@gmail.com",
            icon: Mail,
            description: "Drop me an email"
        },
        {
            name: "University Email",
            value: "feryadi.122450087@student.itera.ac.id",
            href: "mailto:feryadi.122450087@student.itera.ac.id",
            icon: Mail,
            description: "Contact me through my university email"
        },
        {
            name: "Location",
            value: "Bandar Lampung, Lampung",
            href: "#",
            icon: MapPin,
            description: "Based in Lampung, Indonesia"
        }
    ]
}
