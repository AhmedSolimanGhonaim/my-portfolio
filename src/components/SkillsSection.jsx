import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaTools,
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGlobe,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiNginx,
} from "react-icons/si";
import cvData from "../data/cvData";

const { skills } = cvData;

const SkillsSection = () => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    }),
    []
  );

  const skillIcons = {
    "Frontend Development": FaCode,
    "Backend Development": FaServer,
    "Odoo Development": FaCogs,
    "Database & DevOps": FaDatabase,
    "Tools & Technologies": FaTools,
  };

  const technologyIcons = {
    "React.js": FaReact,
    "JavaScript (ES6+)": SiJavascript,
    Python: FaPython,
    "Django Framework": SiDjango,
    PostgreSQL: SiPostgresql,
    "Docker & Docker Compose": FaDocker,
    "Nginx Configuration": SiNginx,
    "Git Version Control": FaGitAlt,
    "Tailwind CSS": SiTailwindcss,
    "HTML5 & CSS3": FaGlobe,
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black/20 to-black/40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Technologies and tools I work with to create amazing digital
            experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const CategoryIcon = skillIcons[category];
            return (
              <motion.div
                key={category}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  {CategoryIcon && (
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/50 mr-4 group-hover:border-purple-300/70 transition-all duration-300">
                      <CategoryIcon className="text-2xl text-purple-300 group-hover:text-purple-200" />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-white">
                    {category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillList.map((skill, index) => {
                    const TechIcon = technologyIcons[skill];
                    return (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-purple-400/50 hover:bg-gray-800/50 transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {TechIcon && (
                          <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 group-hover:border-purple-300/50 transition-all duration-300">
                            <TechIcon
                              className="text-purple-300 group-hover:text-purple-200"
                              size={16}
                            />
                          </div>
                        )}
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              What I Bring to Your Project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div className="space-y-2">
                <h4 className="text-purple-400 font-semibold">
                  Full Stack Expertise
                </h4>
                <p className="text-sm">
                  Complete web application development from frontend to backend
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-400 font-semibold">
                  Odoo Specialization
                </h4>
                <p className="text-sm">
                  Custom ERP solutions and business process automation
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-pink-400 font-semibold">
                  Modern Technologies
                </h4>
                <p className="text-sm">
                  Latest frameworks and tools for scalable applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
