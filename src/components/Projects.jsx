import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      type: "mobile",
      title: "Chess.IO",
      description:
        "An interactive chess platform featuring real-time gameplay, intelligent matchmaking, WebRTC-based video calling, and multilingual chat translation using the Gemini API. The app provides a seamless gaming experience with secure authentication and media management.",
      images: [
        "/images/chess_io_1.png",
        "/images/chess_io_2.png",
        "/images/chess_io_3.png",
      ],
      tech: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "WebRTC",
        "Gemini API",
      ],
      github: "https://github.com/ganeshpawar09/chess.io",
      link: "#",
    },
    {
      type: "mobile",
      title: "FindMyNest",
      description:
        "A comprehensive rental property platform with advanced search and filtering options. Features include location-based search with Map API integration, real-time chat functionality, and secure user authentication with media management capabilities.",
      images: [
        "/images/Flatmates/1.png",
        "/images/Flatmates/2.png",
        "/images/Flatmates/3.png",
        "/images/Flatmates/4.png",
        "/images/Flatmates/5.png",
        "/images/Flatmates/6.png",
        "/images/Flatmates/7.png",
        "/images/Flatmates/8.png",
      ],
      tech: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Map API",
      ],
      github: "https://github.com/ganeshpawar09/findmynest",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
