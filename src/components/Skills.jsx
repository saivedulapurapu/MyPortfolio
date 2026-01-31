import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaChartBar, FaDocker, FaLayerGroup } from 'react-icons/fa';
import '../styles/Skills.css';

const skillsData = [
    {
        category: "Programming",
        icon: <FaCode />,
        skills: ["Python", "JavaScript", "C"]
    },
    {
        category: "Web & Backend",
        icon: <FaServer />,
        skills: ["FastAPI", "React", "Node.js", "REST APIs"]
    },
    {
        category: "Databases",
        icon: <FaDatabase />,
        skills: ["PostgreSQL", "MySQL", "Data Modelling"]
    },
    {
        category: "DevOps & Tools",
        icon: <FaDocker />,
        skills: ["Docker", "Linux", "Bash", "Git", "GitHub"]
    },
    {
        category: "Analytics & BI",
        icon: <FaChartBar />,
        skills: ["Power BI", "Excel"]
    },
    {
        category: "CS Foundations",
        icon: <FaLayerGroup />,
        skills: ["Data Structures", "Algorithms", "DBMS", "OS"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Technical Skills
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
            </motion.h2>

            <div className="skills-grid">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3>{category.icon} {category.category}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
