import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Layers } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
    const containerRef = useRef(null);

    // Mouse Spotlight Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const { clientX, clientY } = e;
                const { left, top } = containerRef.current.getBoundingClientRect();
                const x = clientX - left;
                const y = clientY - top;
                containerRef.current.style.setProperty('--mouse-x', `${x}px`);
                containerRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.projects-showcase-ref');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="hero-wrapper" ref={containerRef}>
                <div className="spotlight-bg"></div>
                <div className="ambient-glow"></div>

                <div className="container hero-content">
                    {/* Typewriter Effect */}
                    <div className="typewriter-container">
                        <Typewriter
                            options={{
                                strings: ['Developer Geek', 'Full-Stack Wizard', 'AI Enthusiast', 'MERN Expert'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "typewriter-text",
                                cursorClassName: "typewriter-cursor"
                            }}
                        />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="aesthetic-title"
                    >
                        <span className="outline-text">SHAILESH</span>
                        <span className="filled-text">YADAV</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-btn-group"
                    >
                        <a href="#" className="hero-btn primary">
                            <FileText size={18} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />
                            Resume
                        </a>
                        <button onClick={scrollToProjects} className="hero-btn">
                            <Layers size={18} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />
                            Projects
                        </button>
                    </motion.div>

                    {/* Contact Button Moved Here */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="hero-contact-trigger"
                    >
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="contact-trigger-btn"
                        >
                            <span className="contact-trigger-label">Connect with me</span>
                            <div className="contact-trigger-circle">
                                <ArrowDown size={14} />
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* Info Grid Bar */}
                <div className="info-bar">
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">India</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Current</span>
                            <span className="info-value">Building SaaS</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Experience</span>
                            <span className="info-value">2+ Years</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Availability</span>
                            <span className="info-value">Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
