import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProfileImg from '../assets/profile.jpg';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero container">
            <div className="hero-grid">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="hero-greeting">Hello, I'm</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hero-title"
                    >
                        Sai Vedulapurapu
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="hero-subtitle"
                    >
                        Aspiring <span>Backend</span> & <span>Data Engineer</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#9ca3af', marginBottom: '2.5rem', lineHeight: '1.8' }}
                    >
                        I build scalable backend systems and analyze complex data to drive business decisions. Passionate about Python, FastAPI, and solving real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="hero-actions"
                    >
                        <a href="#projects" className="btn btn-primary">Featured Work</a>
                        <a href="#contact" className="btn btn-outline">Let's Connect</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="social-links"
                    >
                        <a href="https://github.com/saivedulapurapu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/saivedulapurapu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:saivedulapurapu@gmail.com" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="hero-img-wrapper">
                        <img src={ProfileImg} alt="Sai Vedulapurapu" className="hero-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
