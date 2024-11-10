import React, { useEffect, useState } from "react";
import { ChevronRight, Github, Linkedin, Code2, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationClasses = {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-1000 ease-out",
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/your-profile",
    },
    {
      icon: Code2,
      href: "https://github.com/your-profile",
      delay: "delay-[1400ms]",
    },
    {
      icon: Mail,
      href: "mailto:your-email@example.com",
      delay: "delay-[1200ms]",
    },
  ];

  return (
    <section
      id="hero"
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black" />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] 
          ${isVisible ? "animate-pulse" : ""}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-purple-500/30 rounded-full
            animate-float-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div
          className={`${animationClasses.transition} ${
            isVisible ? animationClasses.animate : animationClasses.initial
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ganesh Pawar
            <span
              className="block mt-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent
              hover:from-purple-500 hover:to-purple-700 transition-all duration-300"
            >
              Full Stack Developer
            </span>
          </h1>
        </div>

        <p
          className={`text-xl md:text-2xl text-purple-300 ${
            animationClasses.transition
          } 
          ${
            isVisible ? animationClasses.animate : animationClasses.initial
          } delay-500`}
        >
          Specializing in Mobile App Development & Web Technologies
        </p>

        {/* Updated button container with larger buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-6 justify-center ${
            animationClasses.transition
          } 
          ${
            isVisible ? animationClasses.animate : animationClasses.initial
          } delay-700`}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 
              bg-purple-600 rounded-full text-lg font-semibold
              hover:bg-purple-700 transition-all duration-300 hover:scale-105
              min-w-[200px] sm:min-w-[220px]"
          >
            View Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/ganeshpawar09"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 
              border-2 border-purple-600 rounded-full text-lg font-semibold
              hover:bg-purple-600/10 transition-all duration-300 hover:scale-105
              min-w-[200px] sm:min-w-[220px]"
          >
            GitHub Profile
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-12 flex gap-8 justify-center ${
            animationClasses.transition
          } 
          ${
            isVisible ? animationClasses.animate : animationClasses.initial
          } delay-1000`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-purple-400 hover:text-purple-300 transition-all duration-300 
                hover:scale-110 ${social.delay}`}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
