import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Technovision</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            For All Your Automation Needs. From Industrial Automation since 1998 to cutting-edge Smart Homes.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.instagram.com/technovision.automation?utm_source=qr&igsh=MTZ3aDVuZ2thNGZkbw==" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link to="/solutions" className="hover:text-blue-400">Solutions</Link></li>
                            <li><Link to="/products" className="hover:text-blue-400">Products</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Our Solutions</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>KNX Home Automation</li>
                            <li>Tata Power EZ Home</li>
                            <li>Industrial PLC & SCADA</li>
                            <li>Control Panel Mfg.</li>
                            <li>Yale Digital Locks</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-0.5 shrink-0 text-blue-400" />
                                <span>C-3 Neelkanth Sadan, Plot-3A, Sec-10, Khanda Colony, New Panvel - 410206</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-blue-400" />
                                <span>9004614407</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-blue-400" />
                                <span>prashant@technovision.co.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Technovision Automation Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;