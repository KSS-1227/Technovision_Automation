import React from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover border border-slate-100/50 shadow-card h-full flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-50">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className={`w-full h-full ${product.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
                {/* Brand Label */}
                {product.brand && (
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 opacity-80">
                        {product.brand}
                    </div>
                )}
                
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {product.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <Link to="/contact" className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 flex items-center transition-colors">
                        Inquiry <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;