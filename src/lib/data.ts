import { Github, Linkedin, Phone, Mail, MapPin, Award, FileText, Presentation } from 'lucide-react';

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

export interface SkillItem {
    name: string;
    logo: string;
    secondaryLogo?: string;
    category: string;
    description: string;
}

export const SKILLS_DATA: {
    title: string;
    description: string;
    skills: SkillItem[];
} = {
    title: "Tools I Work With",
    description: "A practical toolkit of software, frameworks, and developer platforms for data science, AI engineering, and research.",
    skills: [
        {
            name: 'Python',
            logo: '/logos/python.svg',
            category: 'Core Language',
            description: "Core programming language for end-to-end data analysis, machine learning modeling, computer vision, and backend development."
        },
        {
            name: 'PyTorch',
            logo: '/logos/pytorch.svg',
            category: 'Deep Learning',
            description: "Leading open-source deep learning framework for constructing and training neural networks, CNNs, and computer vision pipelines."
        },
        {
            name: 'Google Colab',
            logo: '/logos/colab.svg',
            category: 'Cloud Notebook',
            description: "Hosted Jupyter notebook service with free GPU/TPU acceleration for rapid prototyping and compute-intensive model training."
        },
        {
            name: 'Google Antigravity',
            logo: '/logos/antigravity.svg',
            category: 'Agentic AI IDE',
            description: "Google's next-generation agentic AI development platform and IDE for autonomous coding, orchestration, and agent workflows."
        },
        {
            name: 'VS Code',
            logo: '/logos/vscode.svg',
            category: 'Code Editor',
            description: "Primary development environment configured with Python extensions, debugging utilities, and integrated Git workflows."
        },
        {
            name: 'Jupyter',
            logo: '/logos/jupyter.svg',
            category: 'Data Science Notebook',
            description: "Interactive computational notebooks for exploratory data analysis, statistical visualization, and reproducible research."
        },
        {
            name: 'Ultralytics YOLO',
            logo: '/logos/yolo.svg',
            category: 'Computer Vision',
            description: "State-of-the-art real-time object detection and segmentation framework powering precision agriculture and infrastructure monitoring."
        },
        {
            name: 'OpenCV',
            logo: '/logos/opencv.svg',
            category: 'Computer Vision',
            description: "Comprehensive computer vision library for image manipulation, video capture, bounding boxes, and visual preprocessing."
        },
        {
            name: 'Hugging Face',
            logo: '/logos/huggingface.svg',
            category: 'AI & NLP Hub',
            description: "The AI community platform for state-of-the-art Transformer models, embeddings, datasets, and natural language pipelines."
        },
        {
            name: 'Streamlit',
            logo: '/logos/streamlit.svg',
            category: 'App Framework',
            description: "Fast Python web app framework to build and deploy interactive user interfaces for machine learning and data products."
        },
        {
            name: 'Power BI',
            logo: '/logos/powerbi.svg',
            category: 'Business Intelligence',
            description: "Enterprise business intelligence platform for creating interactive executive dashboards, automated reporting, and KPI tracking."
        },
        {
            name: 'Git & GitHub',
            logo: '/logos/git.svg',
            secondaryLogo: '/logos/github.svg',
            category: 'Version Control',
            description: "Distributed version control system and cloud platform for managing codebases, collaboration, and open-source projects."
        },
        {
            name: 'Notion',
            logo: '/logos/notion.svg',
            category: 'Productivity & Wiki',
            description: "Connected workspace for structuring research notes, thesis literature reviews, sprint planning, and knowledge management."
        },
        {
            name: 'Docker',
            logo: '/logos/docker.svg',
            category: 'Containerization',
            description: "Containerization platform ensuring isolated, reproducible environments and smooth deployment of AI/ML services."
        },
        {
            name: 'Kaggle',
            logo: '/logos/kaggle.svg',
            category: 'Data Platform',
            description: "Platform for predictive modeling competitions, benchmark dataset exploration, and community data science notebooks."
        },
        {
            name: 'R',
            logo: '/logos/r.svg',
            category: 'Statistical Computing',
            description: "Statistical programming environment for rigorous hypothesis testing, econometric modeling, and publication graphics."
        },
    ]
};

