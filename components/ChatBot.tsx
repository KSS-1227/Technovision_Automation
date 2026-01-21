import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { PRODUCTS, SERVICES, FOUNDERS, MILESTONES, PROJECTS } from '../constants';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Hi! I am the Technovision AI Assistant. Ask me anything about our home or industrial automation solutions.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatSessionRef = useRef<Chat | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Initialize Chat Session with System Instruction
    useEffect(() => {
        const initChat = () => {
            try {
                // Initialize context string from constants
                const context = `
You are the intelligent AI assistant for "Technovision Automation Pvt Ltd".
Your persona is professional, helpful, and knowledgeable about automation engineering.

COMPANY DETAILS:
- Name: Technovision Automation Pvt Ltd
- Established: 1998 by Mr. Prashant Sadavarte (MD) and Mrs. Medha Sadavarte (Director Technical).
- Location: C-3 Neelkanth Sadan, Plot-3A, Sec-10, Khanda Colony, New Panvel - 410206.
- Contact: 9004614407 | prashant@technovision.co.in
- Mission: Providing comfort, convenience, and luxury through digitalization and IoT.

PRODUCTS:
${PRODUCTS.map(p => `- ${p.name} (${p.brand}): ${p.description}`).join('\n')}

SERVICES:
${SERVICES.map(s => `- ${s.title} (${s.category}): ${s.description}`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `- ${p.title} in ${p.type}`).join('\n')}

MILESTONES:
${MILESTONES.map(m => `- ${m.year}: ${m.title} - ${m.description}`).join('\n')}

STRICT GUIDELINES:
1. ONLY answer questions related to Technovision, its products, services, or automation technologies (PLC, SCADA, KNX, IoT).
2. If asked about unrelated topics, politely refuse.
3. Be concise but informative.
4. **FORMATTING RULES**:
   - Use **Bullet Points** (starts with -) for listing features, products, or services.
   - Use **Bold Text** (surrounded by **) for key terms, product names, or emphasis.
   - Use new paragraphs for separate ideas.
   - Keep the layout clean and easy to scan.
5. If a user asks for a quote, refer them to the Contact page.
`;

                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                chatSessionRef.current = ai.chats.create({
                    model: 'gemini-3-flash-preview',
                    config: {
                        systemInstruction: context,
                        temperature: 0.7,
                    }
                });
            } catch (error) {
                console.error("Failed to initialize chat", error);
            }
        };

        if (!chatSessionRef.current) {
            initChat();
        }
    }, []);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || !chatSessionRef.current) return;

        const userMsg = inputValue.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const result = await chatSessionRef.current.sendMessage({ message: userMsg });
            setMessages(prev => [...prev, { role: 'model', text: result.text || "I'm sorry, I couldn't process that." }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting to the server right now." }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Helper function to render formatted text (Markdown-like)
    const renderMessageContent = (text: string) => {
        return text.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-2" />;

            // Helper to parse bold
            const formatBold = (content: string) => {
                return content.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={idx} className="font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                });
            };

            // Bullet Lists
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                return (
                    <div key={i} className="flex items-start pl-2 mb-1">
                        <span className="mr-2 mt-2 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0 opacity-60"></span>
                        <span className="flex-1">{formatBold(trimmed.substring(2))}</span>
                    </div>
                );
            }
            
            // Numbered Lists
            if (/^\d+\./.test(trimmed)) {
                 const dotIndex = trimmed.indexOf('.');
                 const num = trimmed.substring(0, dotIndex + 1);
                 const content = trimmed.substring(dotIndex + 1);
                 return (
                    <div key={i} className="flex items-start pl-2 mb-1">
                        <span className="mr-2 font-semibold opacity-80 min-w-[1.2em]">{num}</span>
                        <span className="flex-1">{formatBold(content)}</span>
                    </div>
                 );
            }

            return <p key={i} className="mb-2 leading-relaxed last:mb-0">{formatBold(line)}</p>;
        });
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                    isOpen ? 'bg-slate-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700 animate-bounce'
                } text-white`}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col transition-all duration-300 origin-bottom-right ${
                    isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'
                }`}
                style={{ height: '500px', maxHeight: '80vh' }}
            >
                {/* Header */}
                <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex items-center justify-between shadow-md">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">TechnoBot</h3>
                            <p className="text-xs text-blue-200 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                            </p>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm ${
                                    msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                                }`}
                            >
                                {renderMessageContent(msg.text)}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm">
                                <Loader2 size={16} className="animate-spin text-blue-600" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 rounded-b-2xl">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about our products..."
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            className="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-slate-400">Powered by Gemini AI</p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChatBot;