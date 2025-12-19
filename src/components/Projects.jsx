import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="aesthetic-project-card group"
                        >
                            <div className="project-number">{project.id}</div>

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

                            <div className="project-visual-box">
                                <div className="neon-glow"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <ArrowUpRight size={80} className="text-white/10 group-hover:text-white/30 transition-all duration-700 group-hover:scale-125" />
                                    <span className="mt-4 font-mono text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">INTERACT TO VIEW</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
