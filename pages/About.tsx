import React from 'react';
import { FOUNDERS, MILESTONES } from '../constants';
import { CheckCircle, Target, Eye } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const About: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <RevealOnScroll effect="fade-up">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Technovision</h1>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            We provide Automation solutions for home, office, and hotel by using digitalization and IoT based products. 
                            Our products integrate seamlessly with mobile devices and Alexa, allowing you to operate home and office 
                            appliances from remote places. We integrate these world-class products to provide robust systems to the end user.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Mission/Vision/Purpose */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <RevealOnScroll effect="fade-up" delay={0}>
                            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600 h-full">
                                <div className="mb-4 text-blue-600"><Target size={32} /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Purpose</h3>
                                <p className="text-slate-600">To provide comfort, convenience, and luxury to every occupant across the globe.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll effect="fade-up" delay={150}>
                            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600 h-full">
                                <div className="mb-4 text-blue-600"><Eye size={32} /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Goal</h3>
                                <ul className="text-slate-600 list-disc list-inside space-y-1">
                                    <li>Brand Awareness</li>
                                    <li>Lead Generation</li>
                                    <li>Customer Satisfaction</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll effect="fade-up" delay={300}>
                            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600 h-full">
                                <div className="mb-4 text-blue-600"><CheckCircle size={32} /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Why Technovision?</h3>
                                <p className="text-slate-600">Team of qualified engineers ensuring accurate technical solutions, perfect documentation, and proper training without the need for AMC.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Founders */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll effect="fade-up">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Meet Our Founders</h2>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {FOUNDERS.map((founder, index) => (
                            <RevealOnScroll key={index} effect={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                <div className="bg-slate-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 border border-slate-200 hover:border-blue-300 transition-colors h-full">
                                    <img 
                                        src={founder.imageUrl} 
                                        alt={founder.name} 
                                        className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-md flex-shrink-0"
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
                                        <p className="text-blue-600 font-medium mb-3">{founder.role}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{founder.bio}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll effect="fade-up">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Journey</h2>
                    </RevealOnScroll>
                    
                    <div className="relative">
                        {/* Horizontal Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
                        
                        {/* Scroll Container */}
                        <div className="flex overflow-x-auto gap-8 pb-12 snap-x-mandatory px-4 md:px-0 scrollbar-hide">
                            {MILESTONES.map((milestone, index) => (
                                <RevealOnScroll key={index} effect="fade-up" delay={index * 100} className="relative flex-shrink-0 w-80 md:w-64 snap-center z-10">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg mb-4 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm w-full text-center hover:shadow-md transition-shadow">
                                            <span className="text-2xl font-bold text-blue-600 block mb-2">{milestone.year}</span>
                                            <h4 className="font-bold text-slate-900 mb-2">{milestone.title}</h4>
                                            <p className="text-sm text-slate-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;