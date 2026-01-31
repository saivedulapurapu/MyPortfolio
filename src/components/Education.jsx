import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
    const courses = [
        "Database Management Systems",
        "Data Structures",
        "Analysis of Algorithms",
        "Machine Learning",
        "Operating Systems",
        "Data Mining",
        "Data Warehousing",
        "MERN Stack",
        "OOPs with C++",
        "Computer Organization and Architecture",
        "Android Development with Java"
    ];

    return (
        <section id="education" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Education
                <motion.div
                    className="title-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
            </motion.h2>

            <motion.div
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="edu-top">
                    <div className="edu-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="edu-info">
                        <div className="edu-header-row">
                            <h3 className="edu-school">SRM University, AP</h3>
                            <span className="edu-date">Aug 2023 -- Present</span>
                        </div>
                        <h4 className="edu-degree">B.Sc. (Hons.) in Computer Science — Big Data Analytics</h4>
                        <div className="edu-score">
                            <span className="score-label">CGPA</span>
                            <span className="score-value">8.64 / 10</span>
                        </div>
                    </div>
                </div>

                <div className="edu-divider"></div>

                <div className="edu-bottom">
                    <h4>Relevant Coursework</h4>
                    <div className="course-tags">
                        {courses.map((course, index) => (
                            <span key={index} className="course-tag">{course}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
