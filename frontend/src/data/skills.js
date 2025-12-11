export const skillsData = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    skills: [
      { name: "TensorFlow", level: 85, icon: "tensorflow", yearsOfExperience: 2, description: "Deep learning, neural networks" },
      { name: "Keras", level: 85, icon: "keras", yearsOfExperience: 2, description: "High-level API for DL models" },
      { name: "Scikit-Learn", level: 85, icon: "scikit", yearsOfExperience: 2, description: "Classification, regression, clustering" },
      { name: "Pandas", level: 80, icon: "pandas", yearsOfExperience: 2, description: "Data manipulation, cleaning, EDA" },
      { name: "Numpy", level: 80, icon: "numpy", yearsOfExperience: 2, description: "Matrix operations, numerical computing" },
      { name: "OpenCV", level: 80, icon: "opencv", yearsOfExperience: 2, description: "Image processing, computer vision" },
      { name: "MediaPipe", level: 75, icon: "mediapipe", yearsOfExperience: 1, description: "Pose and face landmark detection, gesture recognition" },
      { name: "Reinforcement Learning", level: 80, icon: "ai", yearsOfExperience: 1, description: "Stable-Baselines3, Gymnasium" },
      { name: "LLMs / NLP", level: 75, icon: "brain", yearsOfExperience: 2, description: "Prompting, parsing, semantic analysis using LLMs & NLP" },
      { name: "LangChain", level: 75, icon: "langchain", yearsOfExperience: 1, description: "Building intelligent agents and LLM workflows" },
      { name: "Qdrant", level: 70, icon: "qdrant", yearsOfExperience: 1, description: "Vector database for semantic search and embeddings" },
      { name: "Flask", level: 80, icon: "flask", yearsOfExperience: 1, description: "API development, integration with ML models" },
      { name: "FastAPI", level: 80, icon: "fastapi", yearsOfExperience: 1, description: "API development, integration with ML models" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", level: 80, icon: "docker", yearsOfExperience: 2, description: "Containerization, ML deployment environments" },
      { name: "AWS", level: 75, icon: "aws", yearsOfExperience: 2, description: "EC2, S3, Lambda for ML and backend deployment" },
      { name: "GitHub", level: 90, icon: "github", yearsOfExperience: 3, description: "Version control, collaboration, CI/CD" },
      { name: "ROS / ROS2", level: 70, icon: "robot", yearsOfExperience: 1, description: "Robot simulation and autonomous navigation" },
      { name: "Mapbox & Geopy", level: 70, icon: "map", yearsOfExperience: 1, description: "Geospatial analysis, location-aware recommendations" }
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "C", level: 70, icon: "c", yearsOfExperience: 2, description: "Procedural programming, pointers" },
      { name: "C++", level: 75, icon: "cpp", yearsOfExperience: 2, description: "OOP, STL, performance optimization" },
      { name: "Java", level: 70, icon: "java", yearsOfExperience: 2, description: "Object-oriented design, backend dev" },
      { name: "Python", level: 90, icon: "python", yearsOfExperience: 3, description: "ML models, automation, scripting" }
    ]
  }
];

export const allSkills = skillsData.reduce((acc, category) => [...acc, ...category.skills], []);

export default skillsData;
