import { Product, Milestone, Founder, Service, Project } from './types';
import { Home, Factory, Lock, Blinds, Cpu, Zap, Wifi, ShieldCheck, Monitor, Layers, Smartphone, Speaker, Thermometer, Settings } from 'lucide-react';

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Customers', path: '/customers' },
    { label: 'Contact', path: '/contact' },
];

export const FOUNDERS: Founder[] = [
    {
        name: "Mr. Prashant Sadavarte",
        role: "Managing Director",
        bio: "A leader with 35+ years of experience in the Industrial Automation Industry. Expert in networking and strategic vision, having visited various countries to understand global market trends and developments.",
        imageUrl: "https://ui-avatars.com/api/?name=Prashant+Sadavarte&background=0f172a&color=fff&size=256"
    },
    {
        name: "Mrs. Medha Sadavarte",
        role: "Director Technical",
        bio: "Diploma in Electrical Engg. & Advance Dip in Computer Software. With 16 years of experience handling projects on-site & online, she ensures technical excellence and successful project delivery.",
        imageUrl: "https://ui-avatars.com/api/?name=Medha+Sadavarte&background=2563eb&color=fff&size=256"
    }
];

export const MILESTONES: Milestone[] = [
    { year: "1998", title: "Establishment", description: "Established as a Dealer for Industrial Automation Products." },
    { year: "2006", title: "Project Business", description: "Entered into Project Business - PLC, HMI, VFD, SCADA and integration projects." },
    { year: "2011", title: "Manufacturing", description: "Started Manufacturing of PLC, VFD, PCC & MCC control panels for OEM & Projects." },
    { year: "2018", title: "Home Automation", description: "Started Home Automation Division offering KNX solutions to convert homes into Smart/Digital Homes." },
    { year: "2022", title: "Tata Power Partnership", description: "Became the official channel partner for Tata Power EZ Home, offering Wi-Fi based Home Automation." }
];

