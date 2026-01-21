import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle, Star, Shield, Smartphone, Zap, Settings, Cpu, Activity, Wifi, Lock, Factory, ChevronLeft, ChevronRight, Quote, IndianRupee, Power, BarChart3, ArrowDown } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import ProductCard from '../components/ProductCard'; // Added to use the new card style in carousel

const HERO_SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1920&q=80", // Cozy living room
        title: "Smart Living for Every Home.",
        subtitle: "Affordable & Easy",
        description: "Upgrade your existing switchboards to Smart Switches without rewiring. Experience voice control and app convenience starting at pocket-friendly prices.",
        color: "from-brand-400 to-accent-300"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=1920&q=80",
        title: "Intelligent Savings.",
        subtitle: "Energy Efficient",
        description: "Cut down electricity bills with our Motion Sensor lights and smart scheduling. Technology that pays for itself.",
        color: "from-green-400 to-emerald-300"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
        title: "Industrial Power.",
        subtitle: "Robust Engineering",
        description: "Advanced PLC, SCADA, and Control Panel solutions for the manufacturing sector. Reliability meets innovation.",
        color: "from-amber-400 to-orange-300"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1621905252507-b35492ccba0b?q=80&w=2874&auto=format&fit=crop", // Industrial Factory / Panels
        title: "Precision Manufacturing.",
        subtitle: "Custom Control Panels",
        description: "We design and build high-quality PCC, MCC, and VFD panels. Tailored solutions ensuring safety, reliability, and operational efficiency.",
        color: "from-indigo-500 to-purple-400"
    }
];

// Filter specific products for the interactive display - Priority on Budget
const FEATURED_PRODUCTS = {
    retrofit: PRODUCTS.find(p => p.id === 'tata-retrofit'),
    sensors: PRODUCTS.find(p => p.id === 'tata-sensor-light'),
    controls: PRODUCTS.find(p => p.id === 'tata-touch-panel'),
    industrial: PRODUCTS.find(p => p.id === 'p2')
};

