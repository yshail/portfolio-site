import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, Layers, Sparkles } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import './ChatBot.css';

const ChatBot = React.lazy(() => import('./ChatBot'));

export default function Hero() {
    const containerRef = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const typewriterText = useTypewriter(['Developer Geek', 'Full-Stack Wizard', 'AI Enthusiast', 'MERN Expert']);

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
            <div className={`hero-wrapper ${isChatOpen ? 'chat-active' : ''}`} ref={containerRef}>
                <div className="spotlight-bg"></div>
                <div className="ambient-glow"></div>

                <div className="container hero-content">
                    <AnimatePresence mode="wait">
                        {!isChatOpen ? (
                            <m.div
                                key="hero-main"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="hero-main-elements"
                            >
                                {/* Typewriter Effect */}
                                <div className="typewriter-container">
                                    <span className="typewriter-text">{typewriterText}</span>
                                    <span className="typewriter-cursor">|</span>
                                </div>

                                <m.h1
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="aesthetic-title"
                                >
                                    <span className="outline-text">SHAILESH</span>
                                    <span className="filled-text">YADAV</span>
                                </m.h1>

                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="hero-btn-group"
                                >
                                    <a 
                                        href="https://drive.google.com/file/d/13R74wrZ_EhFxkhJZdWXd2_4Y3-5d1K1A/view?usp=sharing" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="hero-btn primary"
                                    >
                                        <FileText size={18} style={{ marginRight: '10px', display: 'inline', verticalAlign: 'middle' }} />
                                        RESUME
                                    </a>
                                    <button onClick={scrollToProjects} className="hero-btn">
                                        <Layers size={18} style={{ marginRight: '10px', display: 'inline', verticalAlign: 'middle' }} />
                                        PROJECTS
                                    </button>
                                </m.div>
                            </m.div>
                        ) : (
                            <m.div
                                key="chat-active-session"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="chat-integration-area"
                            >
                                <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} isInline={true} />
                            </m.div>
                        )}
                    </AnimatePresence>

                    {!isChatOpen && (
                        <div className="chat-trigger-section">
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="search-bar-aesthetic"
                                onClick={() => setIsChatOpen(true)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Sparkles size={16} className="search-icon-sparkle" />
                                <input
                                    placeholder="Ask AI anything about Shailesh..."
                                    className="search-input-dummy"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setIsChatOpen(true);
                                        }
                                    }}
                                />
                                <div className="search-key-hint">ENTER</div>
                            </m.div>
                        </div>
                    )}

                    {/* Contact Button */}
                    {!isChatOpen && (
                        <m.div
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
                        </m.div>
                    )}
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
                            <span className="info-value">Fresher</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Availability</span>
                            <span className="info-value">Immediate Joiner</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