export const PRODUCTS: Product[] = [
    // --- Budget / Retrofit Products (PRIORITY) ---
    {
        id: "tata-retrofit",
        name: "Retrofit Smart Modules",
        description: "Convert your existing switches into smart switches without changing wiring or switchboards. The most pocket-friendly way to upgrade your home.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
        imageFit: "cover"
    },
    {
        id: "tata-sensor-light",
        name: "Energy Saving Sensor Lights",
        description: "Cut down your electricity bills with motion-sensor lights. Perfect for passages, bathrooms, and parking areas. Automatic On/Off.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://m.media-amazon.com/images/I/51nKzAQuYQL.jpg",
        imageFit: "contain"
    },
    {
        id: "tata-tactile",
        name: "Smart Tactile Switches",
        description: "Get the smart experience while keeping the traditional click feel. Fits perfectly in standard Indian modular boxes.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://www.poscentral.in/images/detailed/28/Wi-Fi_Smart_Touch_Panel_to_control_3_electrical_points_2.PNG",
        imageFit: "contain"
    },
    
    // --- Premium Products ---
    {
        id: "tata-touch-panel",
        name: "Glass Touch Panels",
        description: "Premium glass finish for a modern look. Control scenes and dimming with a feather touch. A luxury upgrade.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/1/482317454/NI/DH/ZG/145102685/tata-power-ez-home-wi-fi-smart-elixir-glass-touch-panel-switches-1000x1000.jpg",
        imageFit: "contain"
    },
    {
        id: "tata-modular-touch",
        name: "Premium Modular Touch",
        description: "Capacitive touch switches designed to fit into standard modular boxes. Features backlit indicators and premium glass aesthetics.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.Ohkm5oTgIoTMxIEhx8XrqQHaCm?rs=1&pid=ImgDetMain&o=7&rm=3",
        imageFit: "contain"
    },
    {
        id: "tata-motion",
        name: "Motion Sensors",
        description: "Ceiling-mounted PIR sensors that automatically control lighting based on occupancy. Ideal for bathrooms, lobbies, and staircases.",
        category: "Home",
        brand: "Tata Power EZ Home",
        imageUrl: "https://www.safewise.com/app/uploads/2019/10/featured-beginners-guide-to-motion-sensors.jpg",
        imageFit: "contain"
    },

    // --- Industrial & Other Products ---
    {
        id: "p2",
        name: "PLC & HMI Systems",
        description: "Advanced Programmable Logic Controllers and Human Machine Interfaces for complex industrial logic.",
        category: "Industrial",
        brand: "Siemens / Delta / Allen-Bradley",
        imageUrl: "https://instrumentationtools.com/wp-content/uploads/2023/01/Difference-between-PLC-and-HMI-scaled.jpg",
        imageFit: "contain"
    },
    {
        id: "p4",
        name: "Zennio KNX Touch Panels",
        description: "Premium integrated automation. Capacitive touch panels and controllers for luxury homes.",
        category: "Home",
        brand: "Messung Zennio",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.V0Lw8KITVTo7ZZNtL7GcWgEsCl?rs=1&pid=ImgDetMain&o=7&rm=3",
        imageFit: "contain"
    },
    {
        id: "p5",
        name: "Industrial Control Panels",
        description: "Custom built PCC, MCC, and VFD panels designed for robust industrial environments.",
        category: "Industrial",
        brand: "Technovision Mfg",
        imageUrl: "https://citel.us/serverFile/getImageFile/2606480",
        imageFit: "contain"
    },
    {
        id: "p6",
        name: "Yale Digital Door Lock",
        description: "State-of-the-art keyless entry systems. Fingerprint, PIN, and Card access for ultimate home security.",
        category: "Security",
        brand: "Yale",
        imageUrl: "https://www.eboss.co.nz/assets/ProductImages/assa-abloy/yale-electronic-digital-door-lock-4109/YALE-DDL-4109-Fingerprint-NEW.jpg",
        imageFit: "contain"
    },
    {
        id: "p7",
        name: "CAME Gate Automation",
        description: "Premium UK-engineered automatic gate systems for sliding and swing gates.",
        category: "Security",
        brand: "CAME (UK)",
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.BwYfGbG9F7jfgcW6HdP2NgHaDL?rs=1&pid=ImgDetMain&o=7&rm=3",
        imageFit: "contain"
    }
];

export const SERVICES: Service[] = [
    { 
        title: "Budget Home Automation", 
        description: "Transform your existing home into a smart home without breaking walls or rewiring. Affordable, wireless, and quick to install using Tata Power EZ Home.", 
        icon: Wifi, 
        category: "Home" 
    },
    { 
        title: "Energy Saving Solutions", 
        description: "Motion sensors and timers to reduce electricity bills in homes and offices.", 
        icon: Zap, 
        category: "Home" 
    },
    { 
        title: "Access & Security", 
        description: "Digital Door Locks, Video Door Phones, and Gate Control.", 
        icon: Lock, 
        category: "Home" 
    },
    { 
        title: "Premium KNX Automation", 
        description: "Wired, decentralized systems for luxury villas and complete building management.", 
        icon: Home, 
        category: "Home" 
    },
    { 
        title: "PLC & HMI Programming", 
        description: "Expert logic development for Siemens, Delta, and Mitsubishi PLCs with custom HMI visualization.", 
        icon: Cpu, 
        category: "Industrial" 
    },
    { 
        title: "Industrial Panels", 
        description: "Design and manufacturing of Power Control Centers and Motor Control Centers.", 
        icon: Settings, 
        category: "Industrial" 
    },
];

export const PROJECTS: Project[] = [
    {
        id: "pr1",
        title: "Luxury Bungalows (6 Nos.)",
        type: "New Panvel",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "pr2",
        title: "Private Bungalow",
        type: "Ulwe",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "pr3",
        title: "Industrial Control Room",
        type: "MIDC Taloja",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "pr4",
        title: "HNI & Celebrity Residences",
        type: "Confidential Locations",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
];