export type ProjectCategory = 'data-science' | 'data-analytics';

export interface ProjectCategoryInfo {
    id: 'all' | ProjectCategory;
    label: string;
    badge: string;
    tagline: string;
    description: string;
}

export const PROJECT_CATEGORIES: ProjectCategoryInfo[] = [
    {
        id: 'all',
        label: 'All Projects',
        badge: 'All Domains',
        tagline: 'Complete Portfolio',
        description: 'Explore all selected work spanning computer vision, machine learning, NLP, and business intelligence.'
    },
    {
        id: 'data-science',
        label: 'Data Science & AI',
        badge: 'AI / ML / DL / CV / NLP',
        tagline: 'AI / ML / DL · Computer Vision · NLP',
        description: 'Deep neural networks, real-time object detection (YOLO), OCR pipelines, embeddings & multimodal LLM systems.'
    },
    {
        id: 'data-analytics',
        label: 'Data Analytics & BI',
        badge: 'Power BI · Tableau · Excel · Stats',
        tagline: 'Power BI · Tableau · Excel · Operations Research',
        description: 'Executive KPI dashboards, quantitative queuing models, statistical inference & data storytelling.'
    }
];

export interface ProjectItem {
    title: string;
    description: string;
    image: string;
    category: ProjectCategory;
    dataAiHint?: string;
    skills: string[];
    keyFeatures: string[];
    techStack: string[];
    focus: string[];
    year: string;
    collaborators: string[];
    link?: string;
    relatedUrl1?: string;
    videoDemo?: string;
    collaboration?: string;
    collaborationLogo?: string;
}

