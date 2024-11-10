import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Github,
  Loader2,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentImageIndex]);

  // Auto-rotate images
  useEffect(() => {
    if (!isPaused && project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isPaused, project.images.length]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (project.type === "mobile") {
    return (
      <div
        className="group flex flex-col md:flex-row items-center gap-8 my-12 p-6 rounded-2xl
          bg-gradient-to-br from-purple-900/10 "
      >
        {/* Mobile Device Frame */}
        <div
          className="relative w-[250px] h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 
            rounded-[3rem] p-4 shadow-2xl transform transition-transform duration-500
            group-hover:scale-105"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Notch */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />

          {/* Volume Buttons */}
          <div className="absolute left-0 top-28 w-1 h-12 bg-gray-700 rounded-r-lg" />
          <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r-lg" />

          {/* Power Button */}
          <div className="absolute right-0 top-32 w-1 h-12 bg-gray-700 rounded-l-lg" />

          {/* Screen Content */}
          <div className="h-full w-full overflow-hidden rounded-2xl bg-black relative">
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
              </div>
            )}

            {/* Image Carousel */}
            <div className="relative h-full">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-300
                  ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                onLoad={handleImageLoad}
              />

              {/* Navigation Controls - Always visible but subtle */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-transparent
    rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-purple-500" />{" "}
                    {/* Set arrow color to purple */}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-transparent
    rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-500" />{" "}
                    {/* Set arrow color to purple */}
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 
        ${
          index === currentImageIndex
            ? "bg-purple-500 w-4" // Active indicator in purple
            : "bg-purple-300/50 hover:bg-purple-400/75" // Inactive indicator in lighter purple
        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h4
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 
              bg-clip-text text-transparent"
            >
              {project.title}
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-purple-900/30 rounded-full text-sm font-medium
                  hover:bg-purple-900/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-6 pt-2">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300
                  transition-colors duration-300 group/link"
              >
                <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                <span
                  className="border-b border-purple-400/0 group-hover/link:border-purple-400
                  transition-colors duration-300"
                >
                  View Code
                </span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300
                  transition-colors duration-300 group/link"
              >
                <span
                  className="border-b border-purple-400/0 group-hover/link:border-purple-400
                  transition-colors duration-300"
                >
                  Live Demo
                </span>
                <ExternalLink
                  className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1
                  transition-transform duration-300"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProjectCard;
