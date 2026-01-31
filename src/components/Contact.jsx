import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <>
            <section id="contact" className="section container contact">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In Touch
                    <motion.div
                        className="title-underline"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.8 }}
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.a
                    href="mailto:saivedulapurapu@gmail.com"
                    className="btn btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Say Hello
                </motion.a>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>
                        Designed & Built by Sai Vedulapurapu <span className="heart-icon"><FaHeart /></span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
