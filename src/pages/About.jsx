import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import avatar from "../assets/2.jpeg";
import cvData from "../data/cvData";

const { personalInfo, skills, services } = cvData;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const serviceIcons = {
    "Full Stack Development": FaCode,
    "Odoo ERP Development": FaCogs,
    "Backend & API Development": FaServer,
    "DevOps & Deployment": FaDatabase,
  };

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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-red-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
                Me
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Get to know me better and understand my journey in software
              development
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.img
                  src={avatar}
                  alt="Ahmed Soliman"
                  className="w-80 h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-75"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-purple-400 font-semibold mb-6">
                {personalInfo.title}
              </p>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with expertise in
                  JavaScript, Python, Django, and Odoo ERP systems. I specialize
                  in building scalable web applications and implementing
                  comprehensive ERP solutions.
                </p>
                <p>
                  My journey in technology started with a deep curiosity about
                  how things work, which led me to pursue a career in software
                  development. I'm constantly learning and staying up-to-date
                  with the latest technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying outdoor activities.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
                <a
                  href="/src/assets/cv/Ahmed-Soliman%20software%20Engineer.pdf"
                  download
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black/20 to-black/40">
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
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Do
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              I specialize in creating comprehensive digital solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.title];
              return (
                <motion.div
                  key={service.title}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-center">
                    {IconComponent && (
                      <IconComponent className="text-4xl text-purple-400 mx-auto mb-4 group-hover:text-purple-300 transition-colors duration-300" />
                    )}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20">
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
                Expertise
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive overview of my technical skills and capabilities
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

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Me?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaCode className="text-purple-300 text-xl" />
                  </div>
                  <h4 className="text-purple-400 font-semibold">
                    Full Stack Expertise
                  </h4>
                  <p className="text-sm">
                    Complete web application development from frontend to
                    backend with modern technologies
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaCogs className="text-blue-300 text-xl" />
                  </div>
                  <h4 className="text-blue-400 font-semibold">
                    Odoo Specialization
                  </h4>
                  <p className="text-sm">
                    Custom ERP solutions, business process automation, and
                    system customization
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/30 to-red-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaDatabase className="text-pink-300 text-xl" />
                  </div>
                  <h4 className="text-pink-400 font-semibold">
                    DevOps & Deployment
                  </h4>
                  <p className="text-sm">
                    Docker containerization, Nginx configuration, 
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
