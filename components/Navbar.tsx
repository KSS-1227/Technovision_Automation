import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-500 border-b ${
                scrolled 
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-slate-200 py-3' 
                    : 'bg-transparent border-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className={`p-2 rounded-xl transition-colors duration-300 ${scrolled ? 'bg-brand-600 text-white' : 'bg-white/10 backdrop-blur-md border border-white/20 text-white'}`}>
                            <Activity size={22} className="group-hover:animate-pulse" />
                        </div>
                        <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                            Technovision
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                                        isActive 
                                            ? scrolled ? 'text-brand-600 bg-brand-50' : 'text-white bg-white/20 backdrop-blur-sm'
                                            : scrolled ? 'text-slate-600 hover:text-brand-600 hover:bg-slate-50' : 'text-slate-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
                <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl px-4 pt-2 pb-6 space-y-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            to={link.path}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                location.pathname === link.path
                                    ? 'bg-brand-50 text-brand-600'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;