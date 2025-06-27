import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AhmedSolimanGhonaim",
      color:
        "hover:text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ahmedsolimanghonaim/",
      color:
        "hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-blue-800/40",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ahmed.solimanth57@gmail.com",
      color:
        "hover:text-red-300 hover:bg-gradient-to-r hover:from-red-900/40 hover:to-red-800/40",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "ahmed.solimanth57@gmail.com",
      url: "mailto:ahmed.solimanth57@gmail.com",
    },
    {
      icon: Phone,
      text: "+20 1010351108 (WhatsApp & Phone)",
      url: "https://wa.me/201010351108",
    },
  
    {
      icon: Github,
      text: "AhmedSolimanGhonaim",
      url: "https://github.com/AhmedSolimanGhonaim",
    },
    {
      icon: Linkedin,
      text: "ahmedsolimanghonaim",
      url: "https://www.linkedin.com/in/ahmedsolimanghonaim/",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-red-900/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/10 via-purple-800/15 to-red-800/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-80"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-70"
          animate={{ y: [0, -25, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-black/60 via-black/80 to-black/90 backdrop-blur-sm p-2">
        <div className="container mx-auto px-6 p-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 p-20">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
                  Ahmed Soliman
                </span>
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                A passionate full-stack developer creating innovative digital
                experiences. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-gray-300 transition-all duration-300 ${social.color} hover:border-white/40 hover:shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
     
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 p"
            >
              <h4 className="text-3xl font-semibold text-white">
                Contact Info
              </h4>
              <div className="space-y-5">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.url}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-red-500/10 border border-transparent hover:border-purple-400/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/50 group-hover:border-purple-300/70 group-hover:bg-gradient-to-br group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                      <contact.icon
                        size={20}
                        className="text-purple-300 group-hover:text-purple-200"
                      />
                    </div>
                    <span className="text-lg">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gradient-to-r border-purple-500/30 border-blue-500/30 border-red-500/30 pt-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ahmed Soliman. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={18} className="text-red-400 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
