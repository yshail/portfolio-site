import React from 'react';
import { m } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaLinux, FaRobot } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiJsonwebtokens, SiVercel, SiRedis } from 'react-icons/si';
import { MdFunctions } from 'react-icons/md';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbApi, TbBrain } from 'react-icons/tb';
import { DiMysql } from 'react-icons/di';
export default function About() {
    const skills = [
        { name: "Data Structures & Algorithms", icon: <MdFunctions className="text-red-400" size={18} />, highlight: true },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={18} />, highlight: false },
        { name: "React.js", icon: <FaReact className="text-blue-400" size={18} />, highlight: false },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={18} />, highlight: false },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" size={18} />, highlight: false },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={18} />, highlight: false },
        { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" size={18} />, highlight: true },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={18} />, highlight: false },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={18} />, highlight: false },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" size={18} />, highlight: false },
        { name: "GitHub", icon: <FaGithub className="text-white" size={18} />, highlight: false },
        { name: "SQL", icon: <DiMysql className="text-blue-300" size={18} />, highlight: false },
        { name: "REST API", icon: <TbApi className="text-blue-200" size={18} />, highlight: false },
        { name: "Docker", icon: <FaDocker className="text-blue-500" size={18} />, highlight: false },
        { name: "Linux / Bash", icon: <FaLinux className="text-white" size={18} />, highlight: false },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={18} />, highlight: false },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={18} />, highlight: false },
        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" size={18} />, highlight: false },
        { name: "Deployment", icon: <SiVercel className="text-white" size={18} />, highlight: false },
        { name: "Redis", icon: <SiRedis className="text-red-500" size={18} />, highlight: false },
        { name: "AI APIs", icon: <TbBrain className="text-purple-400" size={18} />, highlight: true },
        { name: "Playwright", icon: <FaRobot className="text-green-400" size={18} />, highlight: false }
    ];

    return (
        <section className="section-dark">
            <div className="container">

                <div className="center-header">
                    <m.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-4"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                    </m.div>

                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-h2"
                    >
                        What I bring to the table
                    </m.h2>

                    <m.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="sub-text"
                    >
                        I am a computer science student with a passion for building clean, efficient, and scalable web solutions.
                    </m.p>
                </div>

                <div className="skills-gallery">
                    {skills.map((skill, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                            className={`aesthetic-skill-pill ${skill.highlight ? 'highlight-pill' : ''}`}
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </m.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
