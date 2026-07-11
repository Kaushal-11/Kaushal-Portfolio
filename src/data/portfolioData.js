export const profile = {
  name: 'Kaushal Bhanderi',
  fullName: 'Kaushalkumar Arvindbhai Bhanderi',
  role: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Speech AI', 'Computer Vision', 'Generative AI', 'Reinforcement Learning', 'Agentic AI'],
  tagline:
    'I design and ship AI systems end to end — machine learning, deep learning, NLP, computer vision and generative AI — turning research into products that hold up on real data.',
  email: 'kaushalbhanderi34@gmail.com',
  github: 'https://github.com/Kaushal-11',
  linkedin: 'https://linkedin.com/in/kaushal-bhanderi/',
  website: 'https://kaushal-bhanderi.vercel.app/',
  about:
    "I'm a Computer Engineering undergraduate who fell into AI through curiosity about how machines make sense of the world, and never really left. My work has spanned nearly every corner of the field — classical machine learning, deep learning architectures, natural language processing, computer vision, reinforcement learning, and large language models — because I'd rather understand how the whole stack fits together than specialize too early.",
  journey:
    "That range comes from three research internships at IIT Hyderabad, IIIT Hyderabad and a fintech-focused AI consultancy, alongside a growing list of personal and team projects — medical imaging, document intelligence, interview automation, and more. What ties it together is the same instinct every time: pick the problem apart until the underlying signal is obvious, then build something that actually works outside a notebook.",
  passion:
    "I'm genuinely excited by the pace of this field — every few months the ceiling on what's possible moves, and I want to be building at that edge. Long term, that curiosity is pulling me toward a Master's in Germany, to go deeper into the research side of AI while staying close to real-world engineering.",
};

export const languages = [
  { name: 'Gujarati', level: 'Mother tongue', fill: 100 },
  { name: 'Hindi', level: 'Fluent', fill: 95 },
  { name: 'English', level: 'Fluent', fill: 90 },
  { name: 'German', level: 'Learning · B1', fill: 50 },
];

export const experience = [
  {
    role: 'Research Intern',
    org: 'Speech and Information Processing Lab, IIT Hyderabad',
    logo: '/images/experience/iit-hyd.png',
    location: 'Hyderabad, India',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Researching automatic speech recognition for radio-based military speech under noisy, low-resource conditions, and building real-time keyword-spotting systems for critical-command detection.',
      'Creating specialized datasets for radio and low-frequency noisy environments using speech simulators to generate realistic military-style communication data.',
    ],
    tags: ['Automatic Speech Recognition', 'Speech Processing', 'Low-Resource Speech'],
  },
  {
    role: 'Artificial Intelligence Engineer (Intern)',
    org: 'GuruGrace Consultancy Service Pvt. Ltd — Remote',
    logo: '/images/experience/gcs.jpg',
    location: 'Ahmedabad, India',
    period: 'Dec 2025 — Jun 2026',
    points: [
      'Developed mechanistic alignment frameworks for LLMs using circuit-level interventions, activation steering and prompt optimization — reaching 97.4% emotion-expression fidelity on Mistral-3-3B and 99.4% on Qwen3-4B-Instruct.',
      'Designed a multimodal emotional-synthesis framework: dual-stage RoBERTa classifiers (up to 98.8% F1) with a LoRA-adapted SenseVoice ASR model, coupled to CosyVoice2 and F5-TTS for zero-shot, controllable emotional speech across 6+ latent categories.',
    ],
    tags: ['Emotional Intelligence', 'Activation Steering', 'Multimodal AI'],
  },
  {
    role: 'Research Intern',
    org: 'Language Technology Research Center, IIIT Hyderabad',
    logo: '/images/experience/iiith.jpg',
    location: 'Hyderabad, India',
    period: 'May 2025 — Dec 2025',
    points: [
      'Ran experiments on Indic–Indic, Indic–English and English–Indic speech translation using cascade and direct speech-to-speech models, outperforming AI4Bharat baselines on select BhashaAnuvad benchmarks.',
      'Cleaned and standardized large-scale speech datasets and fine-tuned Seamless models for direct Indic–English speech-to-text translation.',
    ],
    tags: ['Speech-To-Speech', 'Speech-To-Text', 'Multilingual Speech'],
  },
  {
    role: 'Data Scientist (Intern)',
    org: 'Cloud Express Solutions Private Limited — Remote',
    logo: '/images/experience/cloudexpress.jpg',
    location: 'Bengaluru, India',
    period: 'Sep 2024 — Oct 2024',
    points: [
      'Filtered and structured 2,000+ user-interaction logs from rrweb to power a reinforcement-learning-based automated website versioning system.',
      'Designed a Flask API to deploy RL-generated website updates every 2 hours, cutting downtime by 30%, in collaboration with cross-functional ML/web teams.',
    ],
    tags: ['Reinforcement Learning', 'Automation', 'Data Engineering'],
  },
];

