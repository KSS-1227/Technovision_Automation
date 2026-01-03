import React from 'react';

export interface Product {
    id: string;
    name: string;
    description: string;
    category: 'Home' | 'Industrial' | 'Security';
    imageUrl: string;
    brand?: string;
    imageFit?: 'contain' | 'cover';
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface Founder {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export interface Service {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    category: 'Home' | 'Industrial';
}

export interface Project {
    id: string;
    title: string;
    type: string;
    imageUrl: string;
}