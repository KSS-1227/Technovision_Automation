import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { ChevronDown } from 'lucide-react';

const Products: React.FC = () => {
    // Filter out low priority products (Yale and CAME) to move them to a separate section
    const lowPriorityIds = ['p6', 'p7'];
    const mainProducts = PRODUCTS.filter(p => !lowPriorityIds.includes(p.id));
    const otherProducts = PRODUCTS.filter(p => lowPriorityIds.includes(p.id));

    const [isMoreSolutionsOpen, setIsMoreSolutionsOpen] = useState(false);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <RevealOnScroll effect="fade-up">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
                        <p className="text-lg text-slate-600 max-w-3xl">
                            We partner with global leaders like Zennio, Tata Power, Yale, and Siemens to bring you the best hardware in the industry.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Main Priority Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {mainProducts.map((product, idx) => (
                        <RevealOnScroll key={product.id} effect="fade-up" delay={idx * 100}>
                            <ProductCard product={product} />
                        </RevealOnScroll>
                    ))}
                </div>

                {/* More Solutions Section (Lower Priority) */}
                {otherProducts.length > 0 && (
                    <div className="border-t border-slate-100 pt-10">
                        <button 
                            onClick={() => setIsMoreSolutionsOpen(!isMoreSolutionsOpen)}
                            className="w-full flex justify-between items-center text-left group focus:outline-none transition-all duration-300 rounded-lg hover:bg-slate-50 p-4 -mx-4"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">More Solutions</h2>
                                <p className="text-slate-500 mt-2">Additional automation and security products available upon request.</p>
                            </div>
                            <div className={`transform transition-transform duration-300 ${isMoreSolutionsOpen ? 'rotate-180' : ''} bg-slate-100 p-2 rounded-full group-hover:bg-brand-100`}>
                                <ChevronDown className="text-slate-600 group-hover:text-brand-600" size={24} />
                            </div>
                        </button>
                        
                        {isMoreSolutionsOpen && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 animate-fade-in">
                                {otherProducts.map((product, idx) => (
                                    <RevealOnScroll key={product.id} effect="fade-up" delay={idx * 100}>
                                        <ProductCard product={product} />
                                    </RevealOnScroll>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;