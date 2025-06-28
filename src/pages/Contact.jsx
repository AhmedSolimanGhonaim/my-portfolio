import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahmed.solimanth57@gmail.com",
      url: "mailto:ahmed.solimanth57@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+20 1010351108",
      url: "https://wa.me/201010351108",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Egypt",
      url: "#",
      color: "text-blue-400",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "AhmedSolimanGhonaim",
      url: "https://github.com/AhmedSolimanGhonaim",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ahmedsolimanghonaim",
      url: "https://www.linkedin.com/in/ahmedsolimanghonaim/",
      color: "text-blue-500",
    },
  ];

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
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
                Touch
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Let's discuss your project and turn your ideas into reality
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
         

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.url}
                    target={
                      contact.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`p-3 rounded-full bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors duration-300`}
                    >
                      <contact.icon
                        className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {contact.title}
                      </h3>
                      <p className="text-gray-300">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to take on new challenges and create
                  amazing digital experiences. Whether you have a project in
                  mind or just want to say hello, feel free to reach out!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
