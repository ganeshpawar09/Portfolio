import React, { useEffect, useState } from "react";
import { FileDown, Mail, Code, Code2, Award, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const animationClasses = {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-1000 ease-out",
  };

  const achievements = [
    {
      icon: Code,
      title: "Competitive Programming",
      description: "LeetCode rating: 1531 | 350+ problems solved",
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      description: "Won the Rockwell Automation Hackathon",
    },
    {
      icon: Users,
      title: "Programming Lead",
      description: "Managed coding events at CodeChef Community",
    },
    {
      icon: Code2,
      title: "Mobile App Launch",
      description: "Launched Udhari app on Play Store with 4.7 rating",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center ${
            animationClasses.transition
          } ${isVisible ? animationClasses.animate : animationClasses.initial}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p
              className={`${animationClasses.transition} ${
                isVisible ? animationClasses.animate : animationClasses.initial
              } delay-200`}
            >
              I'm a passionate Software Developer pursuing my Bachelor's in
              Engineering at Sinhgad College of Engineering, Pune. With
              expertise in both mobile and web development, I specialize in
              creating intuitive and scalable applications.
            </p>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                animationClasses.transition
              } ${
                isVisible ? animationClasses.animate : animationClasses.initial
              } delay-400`}
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-400">
                      {achievement.title}
                    </h3>
                  </div>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-wrap justify-center gap-4 mt-8 ${
                animationClasses.transition
              } ${
                isVisible ? animationClasses.animate : animationClasses.initial
              } delay-600`}
            >
              <a
                href="#"
                className="group flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                <FileDown className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
