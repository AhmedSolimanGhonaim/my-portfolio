import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/projects.css";
import img1 from "../assets/Screenshot from 2025-06-26 21-39-30.png";
import img2 from "../assets/Screenshot from 2025-06-26 22-06-21.png";
import img3 from "../assets/Screenshot from 2025-06-26 22-06-27.png";
import img4 from "../assets/Screenshot from 2025-06-26 22-07-01.png";
import img5 from "../assets/Screenshot from 2025-06-27 16-11-57.png";

// Scroll to top on component mount
const projects = [
  {
    id: 1,
    title: "Uchef",
    description: (
      <>
        <b>Full-stack developer : Django-React ITI</b>
        <ul>
          <li>• Designed and implemented the ITI UChef application architecture using Django, REST API, and React.</li>
          <li>• Developed a robust backend system with Django to handle business logic and data management.</li>
          <li>• Built and integrated RESTful APIs to enable seamless communication between the frontend and backend.</li>
          <li>• Designed and developed an interactive and responsive user interface using React.</li>
          <li>• Created a structured database schema and managed data persistence using Django ORM.</li>
          <li>• Implemented user authentication and authorization mechanisms to secure the platform.</li>
        </ul>
      </>
    ),
    tags: ["Django", "React", "REST API", "Full-stack"],
    image: img1,
    github: "https://github.com/AhmedSolimanGhonaim/U-chef-Food-Service",
    demo: "https://u-chef-food-service.vercel.app/"
  },
  {
    id: 2,
    title: "React E-Commerce Platform",
    description: (
      <ul>
        <li>• Built a full-stack e-commerce platform with React, Redux Toolkit, and JSON Server.</li>
        <li>• Implemented user authentication, product management, and cart functionality.</li>
        <li>• Used Axios for API calls and optimized state management with Redux.</li>
      </ul>
    ),
    tags: ["React", "Redux Toolkit", "JSON Server"],
    image: img2,
    github: "https://github.com/AhmedSolimanGhonaim/cars-ecommerce",
    demo: ""
  },
  {
    id: 3,
    title: "Optimal Donor Crowd Funding",
    description: (
      <ul>
        <li><b>React Frontend Development:</b></li>
        <li>• Developed and contributed to the React-based donation handling system.</li>
        <li>• Enhanced the user interface for improved user experience.</li>
        <li><b>Backend Setup:</b></li>
        <li>• Assisted in setting up the backend infrastructure, ensuring efficient data handling and integration.</li>
      </ul>
    ),
    tags: ["React", "Crowd Funding"],
    image: img3,
    github: "",
    demo: ""
  },
  {
    id: 4,
    title: "Vanilla JavaScript E-Commerce Website",
    description: (
      <ul>
        <li>• Developed a feature-rich e-commerce platform using Vanilla JavaScript, HTML, and CSS.</li>
        <li>• Implemented cart functionality, product filtering, and user authentication.</li>
        <li>• Designed and built an admin dashboard and seller dashboard to manage products, users, and orders.</li>
        <li>• Handled different user roles (admin, seller, customer) with role-based access control.</li>
        <li>• Utilized session storage and JSON Server for session management and backend simulation.</li>
      </ul>
    ),
    tags: ["JavaScript", "HTML", "CSS", "JSON Server"],
    image: img4,
    github: "https://github.com/AhmedSolimanGhonaim/js-Ecommerce-Pr",
    demo: ""
  },
  {
    id: 5,
    title: "Food Delivery DEPI (MERN)",
    description: (
      <ul>
        <li><b>Frontend Development :</b></li>
        <li>• Developed a responsive web app featuring a landing page and multiple sections, including a dedicated cart page.</li>
        <li>• Created a user-friendly interface using Vite, React.js, HTML, and CSS.</li>
        <li>• Implemented key features such as cart management, login, and sign-up.</li>
        <li>• Led the project, overseeing all aspects of frontend development and task organization.</li>
        <li><b>Backend Development :</b></li>
        <li>• Managed order placement using Node.js and integrated Stripe for secure order payments.</li>
        <li>• Developed routes and a place order controller, testing endpoints with Postman.</li>
      </ul>
    ),
    tags: ["MERN", "React", "Node.js", "Stripe"],
    image: img2,
    github: "",
    demo: "https://food-dell-front-end-jaoq.vercel.app/"
  },
  {
    id: 6,
    title: "solectro",
    description: (
      <>
        <b>Languages Used:</b> Python (63.6%), HTML (35.3%), CSS (1.1%)<br />
        <b>Project Overview:</b> E-commerce platform for electronics, built using Django and Bootstrap.<br />
        <b>Key Features:</b>
        <ul>
          <li>• Responsive Product Catalog: Display products in a user-friendly manner with a responsive layout.</li>
          <li>• Shopping Cart: Real-time updates to the shopping cart, including product quantity management and a dynamic cart badge counter.</li>
          <li>• Price Calculations: Automatic calculations for prices, including tax and shipping costs.</li>
          <li>• Image Upload Support: Allowing users to upload images for products.</li>
          <li>• Stock Level Tracking: Managing product inventory levels.</li>
          <li>• Admin Product Management: Comprehensive product management features for administrators.</li>
        </ul>
        <b>Achievements:</b>
        <ul>
          <li>• Successfully built a full-stack web application from scratch.</li>
          <li>• Enhanced understanding and application of the Django framework.</li>
          <li>• Improved skills in web development, including frontend and backend integration.</li>
        </ul>
      </>
    ),
    tags: ["Django", "Bootstrap", "Python", "HTML", "CSS"],
    image: img5,
    github: "https://github.com/AhmedSolimanGhonaim/Django-project-01",
    demo: ""
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              style={{
                background: "linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)",
                color: "#fff",
                border: "none"
              }}
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              style={{
                background: "linear-gradient(90deg, #06b6d4 0%, #a21caf 100%)",
                color: "#fff",
                border: "none"
              }}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <div style={{ color: "#c7c7c7", marginBottom: "1rem", fontSize: "1rem" }}>
          {project.description}
        </div>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <section className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My <span className="highlight">Projects</span></h2>
          <p>Here are some of my recent works</p>
        </motion.div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;