export const PROJECTS_DATA: {
    title: string;
    description: string;
    projects: ProjectItem[];
} = {
    title: "Selected Work",
    description: "Research and applied projects across computer vision, deep learning, NLP, business intelligence, and operations research.",
    projects: [
        {
            title: "NeuralLens: Platform Edukasi & Simulasi Interaktif Machine Learning & CNN",
            category: "data-science",
            description: "Platform edukasi dan simulasi interaktif berbasis web untuk memvisualisasikan konsep Machine Learning hingga Deep Learning secara 100% client-side di dalam peramban web. Menjembatani jurang antara teori matematika kalkulus/aljabar linier yang abstrak dan pustaka tingkat tinggi (PyTorch/TensorFlow) melalui manipulasi parameter real-time dengan kecepatan 60 FPS tanpa memerlukan instalasi Python maupun server backend.",
            image: "/images/neurallens.png",
            dataAiHint: "neurallens machine learning cnn simulation",
            skills: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "KaTeX", "Framer Motion", "Machine Learning", "Deep Learning", "CNN"],
            keyFeatures: [
                "Sistem Penjelasan Dual-Mode: Mode Intuisi (analogi awam situasi nyata) dan Mode Matematika (formulasi KaTeX formal dengan variabel tertaut visual ke diagram simulasi)",
                "Modul 01 — Optimasi & Gradient Descent: Visualisasi kurva lembah rugi kuadratik 2D L(w) = (w - 3)² + 1, eksplorasi learning rate (0.05 – 1.05) untuk konvergensi vs overshooting, serta kontrol Play/Pause, Step, dan Reset",
                "Modul 02 — Neuron Tunggal (Perceptron): Klasifikasi cuaca biner (Cerah vs Hujan), simulasi penjumlahan terbobot & bias, fungsi aktivasi dinamis (Step, Sigmoid, ReLU), dan plot garis decision boundary real-time",
                "Modul 03 — Jaringan Saraf Tiruan (MLP): Topologi SVG berlapis, visualisasi aliran sinyal forward pass, transmisi propagasi balik (backpropagation), dan pemantauan penurunan nilai galat Mean Squared Error (MSE)",
                "Modul 04 — Penglihatan Komputer & CNN: Kanvas interaktif 8x8 untuk menggambar digit 1–5, operasi kernel konvolusi 3x3 dengan sliding window, matriks Feature Map 6x6, Max Pooling 3x3, dan distribusi probabilitas digit",
                "Arsitektur 100% Client-Side: Seluruh logika aljabar linier, gradien, fungsi aktivasi, dan konvolusi berjalan murni di peramban tanpa latensi server, diekspor statis via GitHub Actions",
                "Performa Tinggi 60 FPS: Pengelolaan state reaktif atomik menggunakan Zustand untuk menjamin manipulasi slider parameter mulus tanpa re-render pohon komponen berlebih",
                "Algoritma Analytical Line Clipping: Penanganan garis pemisah keputusan perceptron pada ruang koordinat [0, 1] × [0, 1] secara analitis dengan penanganan nilai ambang batas (epsilon threshold)"
            ],
            techStack: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "KaTeX", "Framer Motion", "Lucide React", "GitHub Pages"],
            focus: ["Machine Learning", "Deep Learning", "Convolutional Neural Networks (CNN)", "Interactive Simulation", "Client-Side Computing", "AI Education"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"],
            link: "https://strng-fer.github.io/neurallens/",
            relatedUrl1: "https://github.com/strng-fer/neurallens"
        },
        {
            title: "Nutrition Facts AI — Extraction & Reconstruction",
            category: "data-science",
            description: "Aplikasi AI cerdas untuk mengekstrak Informasi Nilai Gizi (Nutrition Facts) dari gambar kemasan produk makanan atau minuman. Sistem ini secara otomatis memproses gambar mentah menjadi data JSON terstruktur yang siap digunakan, berjalan secara lokal menggunakan FastAPI yang melayani antarmuka web interaktif (Web UI) sekaligus REST API.",
            image: "/images/Nutrition_Fact.png",
            dataAiHint: "nutrition facts analyzer",
            skills: ["Python", "FastAPI", "YOLOv8", "Roboflow", "PaddleOCR", "EasyOCR", "Google Gemini Flash", "OpenCV", "Pillow"],
            keyFeatures: [
                "Deteksi Area: Menggunakan model YOLOv8 (via Roboflow) untuk mengidentifikasi dan menandai bounding box tabel nutrisi pada kemasan",
                "Crop & Normalisasi Citra: Menggunakan OpenCV dan Pillow untuk memotong area tabel secara otomatis dan melakukan preprocessing (grayscale, upscale, threshold) agar mudah dibaca",
                "Pembacaan Teks (OCR): Menggunakan PaddleOCR sebagai mesin utama dan EasyOCR sebagai fallback untuk mengekstrak karakter teks dari gambar",
                "Rekonstruksi Data (LLM): Menggunakan Google Gemini Flash untuk memperbaiki typo hasil OCR dan menyusunnya ulang ke dalam format JSON yang terstandarisasi",
                "Web UI Interaktif & REST API: Berjalan secara lokal menggunakan FastAPI yang menyediakan antarmuka web ramah pengguna sekaligus REST API untuk integrasi sistem",
                "Kode Sumber & Instalasi: Dokumentasi lengkap dan repositori terbuka untuk memudahkan pengujian dan deployment mandiri"
            ],
            techStack: ["Python", "FastAPI", "YOLOv8", "Roboflow", "PaddleOCR", "EasyOCR", "Google Gemini Flash", "OpenCV", "Pillow"],
            focus: ["Computer Vision", "Object Detection", "Optical Character Recognition (OCR)", "LLM Data Reconstruction", "Multimodal AI", "Information Extraction"],
            year: "Current project",
            collaborators: ["Feryadi Yulius"],
            link: "https://github.com/strng-fer/nutrition-facts-analyzer",
            videoDemo: "https://youtu.be/s_bRi3-MFhY"
        },
        {
            title: "Pineapple Detection & Monitoring System",
            category: "data-science",
            description: "A computer vision project for detecting and monitoring pineapple plants and fruits from images and videos. The system explores object detection, confidence visualization, and a pipeline for future tracking and counting in precision agriculture.",
            image: "/images/pineapple.png",
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
            collaborators: ["Feryadi Yulius"],
            link: "https://github.com/strng-fer/pineappleDetection"
        },
        {
            title: "Evaluation Faster R-CNN & YOLO for Belitung Coastal Waters",
            category: "data-science",
            description: "Bachelor thesis conducted in research collaboration with Badan Riset dan Inovasi Nasional (BRIN), evaluating Faster R-CNN and YOLO for object detection on coastal water imagery. The work compares accuracy and inference speed through preprocessing, augmentation, fine-tuning, and evaluation using mAP, precision, recall, and F1-score.",
            image: "/images/frcnn.png",
            dataAiHint: "coastal object detection",
            skills: ["Python", "Faster R-CNN", "YOLO", "PyTorch", "Model Evaluation"],
            keyFeatures: [
                "Research collaboration with Badan Riset dan Inovasi Nasional (BRIN)",
                "Comparative evaluation of Faster R-CNN and YOLO for coastal water imagery",
                "Preprocessing, augmentation, and model fine-tuning",
                "Accuracy and inference-speed comparison",
                "Evaluation with mAP, precision, recall, and F1-score",
            ],
            techStack: ["Python", "PyTorch", "Faster R-CNN", "YOLO", "Data Augmentation"],
            focus: ["Object Detection", "Deep Learning", "Model Evaluation", "Coastal Monitoring", "BRIN Research Collaboration"],
            year: "Bachelor thesis",
            collaborators: ["Feryadi Yulius", "Ahmad Luky Ramdani, S.Kom, M.Kom", "Prof. Dr. Esa Prakasa, S.T, M.T"],
            collaboration: "Badan Riset dan Inovasi Nasional (BRIN)",
            collaborationLogo: "/images/logo-brin.png",
            link: "https://repository.itera.ac.id/depan/submission/SB2610070013"
        },
        {
            title: "Pothole Detection — Road Infrastructure Monitoring",
            category: "data-science",
            description: "A YOLOv8 computer vision model for real-time pothole detection and spatial localization to support road maintenance planning. The project achieved Precision 0.831 and mAP@50 0.774.",
            image: "/images/pothole.png",
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
            collaborators: ["Feryadi Yulius"],
            link: "https://github.com/strng-fer/MlopsAgakPusing"
        },
        {
            title: "Phytoplankton Classification from Belitung Coastal Waters",
            category: "data-science",
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
            collaborators: ["Feryadi Yulius", "Raid Muhammad Naufal", "Ahmad Luky Ramdani, S.Kom, M.Kom", "Prof. Dr. Esa Prakasa, S.T, M.T"],
            collaboration: "Badan Riset dan Inovasi Nasional (BRIN)",
            collaborationLogo: "/images/logo-brin.png",
            videoDemo: "https://www.brin.go.id/en/news/130492/supporting-marine-ecosystem-conservation-brin-develops-planktoscan-to-identify-phytoplankton"
        },
        {
            title: "Queue System Analysis for Car Refueling Lanes",
            category: "data-analytics",
            description: "A quantitative study of vehicle queues at gas stations near Institut Teknologi Sumatera using M/M/1 and M/M/s queuing theory. The analysis identified peak congestion at ρ = 1.14 and recommended adding one server during rush hours.",
            image: "/images/queueanalisis.png",
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
            collaborators: ["Feryadi Yulius", "Elok Fiola"]
        },
        {
            title: "Outfit Recommendation Chatbot using NVIDIA",
            category: "data-science",
            description: "A personalized outfit recommendation system using Retrieval-Augmented Generation with NVIDIA Llama-3.1 Nemotron Nano 8B. It uses FAISS similarity search and prompt engineering to create context-aware stylist responses.",
            image: "/images/queuesystem.png",
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
            collaborators: ["Feryadi Yulius"],
            link: "https://github.com/strng-fer/Outfit-Receomendations"
        },
        {
            title: "Unsupervised LinkedIn Company Profile Embedding",
            category: "data-science",
            description: "An LSTM autoencoder that generates text embeddings from company profiles for similarity search. The work evaluates semantic similarity through embedding analysis and PCA/t-SNE visualization.",
            image: "/images/outfitrecomendation.png",
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
            collaborators: ["Feryadi Yulius", "Mizran Yusuf Rabanni", "Diana"],
            link: "https://github.com/strng-fer/TubesDeployStreamlit",
            videoDemo: "https://youtu.be/vkkKK3qM0o0"
        },
        {
            title: "Infographic: Exploring Rice Production in Indonesia",
            category: "data-analytics",
            description: "An infographic titled “From Fields to Distribution” that uses harvest area, average grain prices, and total production data to highlight geographical inequalities in Indonesian food security. Submitted to the 2025 Gammafest IPB Statistical Visualization Competition.",
            image: "/images/riceproduction.png",
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
            collaborators: ["Feryadi Yulius", "Hermawan Manurung", "Nurul Alfajar Gumel"],
            link: "https://www.linkedin.com/in/feryadi-yulius/overlay/Project/1310830274/treasury/?profileId=ACoAADUehr0BkLX40ZplO3rssLqv8GMFPvs6JSs"
        },
        {
            title: "Toy Store KPI Analysis with Power BI Dashboard",
            category: "data-analytics",
            description: "A business intelligence dashboard for Maven Toys that tracks total orders, revenue, profit, product-category trends, and revenue growth for interactive management analysis.",
            image: "/images/toy.png",
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
            category: "data-science",
            description: "An AI-powered platform that identifies 31 varieties of Indonesian spices through image analysis. The Streamlit app reaches up to 83% prediction accuracy and supports cultural and culinary education.",
            image: "/images/spices.png",
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
            category: "data-science",
            description: "An interactive website that detects batik types from uploaded images. It applies image processing for pattern recognition and supports digital cultural preservation and public education.",
            image: "/images/batik.png",
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
        {
            title: "Gowalla Dataset Exploratory",
            category: "data-analytics",
            description: "The Gowalla dataset provides us with the opportunity to explore the \"Social Map and Travel Ecosystem of Gowalla Users\" prior to June 1, 2011. This dataset offers a comprehensive overview of user behavior, location preferences, and social patterns on the Gowalla platform. By analyzing this data, we can map the geographic distribution of check-ins, identify peak user activity times, analyze friendship networks, and study user profiles. Interactive maps will display popular locations, such as restaurants or entertainment venues, across different regions. Heatmaps and histograms will help us identify busy check-in times. Social network analysis will reveal communities of users who frequently connect as friends and visit the same locations, highlighting the influence of social ties on check-in behavior. Finally, user profile visualizations will help identify the most active users and their favorite frequently visited locations.",
            image: "/images/gowalla.png",
            dataAiHint: "gowalla dataset exploratory",
            skills: ["Exploratory Data Analysis", "Geospatial Analysis", "Social Network Analysis", "Data Visualization", "Python"],
            keyFeatures: [
                "Geographic distribution mapping of check-ins and location preferences across regions",
                "Temporal activity analysis using heatmaps and histograms to identify peak check-in times",
                "Social network analysis (SNA) uncovering friendship networks and community clusters",
                "Interactive geospatial maps displaying popular venues, restaurants, and entertainment spots",
                "User profile visualizations identifying the most active users and favorite destinations",
            ],
            techStack: ["Python", "Geospatial Analysis", "Social Network Analysis", "Data Visualization", "Pandas", "Folium", "NetworkX"],
            focus: ["Exploratory Data Analysis", "Geospatial Analytics", "Social Network Analysis", "User Mobility & Behavior"],
            year: "2024",
            collaborators: ["Feryadi Yulius"],
            link: "https://drive.google.com/drive/folders/1vhED9LFEvF52u0-hflfeULJkM6nDu5xc"
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
            logo: "/images/timedoorlogo.jpg",
            description: "Teach programming logic and coding for students aged 5–18 through age-appropriate lessons, hands-on activities, and guided practice across AI, coding, IoT, and robotics."
        },
        {
            date: "June 2026 – present",
            title: "Part-time Teacher",
            company: "Ruangguru · Bandar Lampung",
            logo: "/images/ruangguru.jpg",
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
            title: "Peramalan Harga Reksa Dana di Indonesia dengan Pendekatan Linear dan Hibrida",
            journal: "Journal SESSION: Politeknik Negeri Banyuwangi,",
            year: 2026,
            link: "https://jurnal.poliwangi.ac.id/index.php/session/article/view/434",
            icon: FileText,
            authors: ["Gymnastiar Al Khoarizmy", "Feryadi Yulius", "Elok Fiola"],
            doi: "https://doi.org/10.57203/session.v5i1.2026.28-36",
            abstract: "Pasca pandemi COVID-19, pasar modal Indonesia menunjukkan dinamika yang kompleks, mendorong peningkatan minat investasi pada instrumen seperti reksa dana. Prediksi harga untuk aset semacam ini secara historis sering mengandalkan model-model yang kompleks, namun efektivitasnya pada data dengan karakteristik autokorelasi yang sangat tinggi masih menjadi pertanyaan. Penelitian ini bertujuan untuk mengevaluasi pendekatan pemodelan yang paling efisien dalam konteks tersebut dengan mengintegrasikan serangkaian faktor fundamental dan teknikal. Menggunakan teknik regresi linear regularisasi (ElasticNet) yang diperkuat dengan fitur lag danPrincipal Component Analysis (PCA), serta model hibrida canggih yang mengombinasikan ElasticNet dengan Long Short-Term Memory (LSTM) untuk memodelkan residual, studi ini mengevaluasi efektivitas dari kedua pendekatan. Hasil menunjukkan bahwa model linear tunggal mampu mencapai akurasi prediksi yang sangat tinggi (R2 > 0.96), yang didominasi oleh kuatnya sinyal autokorelasi. Lebih lanjut, penambahan model LSTM untuk menangkap pola non-linear pada residual terbukti tidak memberikan peningkatan kinerja yang signifikan secara statistik, sebuah temuan yang divalidasi oleh Uji Diebold-Mariano. Dengan demikian, studi ini menyoroti pentingnya pemilihan model yang sesuai dengan karakteristik data, di mana untuk peramalan time-series dengan persistensi tinggi, pendekatan linear yang lebih sederhana dan dapat diinterpretasikan terbukti lebih efisien dan praktis. "
        },
        {
            title: "PlanktoScan – Computer Program (BRIN)",
            journal: "Intellectual Property",
            year: 2025,
            link: "https://brin.go.id/news/130492/dukung-pelestarian-ekosistem-laut-brin-kembangkan-planktoscan-untuk-kenali-fitoplankton",
            icon: FileText,
            authors: ["Feryadi Yulius"],
            doi: "",
            abstract: "A computer program and Android prototype for plankton identification, developed during research activities with BRIN."
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
            name: "AI Engineer for Data Scientists Associate certificate",
            issuer: "DataCamp",
            url: "https://www.datacamp.com/certificate/AEDS0018618770217",
            credentialId: "AEDS0018618770217",
            issueDate: "October 2026",
            expirationDate: "October 2028",
        },

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
