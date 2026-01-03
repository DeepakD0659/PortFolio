import { Github, Linkedin, Mail, FileText, Smartphone } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Deepak D",
    role: "AI / ML Engineer",
    taglines: [
      "Building Real-Time AI Systems",
      "From Research to Production",
      "Edge Computing Specialist",
    ],
    description:
      "I engineer high-performance AI systems that operate at the edge. My focus is on optimizing deep learning models for real-time inference on resource-constrained devices, bridging the gap between academic research and deployable industrial solutions.",
    email: "deepakd0659@gmail.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/DeepakD0659",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepak-d-384121319/",
        icon: Linkedin,
      },
      {
        name: "Resume",
        url: "/resume/Deepak_AI_ML_Engineer.pdf",
        icon: FileText,
      },
      {
        name: "Email",
        url: "mailto:deepakd0659@gmail.com",
        icon: Mail,
      },
    ],
  },
  skills: [
    {
      category: "Deep Learning & Vision",
      items: ["CNN / ResNet / YOLOv8", "TensorFlow & PyTorch", "OpenCV & Dlib", "Facial Landmarks", "Image Segmentation"],
    },
    {
      category: "Edge AI & IoT",
      items: ["TensorFlow Lite", "ESP32 Embedded AI", "Real-time Inference", "MQTT / GSM / GPS", "Sensor Fusion"],
    },
    {
      category: "Mobile & Full Stack",
      items: ["React Native (Expo)", "Next.js / TypeScript", "Python (FastAPI/Flask)", "Firebase / NoSQL", "Google Cloud Platform"],
    },
    {
      category: "Research & Tools",
      items: ["Model Optimization", "AutoML", "Git & CI/CD", "Technical Writing", "System Architecture"],
    },
  ],
  projects: [
    {
      id: "waste-classification",
      title: "Edge-Optimized Waste Classification",
      problem: "Traditional waste sorting is slow, manual, and prone to human error, creating bottlenecks in recycling facilities.",
      solution: "Designed and trained a custom CNN architecture optimized for low-power edge devices. Implemented aggressive quantization to reduce model size without sacrificing precision.",
      impact: "Achieved 96.78% classification accuracy with <200ms inference time on standard hardware, enabling real-time automated sorting.",
      techStack: ["Python", "TensorFlow", "CNN", "MobileNetV2"],
      links: {
        github: "https://github.com/DeepakD0659/Waste-Classification",
        demo: "#",
      },
      metrics: [
        { label: "Accuracy", value: "96.78", suffix: "%" },
        { label: "Inference", value: "200", suffix: "ms" },
        { label: "Classes", value: "6", suffix: "" }
      ],
      featured: true,
    },
    {
      id: "driver-drowsiness",
      title: "Real-Time Driver Safety System",
      problem: "Driver fatigue contributes to 20% of road accidents. existing solutions are often expensive, intrusive, or cloud-dependent with high latency.",
      solution: "Built a non-intrusive vision system using Dlib's facial landmark detector to calculate Eye Aspect Ratio (EAR) locally. The system operates completely offline for maximum reliability.",
      impact: "Delivers sub-100ms latency alerts. Successfully differentiates between normal blinking and micro-sleep events with 94% precision.",
      techStack: ["OpenCV", "Dlib", "Python", "Real-Time Systems"],
      links: {
        github: "https://github.com/DeepakD0659/Driver-Drowsiness",
        demo: "#",
      },
      metrics: [
        { label: "Latency", value: "100", suffix: "ms" },
        { label: "FPS", value: "30", suffix: "+" },
        { label: "Precision", value: "94", suffix: "%" }
      ],
      featured: true,
    },
    {
      id: "smart-helmet",
      title: "IoT Smart Helmet for Industrial Safety",
      problem: "Industrial accidents often go unreported until it's too late. Remote workers lack immediate emergency response mechanisms.",
      solution: "Engineered an embedded ESP32 system integrating impact sensors, GPS, and GSM modules. Developed a custom algorithm to filter false positives from normal movements.",
      impact: "Reduces emergency response time by sending instant SMS alerts with precise GPS coordinates upon impact detection.",
      techStack: ["Embedded C", "ESP32", "IoT", "GSM/GPS"],
      links: {
        github: "https://github.com/DeepakD0659/Smart-Helmet",
        demo: "#",
      },
      metrics: [
        { label: "Response", value: "2", suffix: "sec" },
        { label: "Uptime", value: "99.9", suffix: "%" },
        { label: "Weight", value: "150", suffix: "g" }
      ],
      featured: true,
    },
    {
      id: "automl-lite",
      title: "AutoML Lite Engine",
      problem: "Selecting the right machine learning algorithm requires deep expertise, creating a barrier to entry for mobile-first data analysis.",
      solution: "Developed a meta-rule engine that analyzes dataset properties (size, dimensionality, sparsity) to automatically recommend the optimal algorithm.",
      impact: "Democratizes ML by allowing non-experts to train models on mobile devices with one click, reducing model selection time by 90%.",
      techStack: ["React Native", "Expo", "Firebase", "Meta-Learning"],
      links: {
        github: "https://github.com/DeepakD0659/AutoML-Lite",
        demo: "#",
      },
      apk: {
        url: "/apk/automl-lite-v1.2.0.apk",
        version: "v1.2.0",
        size: "80 MB"
      },
      metrics: [
        { label: "Time Saved", value: "90", suffix: "%" },
        { label: "Algorithms", value: "12", suffix: "+" },
        { label: "Mobile First", value: "100", suffix: "%" }
      ],
      featured: true,
    },
  ],
  experience: [
    {
      id: "gogox-intern",
      role: "AI / ML Intern",
      company: "GoGoX",
      duration: "Sept 2025 - Present",
      description:
        "Selected for an internship position to contribute to real-world projects and gain hands-on experience in the field of study. Collaborating with the technical team to develop valuable AI/ML-driven contributions to the organization.",
      type: "Internship",
    },
    {
      id: "cognifyz-intern",
      role: "Data Analyst Intern",
      company: "Cognifyz Technologies / Zidio",
      duration: "2024",
      description:
        "Developed a model for Android malware detection using AutoML techniques. Implemented black hole attack detection with AODV approach and machine learning.",
      type: "Internship",
    },
    {
      id: "ncrtet-2025",
      role: "Best Paper Award",
      company: "NCRTET 2025",
      duration: "2025",
      description:
        "Honored for 'CNN Waste Classification' research. Recognized for novel approach in optimizing deep convolutional networks for edge deployment.",
      type: "Award",
    },
  ],
  education: [
    {
      id: "vels",
      school: "VELS University",
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      duration: "2022 - 2026",
      score: "CGPA: 8.09",
    },
  ],
};
