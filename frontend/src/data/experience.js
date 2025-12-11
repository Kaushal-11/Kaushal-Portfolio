// src/data/experiencesData.js

export const experiencesData = [
  {
    id: 1,
    company: "IIIT Hyderabad - LTRC Lab",
    logo: "/images/experience/iiith.jpg",
    position: "Research Intern - NLP & Machine Translation",
    duration: "May 2025 – Present",
    location: "Hyderabad, India (On-Site)",
    description: "Working on multilingual NLP systems focusing on machine translation and language models.",
    responsibilities: [
      "Researching on low-resource machine translation methods using transformer-based architectures",
      "Implementing language detection and multilingual tokenization for Indian languages",
      "Exploring alignment techniques and BLEU score-based evaluation",
      "Contributing to an open-source research project under the Language Technologies Research Center (LTRC)"
    ],
    technologies: ["Python", "Hugging Face Transformers", "LangChain", "BLEU", "NLP"]
  },
  {
    id: 2,
    company: "Cloud Express Solutions",
    logo: "images/experience/cloudexpress.jpg",
    position: "Data Science Intern",
    duration: "Sep 2024 – Dec 2024",
    location: "Remote",
    description: "Worked on data-driven user behavior analysis and RL-based dynamic styling system.",
    responsibilities: [
      "Filtered and processed 2000+ rrweb user sessions for structured RL inputs",
      "Developed a Flask API to serve website variants based on RL model outputs",
      "Automated version updates every 2 hours to reduce downtime and improve UX",
      "Integrated styling optimization pipeline into production frontend"
    ],
    technologies: ["Python", "Stable-Baselines3", "Gymnasium", "Flask", "Docker", "RRWeb"]
  },
  {
    id: 3,
    company: "Cognifyz Technologies",
    logo: "/images/experience/cognifyz.jpg",
    position: "Machine Learning Intern",
    duration: "Apr 2024 – May 2024",
    location: "Remote",
    description: "Built ML models for restaurant rating prediction and recommendation systems.",
    responsibilities: [
      "Achieved 92% accuracy in restaurant rating prediction using Scikit-learn",
      "Implemented collaborative and content-based filtering for recommendations",
      "Conducted geospatial analysis with Mapbox and Geopy for location-aware services",
      "Developed cuisine classification model using TensorFlow with 88% accuracy"
    ],
    technologies: ["Scikit-learn", "TensorFlow", "Keras", "Mapbox", "Geopy"]
  }
];

export default experiencesData;
