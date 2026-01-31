import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
        title: "AEGIS AI",
        tech: "Python, FastAPI, Docker, PostgreSQL",
        description: [
            "Developed an API-based backend application for business decision making.",
            "Implemented RESTful endpoints for structured data ingestion.",
            "Used Docker for containerization and PostgreSQL for data management."
        ],
        link: "https://github.com/saivedulapurapu/Agentic-AI-Business-Decision-Maker.git"
    },
    {
        title: "Multi-Threaded Web Crawler",
        tech: "C, Pthreads, Mutex",
        description: [
            "Built a concurrent web crawler in C to fetch pages efficiently.",
            "Applied multithreading to improve performance.",
            "Demonstrated strong understanding of OS concepts and synchronization."
        ],
        link: "https://github.com/saivedulapurapu/Multi-Threaded-Web-Crawler-Using-C.git"
    },
    {
        title: "Spice Stories",
        tech: "React, Python, JSON ETL",
        description: [
            "Designed a recipe-based web platform with focus on usability.",
            "Implemented ETL workflow to extract and normalize recipe data.",
            "Backend services currently under development."
        ],
        link: "https://github.com/saivedulapurapu/SpiceStories.git"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Featured Projects
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
            </motion.h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-tech">{project.tech}</p>
                            <ul className="project-desc">
                                {project.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View on GitHub <FaGithub />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
