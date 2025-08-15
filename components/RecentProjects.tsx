'use client';

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects, Project } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="py-20 bg-gray-900" id="projects">
      <h1 className="heading text-white text-center">
        A curated selection of{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          my recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            onClick={() => handleCardClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(item)}
            aria-label={`View details for ${item.title}`}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              className="relative group cursor-pointer"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-gradient-to-b from-gray-800 to-black"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background" className="opacity-50" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <motion.div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <img src={icon} alt={`tech-icon-${index}`} className="p-2" />
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center items-center group/link">
                  <p className="lg:text-xl md:text-xs text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text group-hover/link:underline">
                    Check Live Site
                  </p>
                  <FaLocationArrow
                    className="ms-3 transform group-hover/link:translate-x-2 transition-transform"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RecentProjects;

