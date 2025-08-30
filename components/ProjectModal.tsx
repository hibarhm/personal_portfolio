
"use client";

import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

type Project = {
  img: string;
  title: string;
  detailedDescription: string;
  year: string | number;
  features: string[];
  myRole?: string[];
  iconLists: string[];
  link: string;
};

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-background/70 backdrop-blur-sm z-50 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="bg-card rounded-lg max-w-4xl w-full max-h-[70vh] overflow-y-auto p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-foreground">
            <FaTimes />
          </button>
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <p className="text-secondary mt-2">{project.detailedDescription}</p>
          <p className="text-secondary mt-2">Year: {project.year}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-foreground">Features:</h3>
            <ul className="list-disc list-inside text-secondary">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          {project.myRole && project.myRole.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-foreground">My Role:</h3>
              <ul className="list-disc list-inside text-secondary">
                {project.myRole.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 flex gap-2">
            {project.iconLists.map((icon, i) => (
              <img key={i} src={icon} alt="tech icon" className="w-8 h-8" />
            ))}
          </div>
          <a
            href={project.link}
            className="mt-4 inline-block text-primary hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </motion.div>
    </>
  );
}