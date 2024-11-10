import React from "react";
import {
  Smartphone,
  Globe,
  Database,
  Code2,
  GitBranch,
  Server,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Mobile Development",
      description:
        "Expertise in Flutter for cross-platform mobile app development",
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      technologies: ["Flutter", "Dart"],
    },
    {
      title: "Frontend Development",
      description:
        "Building responsive web applications with modern JavaScript",
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      technologies: ["JavaScript", "React"],
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs",
      icon: <Server className="w-8 h-8 text-purple-400" />,
      technologies: ["Node.js", "Express.js", "Spring Boot"],
    },
    {
      title: "Programming Languages",
      description: "Strong foundation in multiple programming languages",
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      technologies: ["Java", "C++", "Dart", "JavaScript"],
    },
    {
      title: "Database Management",
      description: "Experience with both SQL and NoSQL databases",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      technologies: ["MongoDB", "MySQL"],
    },
    {
      title: "Development Tools",
      description: "Proficient with modern development tools and practices",
      icon: <GitBranch className="w-8 h-8 text-purple-400" />,
      technologies: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-black/50 backdrop-blur-lg rounded-xl hover:bg-purple-900/20 transition-colors group"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-900/30 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
