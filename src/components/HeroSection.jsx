import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import avatar from "../assets/co.jpg";
// import neon from "../assets/neon2-removebg-preview.png";
import Button from "./Button";
import cvData from "../data/cvData";

const { personalInfo } = cvData;

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ledRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Memoize animation variants to prevent recreation
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

  // LED effect for the title and elements
  useEffect(() => {
    const led = ledRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (led && title && subtitle) {
      const interval = setInterval(() => {
        const randomHue = Math.floor(Math.random() * 30) + 270; // Purple range
        const randomBrightness = Math.floor(Math.random() * 20) + 80; // 80-100%
        const randomBlur = Math.floor(Math.random() * 10) + 5; // 5-15px
        const randomOpacity = 0.4 + Math.random() * 0.3; // 0.4-0.7

        if (led) {
          led.style.filter = `hue-rotate(${
            Math.random() * 20 - 10
          }deg) brightness(${randomBrightness}%) blur(${randomBlur}px)`;
          led.style.opacity = randomOpacity;
        }

        if (title) {
          title.style.textShadow = `0 0 10px hsla(${randomHue}, 100%, 70%, 0.8), 0 0 20px hsla(${randomHue}, 100%, 50%, 0.6)`;
        }

        if (subtitle) {
          subtitle.style.textShadow = `0 0 5px hsla(${randomHue}, 100%, 70%, 0.6)`;
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={ledRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-600 via-pink-500 to-violet-600 rounded-full opacity-20 blur-3xl -z-10"
          style={{
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          className="home"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="avatar-container"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variants={itemVariants}
          >
            <motion.img
              src={avatar}
              className="avatar border-4 border-purple-500/30"
              alt="Ahmed Soliman"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="glow" />
          </motion.div>

          <motion.div className="home-r" variants={containerVariants}>
            <motion.h1
              ref={titleRef}
              className="home-title text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
              variants={itemVariants}
              style={{
                lineHeight: "1.2",
                letterSpacing: "-0.05em",
              }}
            >
              Hello! I'm <span className="text-white">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
              variants={itemVariants}
              style={{
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <Link to="/projects">
                <Button className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/10">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  to="/contact"
                  className="cta-button primary px-8 py-4 text-lg font-semibold rounded-full text-white shadow-lg transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <span>Get In Touch</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md group-hover:blur-xl"></div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <a
                  href="/src/assets/cv/Ahmed-Soliman%20software%20Engineer.pdf"
                  download
                  className="cta-button secondary px-8 py-4 text-lg font-semibold rounded-full text-white shadow-lg transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md group-hover:blur-xl"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
