import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
        
        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-24 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <RevealOnScroll effect="fade-up">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
                        <p className="text-lg text-slate-600">Have a project in mind? Let's discuss how we can automate your future.</p>
                    </RevealOnScroll>
                </div>

                <RevealOnScroll effect="zoom" duration={600}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Contact Info & Map */}
                        <div className="bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brand-600/20 p-3 rounded-lg">
                                            <MapPin className="text-brand-400" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Our Office</h3>
                                            <p className="text-slate-400 mt-1">
                                                C-3 Neelkanth Sadan, Plot-3A,<br />
                                                Sec-10, Khanda Colony,<br />
                                                New Panvel - 410206
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brand-600/20 p-3 rounded-lg">
                                            <Phone className="text-brand-400" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Phone</h3>
                                            <p className="text-slate-400 mt-1">9004614407</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-600/20 p-3 rounded-lg">
                                            <Mail className="text-blue-400" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Email</h3>
                                            <p className="text-slate-400 mt-1">prashant@technovision.co.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 h-64 w-full rounded-lg overflow-hidden bg-slate-800 border border-slate-700 relative">
                                {/* Embed a simple map iframe pointing to New Panvel */}
                                <iframe 
                                    title="Google Maps"
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    marginHeight={0} 
                                    marginWidth={0} 
                                    src="https://maps.google.com/maps?q=New%20Panvel%2C%20410206&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 lg:p-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center animate-fade-in">
                                    <h3 className="font-bold text-xl mb-2">Thank you!</h3>
                                    <p>We have received your message and will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none"
                                            placeholder="Tell us about your project requirements..."
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        Send Message <Send size={20} className="ml-2" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Contact;