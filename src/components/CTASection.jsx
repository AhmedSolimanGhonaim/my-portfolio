import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const CTASection = () => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
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

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-red-600/20 backdrop-blur-md border-y border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center space-y-8"
        >
          <motion.div
            className="flex justify-center mb-4"
            variants={itemVariants}
          >
            <Sparkles className="text-purple-400 w-8 h-8" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            variants={itemVariants}
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 animate-pulse">
              Work Together
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Let's turn your ideas into reality. I'm always excited to take on
            new challenges and create amazing digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:ahmed.solimanth57@gmail.com"
              className="group bg-gradient-to-r from-purple-600 via-blue-600 to-red-600 hover:from-purple-700 hover:via-blue-700 hover:to-red-700 text-white px-10 py-5 rounded-full font-semibold flex items-center space-x-3 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 border border-white/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">Get In Touch</span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </motion.a>

            <motion.a
              href="/src/assets/cv/Ahmed-Soliman%20software%20Engineer.pdf"
              download
              className="group border-2 border-purple-400/50 hover:border-purple-300 text-white px-10 py-5 rounded-full font-semibold flex items-center space-x-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} className="text-purple-300" />
              <span className="text-lg">Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
