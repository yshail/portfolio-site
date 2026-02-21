import React, { useState, useRef, useEffect } from 'react';
import { m } from 'framer-motion';
import { Globe, ArrowUpRight } from 'lucide-react';
import { FaNodeJs, FaDocker, FaReact, FaRobot, FaGithub, FaServer, FaSync, FaSpider } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRailway, SiRender, SiJavascript, SiVercel } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

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
            title: "LinkedIn Persona",
            desc: "An intelligent scraper and personality analysis tool for LinkedIn profiles. Features automated login handling, session management, and deep profile insights.",
            tags: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Playwright", icon: <FaRobot className="text-green-400" /> },
                { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
                { name: "Express", icon: <SiExpress className="text-gray-300" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-500" /> }
            ],
            link: "https://passionate-appreciation-production-2e7d.up.railway.app/",
            github: "https://github.com/yshail/LinkedIn-Persona",
            hostIcon: <SiRailway size={20} />
        },
        {
            id: "02",
            title: "Landbnb",
            desc: "A futuristic real estate ecosystem built for the next generation of digital nomads. Experience seamless property management with high-end architecture.",
            tags: [
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                { name: "Express", icon: <SiExpress className="text-gray-300" /> },
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> }
            ],
            link: "https://landbnb.shaileshyadav.in",
            github: "https://github.com/yshail",
            hostIcon: <SiRender size={20} />
        },
        {
            id: "03",
            title: "YouTube Stream Scraper",
            desc: "A real-time data extraction tool using Server Sent Events, Async Generators, and Cheerio for robust YouTube scraping.",
            tags: [
                { name: "Server Sent Events", icon: <FaServer className="text-blue-400" /> },
                { name: "Advanced JS", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "Async Generators", icon: <FaSync className="text-green-400" /> },
                { name: "Cheerio", icon: <FaSpider className="text-orange-500" /> }
            ],
            link: "https://youtube-stream-scraper-b2lhe23dq-ids-projects-4c7ad7bd.vercel.app/",
            github: "https://github.com/yshail/youtube-stream-scraper",
            hostIcon: <SiVercel size={20} />,
            image: "/yt-scraper.png"
        }
    ];

    return (
        <section className="section-dark projects-showcase-ref" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
            <div className="container">
                <m.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <span className="social-label">SELECTED WORKS</span>
                    <h2 className="section-h2" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800 }}>PROJECTS</h2>
                </m.div>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <m.div
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
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="aesthetic-tag flex items-center gap-2">
                                            {tag.icon}
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 mt-12">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hero-btn primary flex items-center justify-center gap-4 uppercase tracking-widest text-sm"
                                        style={{ padding: '0.75rem 2.25rem' }}
                                    >
                                        {project.hostIcon}
                                        LIVE DEMO
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hero-btn flex items-center justify-center gap-4 uppercase tracking-widest text-sm"
                                        style={{ padding: '0.75rem 2.25rem' }}
                                    >
                                        <FaGithub size={20} />
                                        SOURCE
                                    </a>
                                </div>
                            </div>

                            <m.div
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
                                            {project.image ? (
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title} 
                                                    className="live-iframe" 
                                                    style={{ width: '1460px', height: '100%', objectFit: 'cover', border: 'none' }}
                                                />
                                            ) : (
                                                <iframe
                                                    src={project.link}
                                                    className="live-iframe"
                                                    title={project.title}
                                                    loading="lazy"
                                                    style={{ width: '1460px', height: '100%', border: 'none' }}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="neon-glow"></div>

                                    <div className="project-visual-content">
                                        <ArrowUpRight size={80} className="visual-arrow" />
                                        <span className="visual-hint">INTERACT TO VIEW</span>
                                    </div>
                                </div>
                            </m.div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
