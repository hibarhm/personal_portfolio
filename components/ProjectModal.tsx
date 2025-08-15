'use client';

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 min-h-screen"
            onClick={onClose}
            aria-label="Close modal"
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 sm:p-8 lg:p-10
                max-w-[90vw] sm:max-w-3xl lg:max-w-5xl w-full max-h-[90vh] overflow-y-auto
                shadow-xl shadow-blue-500/30 border border-white/[0.1]"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-blue-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1
                  transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes size={28} />
              </button>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full max-w-full h-48 sm:h-64 lg:h-96 object-contain rounded-xl"
                    style={{ maxHeight: '70vh' }}
                  />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 text-white">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-300">
                    <span className="font-semibold">Year:</span> {project.year}
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-semibold">Description</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-300">
                      {project.detailedDescription}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-semibold">Key Features</h3>
                    <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc list-inside">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-semibold">My Role</h3>
                    <ul className="mt-2 text-sm sm:text-base text-gray-300 list-disc list-inside">
                      {project.myRole.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-semibold">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10
                            flex justify-center items-center"
                        >
                          <img src={icon} alt={`tech-icon-${index}`} className="p-1.5 sm:p-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500
                        text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50
                        transition-all duration-300 text-sm sm:text-base"
                    >
                      Visit Live Site
                      <FaLocationArrow className="ml-2" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-500
                          text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:shadow-lg hover:shadow-gray-500/50
                          transition-all duration-300 text-sm sm:text-base"
                      >
                        View on GitHub
                        <FaGithub className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;