import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
    const [scale, setScale] = useState(0.5);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setScale(width / 1440);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const handleMouseEnter = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
        document.body.style.overflow = 'auto';
    };
    const projects = [
        {
            id: "01",
            title: "Landbnb",
            desc: "A futuristic real estate ecosystem built for the next generation of digital nomads. Experience seamless property management with high-end architecture.",
            tags: ["MONGODB", "EXPRESS", "REACT", "NODE.JS"],
            link: "https://landbnb.shaileshyadav.in",
            github: "https://github.com/yshail"
        }
    ];

    return (
        <section className="section-dark projects-showcase-ref" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <span className="social-label">SELECTED WORKS</span>
                    <h2 className="section-h2" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800 }}>PROJECTS</h2>
                </motion.div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="aesthetic-project-card group"
                        >
                            <div className="aesthetic-card-number">{project.id}</div>

                            <div className="card-ambient-glow"></div>

                            <div className="project-details">
                                <h3 className="project-title-large">{project.title}</h3>
                                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                                    {project.desc}
                                </p>

                                <div className="tag-list">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="aesthetic-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex gap-8 mt-12">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hero-btn primary"
                                        style={{ padding: '0.75rem 2rem' }}
                                    >
                                        <Globe size={18} className="mr-2 inline" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hero-btn"
                                        style={{ padding: '0.75rem 2rem' }}
                                    >
                                        <Github size={18} className="mr-2 inline" />
                                        Source
                                    </a>
                                </div>
                            </div>

                            <motion.div
                                className="project-visual-box-wrapper"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div
                                    className="project-visual-box"
                                    ref={containerRef}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="live-preview-container">
                                        {/* Browser Window UI Decorations */}
                                        <div className="browser-header">
                                            <div className="browser-dots">
                                                <div className="dot red"></div>
                                                <div className="dot yellow"></div>
                                                <div className="dot green"></div>
                                            </div>
                                            <div className="browser-address">
                                                {project.link.replace('https://', '')}
                                            </div>
                                        </div>

                                        <div className="iframe-scaler" style={{
                                            transform: `scale(${scale})`,
                                            width: '1440px',
                                            height: '900px',
                                            overflow: 'hidden'
                                        }}>
                                            <iframe
                                                src={project.link}
                                                className="live-iframe"
                                                title={project.title}
                                                loading="lazy"
                                                style={{ width: '1460px', height: '100%', border: 'none' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="neon-glow"></div>

                                    <div className="project-visual-content">
                                        <ArrowUpRight size={80} className="visual-arrow" />
                                        <span className="visual-hint">INTERACT TO VIEW</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
