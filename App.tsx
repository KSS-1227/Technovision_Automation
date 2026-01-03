import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Contact from './pages/Contact';
import RevealOnScroll from './components/RevealOnScroll';
import { PROJECTS } from './constants';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Customers Page (Simple version reusing existing components layout)
const Customers: React.FC = () => (
    <div className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll effect="fade-up">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Our Portfolio</h1>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    Explore a selection of our completed projects across residential and industrial sectors.
                </p>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, idx) => (
                    <RevealOnScroll key={project.id} effect="fade-up" delay={idx * 150}>
                        <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                            <div className="relative h-64 overflow-hidden">
                                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-6">
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{project.type}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2">{project.title}</h3>
                                <p className="text-slate-500 text-sm mt-2">
                                    Fully integrated automation system delivering efficiency and comfort.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </div>
);

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;