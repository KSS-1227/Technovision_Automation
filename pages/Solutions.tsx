import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, Home, Factory, Wifi, Star } from 'lucide-react';
import { Service } from '../types';
import RevealOnScroll from '../components/RevealOnScroll';

// Reusable Card Component for consistency
const SolutionCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    const isHome = service.category === 'Home';
    
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-start h-full group">
            <div className={`p-3 rounded-xl mb-6 transition-colors duration-300 ${isHome ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white'}`}>
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
            </p>
            <div className="mt-auto w-full pt-4 border-t border-slate-100">
                <div className="flex items-center text-sm text-slate-500 font-medium">
                    <CheckCircle size={14} className={`mr-2 ${isHome ? 'text-blue-500' : 'text-slate-600'}`} /> 
                    {isHome ? 'Smart & Simple' : 'Industry Standard'}
                </div>
                <div className="flex items-center text-sm text-slate-500 font-medium mt-2">
                    <CheckCircle size={14} className={`mr-2 ${isHome ? 'text-blue-500' : 'text-slate-600'}`} /> 
                    {isHome ? 'Cost Effective' : 'Robust Reliability'}
                </div>
            </div>
        </div>
    );
};

const Solutions: React.FC = () => {
    // Separate services by sub-category
    const budgetHomeSolutions = SERVICES.filter(s => s.category === 'Home' && (s.title.includes('Budget') || s.title.includes('Energy') || s.title.includes('Access')));
    const premiumHomeSolutions = SERVICES.filter(s => s.category === 'Home' && s.title.includes('Premium'));
    const industrialSolutions = SERVICES.filter(s => s.category === 'Industrial');

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <RevealOnScroll effect="fade-up">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Solutions</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Whether you need a simple retrofit upgrade or a complete industrial system, we have the right package for you.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Broad Category 1: Budget Home Automation */}
                <section className="mb-24">
                    <RevealOnScroll effect="fade-right">
                        <div className="flex items-center gap-5 mb-10 border-b border-slate-200 pb-6">
                            <div className="p-4 bg-green-500 rounded-2xl text-white shadow-lg shadow-green-200">
                                <Wifi size={40} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-3xl font-bold text-slate-900">Smart Retrofit (Budget Friendly)</h2>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase">Popular</span>
                                </div>
                                <p className="text-slate-500 mt-2 text-lg">
                                    Upgrade your existing home without breaking walls. Wireless, affordable, and quick installation.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {budgetHomeSolutions.map((service, idx) => (
                            <RevealOnScroll key={`budget-${idx}`} effect="fade-up" delay={idx * 150}>
                                <SolutionCard service={service} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* Broad Category 2: Premium Home Automation */}
                <section className="mb-24">
                    <RevealOnScroll effect="fade-right">
                        <div className="flex items-center gap-5 mb-10 border-b border-slate-200 pb-6">
                            <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                                <Star size={40} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Luxury Integrated Automation</h2>
                                <p className="text-slate-500 mt-2 text-lg">
                                    Wired KNX systems for new premium bungalows and villas. Total building control.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {premiumHomeSolutions.map((service, idx) => (
                            <RevealOnScroll key={`prem-${idx}`} effect="fade-up" delay={idx * 150}>
                                <SolutionCard service={service} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* Broad Category 3: Industrial Automation */}
                <section>
                    <RevealOnScroll effect="fade-left">
                        <div className="flex items-center gap-5 mb-10 border-b border-slate-200 pb-6">
                            <div className="p-4 bg-slate-800 rounded-2xl text-white shadow-lg shadow-slate-300">
                                <Factory size={40} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Industrial Automation</h2>
                                <p className="text-slate-500 mt-2 text-lg">PLC Programming, HMI Development, and Control Panel Manufacturing.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industrialSolutions.map((service, idx) => (
                            <RevealOnScroll key={`ind-${idx}`} effect="fade-up" delay={idx * 150}>
                                <SolutionCard service={service} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Solutions;