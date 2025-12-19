import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';

export default function Contact() {
    const links = [
        { name: 'Github', icon: Github, url: 'https://github.com/yshail' },
        { name: 'Linkedin', icon: Linkedin, url: 'https://linkedin.com/in/yshail' },
        { name: 'Email', icon: Mail, url: 'mailto:id.shaileshyadav@gmail.com' },
        { name: 'Twitter', icon: Twitter, url: '#' },
    ];

    return (
        <footer id="contact" className="footer-wrapper">
            {/* Large stylized text background */}
            <div className="footer-bg-text">
                CONTACT ME
            </div>

            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-main">
                        <h2 className="footer-headline">
                            Let's create something <span>extraordinary.</span>
                        </h2>
                        <a
                            href="mailto:id.shaileshyadav@gmail.com"
                            className="footer-email-link"
                        >
                            id.shaileshyadav@gmail.com
                            <ArrowRight size={32} style={{ marginLeft: '1rem' }} />
                        </a>
                    </div>

                    <div className="footer-socials">
                        <span className="social-label">Socials</span>
                        <div className="social-links-list">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="social-link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">© {new Date().getFullYear()} Shailesh Yadav.</p>
                    <div className="footer-meta">
                        <span>LOCAL TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
                        <span>STATUS: AVAILABLE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
