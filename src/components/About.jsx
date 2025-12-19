import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, BrainCircuit } from 'lucide-react';

export default function About() {
    const cards = [
        {
            id: '01',
            title: 'Full-Stack Development',
            desc: 'Building robust applications using the MERN stack (MongoDB, Express, React, Node.js).',
            icon: <Code2 size={24} className="text-white mb-4" />
        },
        {
            id: '02',
            title: 'Data Structures & Algo',
            desc: 'Writing efficient, scalable code and solving complex problems with strong DSA fundamentals.',
            icon: <BrainCircuit size={24} className="text-white mb-4" />
        },
        {
            id: '03',
            title: 'AI & Machine Learning',
            desc: 'Exploring the integration of LLMs and AI models into real-world web applications.',
            icon: <Rocket size={24} className="text-white mb-4" />
        },
        {
            id: '04',
            title: 'Cloud & DevOps',
            desc: 'Experience with cloud integrations like MongoDB Atlas and Cloudinary for scalable solutions.',
            icon: <Lightbulb size={24} className="text-white mb-4" />
        }
    ];

    return (
        <section className="section-dark">
            <div className="container">

                <div className="center-header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-4"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-h2"
                    >
                        What I bring to the table
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="sub-text"
                    >
                        I am a computer science student with a passion for building clean, efficient, and scalable web solutions.
                    </motion.p>
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                        >
                            <div className="card-content">
                                {card.icon}
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                            <span className="card-number">{card.id}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
