import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles, Key, AlertCircle } from 'lucide-react';
import './ChatBot.css';

const SUGGESTIONS = [
    "Who is Shailesh?",
    "Tell me about Landbnb",
    "What are your skills?",
    "Are you looking for a job?",
];

export default function ChatBot({ isOpen, onClose, isInline = false }) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const [messages, setMessages] = useState([
        { role: 'bot', text: "Hello! I'm Shailesh's AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleGeminiCall = async (userText) => {
        if (!apiKey) return;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `CONTEXT: You are the AI brand ambassador for Shailesh Yadav (Full-Stack Developer). 
                            SKILLS: MERN Stack, Next.js, Framer Motion, GSAP, AWS.
                            PROJECTS: Landbnb (Real Estate SaaS), and other high-end web apps.
                            TONE: Professional, modern, slightly industrial, and helpful.
                            INSTRUCTION: Keep responses concise (under 3 sentences). 
                            USER QUESTION: ${userText}`
                        }]
                    }]
                })
            });

            const data = await response.json();

            if (data.error) {
                console.error('Gemini Error:', data.error);
                return `API Error: ${data.error.message || 'Unknown error'}. Please verify your key in Google AI Studio.`;
            }

            if (!data.candidates || !data.candidates[0].content) {
                return "The AI couldn't generate a response. Please try rephrasing.";
            }

            return data.candidates[0].content.parts[0].text;
        } catch (err) {
            console.error('Network/Fetch Error:', err);
            return "Connection failed. Please check your internet or if the API key is restricted.";
        }
    };

    const handleSend = async (text) => {
        const userText = text || input;
        if (!userText.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput('');
        setIsTyping(true);

        const botReply = await handleGeminiCall(userText);
        setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
        setIsTyping(false);
    };

    return (
        <div className={`chat-interface ${isInline ? 'inline-mode' : ''}`}>
            <div className="chatbot-messages-inline" ref={scrollRef}>
                {messages.map((msg, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={idx}
                        className={`inline-message ${msg.role}`}
                    >
                        <span className="msg-prefix">{msg.role === 'bot' ? 'AI: ' : 'YOU: '}</span>
                        <div className="msg-text">{msg.text}</div>
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="inline-message bot typing-dots">
                        AI is thinking...
                    </div>
                )}
            </div>

            <div className="chatbot-controls-inline">
                <div className="suggestion-row">
                    {SUGGESTIONS.map((s, i) => (
                        <button key={i} onClick={() => handleSend(s)} className="suggestion-pill-inline">
                            {s}
                        </button>
                    ))}
                </div>
                <div className="inline-input-wrapper">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="inline-chat-input"
                        autoFocus
                    />
                    <div className="input-actions-inline">
                        <button onClick={() => handleSend()} className="inline-send-icon">
                            <Send size={18} />
                        </button>
                        <button onClick={onClose} className="inline-close-icon">
                            <X size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