export const education = [
  {
    degree: "M.Sc in Artificial Intelligence",
    school: 'Trier University, Germany',
    period: '2026 — Onward',
    detail: 'Targeting a research-oriented Master\'s program in Germany to go deeper into AI while learning German (currently B1).',
    status: 'goal',
  },
  {
    degree: 'B.Tech, Computer Engineering',
    school: 'Chandubhai S. Patel Institute of Technology, CHARUSAT',
    period: '2022 — 2026',
    detail: 'CGPA 9.81 · Coursework in DS, DBMS, OS, Algorithms, ML, Deep Learning, Compiler Construction & Cloud Computing.',
    status: 'done',
  },
  {
    degree: 'Higher Secondary (Science)',
    school: 'Ashadeep Ucchatar Madhyamik Shala, Surat',
    period: '2020 — 2022',
    detail: 'Physics, Mathematics, Chemistry · 84.15%',
    status: 'done',
  },
  {
    degree: 'Secondary School Education',
    school: 'Ashadeep Vidhyalay - 1, Surat',
    period: '2018 — 2020',
    detail: '91.67%',
    status: 'done',
  },
];

export const skills = [
  {
    category: 'AI / ML Focus',
    items: [
      'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Large Language Models',
      'GenAI', 'Agentic AI', 'Reinforcement Learning', 'Speech Processing', 'Image Processing',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'PyTorch', 'TensorFlow', 'Transformers', 'Keras', 'Scikit-Learn', 'FastAPI', 'Flask',
      'Streamlit', 'Librosa', 'Soundfile', 'OpenCV', 'Fairseq', 'Gymnasium', 'Pandas', 'NumPy',
    ],
  },
  {
    category: 'Languages & Tools',
    items: [
      'Python', 'C++', 'C', 'Java', 'JavaScript', 'Git / GitHub', 'Docker', 'Linux', 'Anaconda', 'Jupyter',
    ],
  },
];

export const publications = [
  {
    title: 'Attention-Enhanced UNETR for Polyp Segmentation: Improving Accuracy and Robustness in Medical Imaging',
    venue: 'Computer Vision and Robotics (CVR 2025) · Lecture Notes in Networks and Systems, Vol. 1771, pp. 169–180',
    publisher: 'Springer Nature Switzerland',
    authors: 'Kaushal Bhanderi, Ronak R Patel, Arpita Shah',
    year: '2025',
    summary:
      'An improved UNETR-based polyp segmentation model with an enhanced attention mechanism, jointly capturing high-level semantics and fine structural detail. Reached a Dice score of up to 0.87, outperforming traditional CNN and transformer baselines.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-14041-8_14',
  },
];

