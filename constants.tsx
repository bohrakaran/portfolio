
import { Project, SkillCategory, Experience, Certification, Education } from './types';

export const RESUME_DATA = {
  name: "Karan Singh Bohra",
  role: "Full Stack Web Developer",
  contact: {
    email: "karanbohra1112@gmail.com",
    phone: "+91-8273645640",
    location: "Uttarakhand, India",
    linkedin: "https://www.linkedin.com/in/karan-singh-bohra",
    github: "https://github.com/bohrakaran",
  },
  summary: "Computer Science professional with a strong foundation in programming, web development, and analytics. Skilled in building projects end-to-end and eager to apply technical expertise to solve real-world challenges.",
  education: [
    {
      degree: "B. Tech in Computer Science Engineering",
      institution: "Uttarakhand Technical University",
      period: "2022-2026",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2021-2022",
    },
    {
      degree: "Secondary (10th)",
      institution: "Mallikarjun Public School, Lohaghat, Champawat, Uttarakhand",
      period: "2019-2020",
    }
  ] as Education[],
  skills: [
    { category: "Languages", items: ["Python", "Java", "C/C++", "JavaScript", "SQL"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux", "Figma"] },
    { category: "Concepts", items: ["DSA", "OOPS", "DBMS", "OS", "CN", "Machine Learning", "LLM Prompting"] },
  ] as SkillCategory[],
  projects: [
    {
      title: "Timely – Project Management System",
      description: "A full-stack project management system for tracking tasks.",
      skills: ["React", "Node.js", "MongoDB", "JWT"],
      demoUrl: "https://timely-chi-sand.vercel.app/",
      sourceUrl: "https://github.com/bohrakaran/Project-Management",
      points: [
        "Built a full-stack project management system using React, Node.js, and MongoDB for tracking tasks.",
        "Implemented secure authentication and role-based access using JWT.",
        "Designed REST APIs for project and task management and integrated them with a responsive React frontend."
      ],
      images: ['dashboard.png', 'projects.png', 'setting.png', 'task.png', 'team.png']
    },
    {
      title: "ChatGPT Token Analyzer",
      description: "A tool to track and analyse ChatGPT token usage and estimate costs.",
      skills: ["Python", "FastAPI", "tiktoken", "React.js"],
      demoUrl: "https://token-analyzer-one.vercel.app/",
      sourceUrl: "https://github.com/bohrakaran/token-analyzer",
      points: [
        "Built a FastAPI-based tool to track and analyse ChatGPT token usage and estimate API costs.",
        "Implemented python tokenization logic for prompts and responses plus scalable dashboard integration."
      ],
      images: ['one.png', 'two.png', 'three.png', 'four.png', 'five.png']
    },
    
      
  ] as Project[],
  internships: [
    {
      role: "Python Programming Intern",
      company: "CodSoft",
      duration: "1 month",
      points: [
        "Developed Python scripts using core concepts like OOP, data structures, and file handling.",
        "Worked on real-world problem statements and improved debugging and logical thinking skills.",
        "Practiced clean code principles, refactoring, and performance optimization."
      ]
    }
  ] as Experience[],
  certifications: [
    { title: "Python Certification", issuer: "Freecodecamp", year: "2026", certificateUrl: "FreeCodeCamp.pdf" },
    { title: "Machine Learning for Data Science Projects", issuer: "IBM SkillsBuild", year: "2026" },
    { title: "Python Programming Internship", issuer: "CodSoft", year: "2025", certificateUrl: "CodSoft.pdf" }
  ] as Certification[],
  hobbies: ["Playing Football", "Coding"]
};
