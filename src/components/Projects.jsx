import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
    {
        title: "GritOS: Intelligent Operational & Financial Analytics Platform",
        tech: "Python, FastAPI, Next.js, Tailwind CSS, Groq API",
        description: [
            "Architected a full-stack financial analytics platform with Next.js/Tailwind frontend and FastAPI backend.",
            "Built a Shock Engine to simulate adverse market scenarios and visualize margin and runway impacts.",
            "Designed a Capital Lock Index algorithm to track inventory liquidity and flag trapped capital.",
            "Integrated LLaMA 3 via Groq API as an AI advisor for data-driven cost and growth recommendations."
        ],
        link: "https://github.com/saivedulapurapu/GritOS"
    },
    {
        title: "SentientQ: Quantum-Powered Sentiment & Reputation Engine",
        tech: "Python, FastAPI, VQC, HTML/CSS/JS",
        description: [
            "Built a full-stack NLP app with a FastAPI backend and quantum computing layer for sentiment analysis.",
            "Designed a 2-qubit Variational Quantum Circuit (VQC) using PennyLane for text classification.",
            "Developed a real-time dashboard visualizing sentiment patterns and quantum measurement outputs.",
            "Applied Trace-Purity metrics on D2C brand reviews to compute reputation and stability scores."
        ],
        link: "https://github.com/saivedulapurapu/SentientQ"
    },
    {
        title: "Full-Stack Fraud Analysis Platform",
        tech: "Python, FastAPI, Streamlit, SQLite",
        description: [
            "Built a scalable FastAPI backend for real-time transaction scoring and model updates.",
            "Designed a Streamlit dashboard to monitor transactions, visualize patterns, and flag suspicious activity.",
            "Implemented a SQLite data layer to manage user profiles, transaction histories, and feedback logs.",
            "Integrated data simulation, RESTful endpoints, and automated testing for a fault-tolerant workflow."
        ],
        link: "https://github.com/saivedulapurapu/UserSpecified_FraudDetector"
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