export const certifications = [
  {
    title: 'Google Data Analytics Specialization',
    issuer: 'Google',
    date: 'Mar 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/MVJE8G7BNGN8',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University',
    date: 'Feb 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/T5HZGZLSL9KZ',
  },
  {
    title: 'ROBO — AI Industrial Training on Robotics & Automation',
    issuer: 'My Equation Education',
    date: 'Feb 2024',
    link: 'https://www.linkedin.com/posts/activity-7196375990481149952-DIBq',
  },
  {
    title: 'ROS2 For Beginners (Foxy, Humble)',
    issuer: 'Udemy',
    date: 'Aug 2023',
    link: 'https://ude.my/UC-5ea3cac6-019b-4d9e-8b40-21d74bef2848',
  },
];

export const hackathons = [
  {
    name: 'FinShield Hackathon',
    position: 'Finalist',
    date: 'Jul 2025 — Aug 2025',
    location: 'Grand Finale · IIT Hyderabad',
    project: 'Behavioural-Biometric Password-less Authentication',
    description:
      'Became a finalist among 661 competing teams and were invited to the onsite Grand Finale at IIT Hyderabad. Built a global model with personalized per-user training that learns behavioural biometrics — touch patterns, typing speed, device handling and gesture dynamics — to distinguish genuine users from impersonators, enabling secure password-less authentication.',
    tech: ['AI Security', 'FinTech', 'Behavioural Biometrics'],
    prize: 'Finalist — Grand Finale',
  },
  {
    name: 'Odoo x Amalthea',
    position: 'Top 7',
    date: 'October 2025',
    location: 'IIT Gandhinagar',
    project: 'Odoo-integrated build',
    description: 'Placed among the Top 7 teams building on the Odoo platform during a fast-paced, on-site hackathon at IIT Gandhinagar.',
    tech: ['Odoo', 'Python', 'JavaScript'],
    prize: 'Top 7',
  },
  {
    name: 'Bengaluru Mobility Challenge',
    position: 'Top 30',
    date: 'September 2025',
    location: 'IISc Bangalore',
    project: 'Urban mobility & traffic analytics',
    description: 'Placed in the Top 30 nationally with an IoT and data-analytics driven approach to urban mobility, hosted at IISc Bangalore.',
    tech: ['IoT', 'Data Analytics', 'Urban Planning'],
    prize: 'Top 30',
  },
  {
    name: 'ISRO Robotics Challenge',
    position: 'Top 100',
    date: 'February 2024',
    location: 'National',
    project: 'Robotics & embedded systems build',
    description: 'Placed in the Top 100 nationally in ISRO\'s robotics challenge, working across embedded systems, control and applied AI.',
    tech: ['Robotics', 'Embedded Systems', 'AI'],
    prize: 'Top 100',
  },
];

export const leadership = [
  {
    role: 'University Level Student Council (ULSC) Member',
    org: 'CHARUSAT University',
    period: 'Jun 2024 — Apr 2025',
    detail: 'Actively organized and managed university-level sports, cultural and technical events, ensuring seamless execution for 10,000+ students — covering planning, coordination and overall event management.',
  },
  {
    role: 'Student Representative, Computer Engineering Department',
    org: 'CHARUSAT',
    period: '2024 — 2025',
    detail: 'Represented 800+ students, facilitating academic coordination, endowment-chair activities and technical events such as hackathons and coding contests — acting as a bridge between students and faculty.',
  },
  {
    role: 'PR Team Lead',
    org: 'Club Gamma, CHARUSAT',
    period: 'Aug 2024 — Mar 2025',
    detail: 'Led marketing, sponsorship acquisition, logistics and financial management for club activities; oversaw strategic promotion and collaborations to grow the club\'s reach and impact.',
  },
  {
    role: 'Volunteer',
    org: 'Odoo x CHARUSAT Hackathon',
    period: '2024',
    detail: 'Coordinated with 300+ participants from various universities, ensuring smooth operations, logistics, accommodation and food arrangements for a successful 24-hour hackathon.',
  },
];
