import React, { useEffect, useRef, useState } from 'react';

type RevealEffect = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom';

interface RevealOnScrollProps {
    children: React.ReactNode;
    effect?: RevealEffect;
    delay?: number; // in ms
    duration?: number; // in ms
    className?: string;
    threshold?: number; // 0 to 1
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
    children, 
    effect = 'fade-up', 
    delay = 0, 
    duration = 800,
    className = '',
    threshold = 0.1 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getEffectClass = () => {
        switch (effect) {
            case 'fade-up': return 'reveal-fade-up';
            case 'fade-down': return 'reveal-fade-down';
            case 'fade-left': return 'reveal-fade-left';
            case 'fade-right': return 'reveal-fade-right';
            case 'zoom': return 'reveal-zoom';
            default: return 'reveal-fade-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`reveal-base ${getEffectClass()} ${isVisible ? 'reveal-visible' : ''} ${className}`}
            style={{ 
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms` 
            }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;