const Home: React.FC = () => {
    // Default to 'retrofit' (Budget friendly) instead of 'controls'
    const [activeTab, setActiveTab] = useState<'retrofit' | 'sensors' | 'controls' | 'industrial'>('retrofit');
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const productsRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);

    const activeProduct = FEATURED_PRODUCTS[activeTab];

    // Auto-advance Hero Slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextProduct = () => {
        setCurrentProductIndex((prev) => (prev + 1) % PRODUCTS.length);
    };

    const prevProduct = () => {
        setCurrentProductIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    };

    // Scroll to Products Section and Select the specific product in the slider
    const scrollToProduct = (productId: string | null = null) => {
        if (productId) {
            const index = PRODUCTS.findIndex(p => p.id === productId);
            if (index !== -1) {
                setCurrentProductIndex(index);
            }
        }

        const yOffset = -100; // Offset for navbar
        const element = productsRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Helper to get widget content based on slide
    const getWidgetContent = (index: number) => {
        if (index === 2) { // Industrial PLC
            return {
                title: 'Industrial Automation',
                status: 'Logic Active',
                scene: 'Production: Shift A',
                image: PRODUCTS.find(p => p.id === 'p2')?.imageUrl || ''
            };
        } else if (index === 3) { // Industrial Panels
            return {
                title: 'Power Distribution',
                status: 'Load Optimal',
                scene: 'Main Control Room',
                image: PRODUCTS.find(p => p.id === 'p5')?.imageUrl || ''
            };
        } else { // Home Automation
            return {
                title: 'Smart Hub',
                status: 'System Active',
                scene: 'Evening Relax Mode',
                image: PRODUCTS[3].imageUrl // Touch panel
            };
        }
    };

    const widgetContent = getWidgetContent(currentHeroSlide);

    return (
        <div className="font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
            {/* --- HERO SLIDER SECTION --- */}
            <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Background Image with Overlay */}
                        <div 
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ${index === currentHeroSlide ? 'scale-110' : 'scale-100'}`}
                            style={{ backgroundImage: `url("${slide.image}")` }}
                        ></div>
                        {/* Improved Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                    </div>
                ))}
                
                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32 lg:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-8">
                            <RevealOnScroll effect="fade-right" delay={100} key={`badge-${currentHeroSlide}`}>
                                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                                    <span className={`flex h-2 w-2 rounded-full shadow-[0_0_10px_currentColor] ${currentHeroSlide === 0 ? 'bg-blue-400 text-blue-400' : currentHeroSlide === 1 ? 'bg-green-400 text-green-400' : currentHeroSlide === 2 ? 'bg-amber-400 text-amber-400' : 'bg-purple-400 text-purple-400'}`}></span>
                                    <span className="text-white/90 text-sm font-medium tracking-wide uppercase">{HERO_SLIDES[currentHeroSlide].subtitle}</span>
                                </div>
                            </RevealOnScroll>
                            
                            <RevealOnScroll effect="fade-up" delay={200} key={`title-${currentHeroSlide}`}>
                                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                    {HERO_SLIDES[currentHeroSlide].title} <br />
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${HERO_SLIDES[currentHeroSlide].color}`}>
                                        Technovision.
                                    </span>
                                </h1>
                            </RevealOnScroll>
                            
                            <RevealOnScroll effect="fade-up" delay={300} key={`desc-${currentHeroSlide}`}>
                                <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                                    {HERO_SLIDES[currentHeroSlide].description}
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll effect="fade-up" delay={400}>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button 
                                        onClick={() => scrollToProduct()}
                                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-glow flex items-center justify-center group"
                                    >
                                        View Products
                                        <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                                    </button>
                                    <Link 
                                        to="/contact"
                                        className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center"
                                    >
                                        Free Consultation
                                    </Link>
                                </div>
                            </RevealOnScroll>

                            {/* Slider Indicators */}
                            <div className="flex gap-2 mt-8">
                                {HERO_SLIDES.map((_, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setCurrentHeroSlide(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentHeroSlide ? 'w-12 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Product Preview - Enhanced "Holographic" Widget */}
                        <div className="hidden lg:block relative perspective-1000">
                            <RevealOnScroll effect="fade-left" delay={400} duration={1000}>
                                {/* Glowing Aura */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${HERO_SLIDES[currentHeroSlide].color} rounded-[2rem] blur-3xl opacity-20 animate-pulse`}></div>
                                
                                {/* Main Glass Card */}
                                <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
                                    
                                    {/* Header Status */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${HERO_SLIDES[currentHeroSlide].color} text-white shadow-lg`}>
                                                {currentHeroSlide >= 2 ? <Factory size={20} /> : <Wifi size={20} />}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-display font-bold text-lg tracking-wide leading-none">
                                                    {widgetContent.title}
                                                </h3>
                                                <p className="text-xs text-green-400 font-medium uppercase tracking-wider flex items-center gap-1 mt-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                    {widgetContent.status}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-400 text-xs uppercase font-semibold">Uptime</p>
                                            <p className="text-white font-mono font-bold">99.9%</p>
                                        </div>
                                    </div>

                                    {/* Main Visual Display */}
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 mb-6 relative group shadow-inner border border-white/5">
                                        <img 
                                            src={widgetContent.image} 
                                            alt="Featured" 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                        
                                        {/* UI Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                        
                                        {/* Floating Control Overlay */}
                                        <div className="absolute bottom-5 left-5 right-5">
                                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex justify-between items-center">
                                                <div>
                                                    <p className="text-slate-300 text-[10px] font-bold uppercase tracking-wide">Current Scene</p>
                                                    <p className="text-white font-bold text-sm">
                                                        {widgetContent.scene}
                                                    </p>
                                                </div>
                                                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${currentHeroSlide === 1 ? 'bg-green-500' : 'bg-brand-600'}`}>
                                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                        <div className="text-center group cursor-pointer">
                                            <div className="flex justify-center mb-1 text-slate-500 group-hover:text-brand-400 transition-colors">
                                                <Zap size={18} />
                                            </div>
                                            <p className="text-[10px] text-slate-400 uppercase">Energy</p>
                                            <p className="text-white font-bold text-xs">-35%</p>
                                        </div>
                                        <div className="text-center group cursor-pointer border-l border-white/10">
                                            <div className="flex justify-center mb-1 text-slate-500 group-hover:text-green-400 transition-colors">
                                                <IndianRupee size={18} />
                                            </div>
                                            <p className="text-[10px] text-slate-400 uppercase">Savings</p>
                                            <p className="text-white font-bold text-xs">High</p>
                                        </div>
                                        <div className="text-center group cursor-pointer border-l border-white/10">
                                            <div className="flex justify-center mb-1 text-slate-500 group-hover:text-amber-400 transition-colors">
                                                <Smartphone size={18} />
                                            </div>
                                            <p className="text-[10px] text-slate-400 uppercase">Control</p>
                                            <p className="text-white font-bold text-xs">App</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW: VALUE PROPOSITION (WHY UPGRADE?) --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-slate-900">Why Automate With Us?</h2>
                            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                                You don't need a luxury villa to enjoy a smart home. We bring technology to every household with <span className="text-blue-600 font-semibold">precision engineering</span>.
                            </p>
                        </div>
                    </RevealOnScroll>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <RevealOnScroll delay={100} effect="fade-up">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-card-hover transition-all duration-300 group">
                                <div className="bg-white w-14 h-14 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Settings size={28} />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-slate-900">No Rewiring Required</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Our Retrofit modules sit behind your existing switchboard. No breaking walls, no dust, no painting needed.
                                </p>
                            </div>
                        </RevealOnScroll>
                         <RevealOnScroll delay={200} effect="fade-up">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-card-hover transition-all duration-300 group">
                                <div className="bg-white w-14 h-14 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                                    <IndianRupee size={28} />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-slate-900">Budget Friendly</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Start small with just one room or a few switches. Expand as you go. Solutions starting at pocket-friendly rates.
                                </p>
                            </div>
                        </RevealOnScroll>
                         <RevealOnScroll delay={300} effect="fade-up">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-card-hover transition-all duration-300 group">
                                <div className="bg-white w-14 h-14 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
                                    <Smartphone size={28} />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-slate-900">Simple App Control</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Control your lights, fans, and AC from anywhere in the world using the Tata Power EZ Home mobile app.
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE PRODUCT SPOTLIGHT (REORDERED & RESPONSIVE FIX) --- */}
            <section ref={solutionsRef} className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Explore Options</span>
                            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2 mb-4">Solutions For Every Need</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                                From basic retrofit modules to premium glass panels, choose what fits your lifestyle and budget.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* Interactive Tabs - Horizontal Scroll on Mobile */}
                        <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto pb-6 lg:pb-0 snap-x scrollbar-hide">
                            {[
                                { id: 'retrofit', label: 'Budget Retrofit', icon: Wifi, desc: 'Wireless, No Rewiring needed' },
                                { id: 'sensors', label: 'Energy Savers', icon: Activity, desc: 'Motion sensors & timers' },
                                { id: 'controls', label: 'Premium Touch', icon: Smartphone, desc: 'Glass panels & luxury feel' },
                                { id: 'industrial', label: 'Industrial', icon: Cpu, desc: 'PLC & Control Panels' },
                            ].map((tab, idx) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`
                                        relative overflow-hidden transition-all duration-300 flex items-center group flex-shrink-0 snap-center
                                        min-w-[280px] p-4 rounded-2xl lg:w-full lg:p-6 lg:text-left
                                        ${activeTab === tab.id 
                                            ? 'bg-white shadow-card ring-2 ring-brand-600 z-10 scale-[1.02]' 
                                            : 'bg-white/50 border border-slate-200 hover:bg-white hover:shadow-md'
                                        }
                                    `}
                                >
                                    <div className={`p-3 rounded-xl mr-4 flex-shrink-0 transition-colors ${activeTab === tab.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600'}`}>
                                        <tab.icon size={24} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className={`font-display font-bold text-lg ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-600'}`}>{tab.label}</h3>
                                        <p className="text-sm text-slate-400 mt-0.5">{tab.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Product View */}
                        <div className="w-full lg:w-2/3 h-[450px] lg:h-[550px]">
                            {activeProduct && (
                                <RevealOnScroll effect="zoom" duration={600} key={activeProduct.id} className="h-full">
                                    <div className="h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative group">
                                        <img 
                                            src={activeProduct.imageUrl} 
                                            alt={activeProduct.name} 
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                        
                                        <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                                            <div className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 inline-block rounded-full mb-4">
                                                {activeProduct.brand || 'Technovision'}
                                            </div>
                                            <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{activeProduct.name}</h3>
                                            <p className="text-slate-300 text-sm md:text-lg mb-8 max-w-xl leading-relaxed">{activeProduct.description}</p>
                                            
                                            <div className="flex flex-wrap gap-4">
                                                <Link 
                                                    to="/contact" 
                                                    className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center"
                                                >
                                                    Get Quote <ArrowRight size={18} className="ml-2" />
                                                </Link>
                                                <Link 
                                                    to="/products" 
                                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                                                >
                                                    View All Specs
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            )}
                        </div>
                    </div>
                </div>
            </section>

             {/* --- FEATURED PRODUCT SHOWCASE SLIDER --- */}
            <section ref={productsRef} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <RevealOnScroll>
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
                            <div className="text-center md:text-left">
                                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Product Spotlight</span>
                                <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">Explore Our Range</h2>
                            </div>
                            <div className="flex gap-2 mt-4 md:mt-0">
                                <button onClick={prevProduct} className="p-3 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-200 text-slate-600 hover:text-blue-600 transition-colors">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextProduct} className="p-3 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-200 text-slate-600 hover:text-blue-600 transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl h-[500px]">
                        <div 
                            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
                        >
                            {PRODUCTS.map((product) => (
                                <div key={product.id} className="min-w-full h-full relative flex items-center">
                                    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url("${product.imageUrl}")` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                                    
                                    <div className="relative z-10 p-8 md:p-16 max-w-3xl">
                                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-4">{product.brand || 'Premium Product'}</span>
                                        <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">{product.name}</h3>
                                        <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed border-l-4 border-blue-500 pl-6">
                                            {product.description}
                                        </p>
                                        <div className="flex gap-4">
                                            <Link to="/contact" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                                Request Quote
                                            </Link>
                                            <Link to="/products" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                                View Catalog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6 gap-2">
                        {PRODUCTS.map((_, idx) => (
                             <button 
                                key={idx}
                                onClick={() => setCurrentProductIndex(idx)}
                                className={`h-1.5 rounded-full transition-all ${idx === currentProductIndex ? 'w-10 bg-brand-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

             {/* --- STATS SECTION --- */}
             <section className="bg-brand-600 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                        <RevealOnScroll effect="fade-up" delay={0}>
                            <div className="p-4">
                                <h4 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">25+</h4>
                                <p className="text-brand-100 font-medium uppercase tracking-wide text-sm">Years Experience</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll effect="fade-up" delay={100}>
                            <div className="p-4">
                                <h4 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">500+</h4>
                                <p className="text-blue-100 font-medium uppercase tracking-wide text-sm">Projects Done</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll effect="fade-up" delay={200}>
                            <div className="p-4">
                                <h4 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">10+</h4>
                                <p className="text-blue-100 font-medium uppercase tracking-wide text-sm">Global Partners</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll effect="fade-up" delay={300}>
                            <div className="p-4">
                                <h4 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">100%</h4>
                                <p className="text-blue-100 font-medium uppercase tracking-wide text-sm">Client Satisfaction</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <RevealOnScroll effect="zoom">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Start Your Smart Home Journey</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            It costs less than you think to automate your home. Contact us today for a free site visit and estimate.
                        </p>
                        <Link 
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-glow transition-all transform hover:-translate-y-1"
                        >
                            Get Free Estimate
                        </Link>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
};

export default Home;