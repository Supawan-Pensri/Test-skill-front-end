"use client";

import { useState, useRef } from 'react'; 

import {
    ChevronLeft,
    ChevronRight,
    ShoppingBag,
    Search,
    Menu,
    User,
    X
} from 'lucide-react';

export default function ErewhonStore() {
    // แก้ไขการประกาศ ref ให้ถูกต้อง
    const featuredScrollRef = useRef(null);

    const scrollLeft = () => {
        if (featuredScrollRef.current) {
            featuredScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (featuredScrollRef.current) {
            featuredScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const [cartCount, setCartCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const categories = [
        { name: 'Combo Plates', image: '/images/7575071000-1.png' },
        { name: 'Smoothies', image: '/images/image.png' },
        { name: 'Pantry', image: '/images/436e3b677d7a4394fdca3f35e8f731e5.webp' },
        { name: 'Dairy & Eggs', image: '/images/egg.webp' },
        { name: 'Meat & Seafood', image: '/images/meat.webp' },
        { name: 'Breakfast', image: '/images/breakfast.webp' },
        { name: 'Sandwiches & Wraps', image: '/images/sanwiche.webp' },
        { name: 'Coffee', image: '/images/coffee.webp' },
    ];
    
    const sidebarMenuItems = [
        { name: "Member", link: "#" },
        { name: "Browse", link: "#" },
        { name: "Routine", link: "#" },
        { name: "Ship Anywhere", link: "#" },
        { name: "Digital Gift Cards", link: "#" },
        { name: "Catering", link: "#" },
        { name: "Locations", link: "#" },
        { name: "FAQs", link: "#" },
        { name: "Our Mission", link: "#" },
        { name: "Contact Us", link: "#" },
    ];

    const featuredItems = [
        {
            // title: 'C.R.A.P. SMOOTHIE',
            // subtitle: 'WHO GIVES A CRAP',
            // cta: 'BECOME A MEMBER, TRY FOR FREE',
            image: '/images/sm.webp',
            backgroundColor: 'bg-pink-300'
        },
        {
            // title: 'DAILY SPECIALS',
            // subtitle: 'TUESDAY',
            image: '/images/sm.webp',
            backgroundColor: 'bg-amber-50'
        },
        {
            title: 'EAT IN SEASON',
            image: '/images/vg.webp',
            backgroundColor: 'bg-green-100'
        },
        {
            title: 'EREWHON',
            subtitle: 'EXPLORE THE',
            image: '/images/vg.webp',
            backgroundColor: 'bg-gray-100'
        },
    ];

    const hotBarItems = [
        { image: '/images/sm.webp', label: 'DAILY SPECIAL' },
        { image: '/images/vg.webp', label: 'DAILY SPECIAL' },
        { image: '/images/7575071000-1.png', label: 'DAILY SPECIAL' },
        { image: '/images/7575071000-1.png', label: 'DAILY SPECIAL' },
        { image: '/images/7575071000-1.png', label: 'DAILY SPECIAL' },
        { image: '/images/7575071000-1.png', label: 'DAILY SPECIAL' },
    ];

    return (
        <div className="min-h-screen bg-white relative">
            {/* Sidebar Menu */}
            <div className={`fixed left-0 top-0 h-full w-64 bg-gray-100 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <span className="font-semibold">WELCOME</span>
                    <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 p-4">
                    <button className="bg-gray-100 text-black px-4 py-2 rounded border border-gray-300 text-sm font-medium flex-1">
                        Create Account
                    </button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium flex-1">
                        Log in
                    </button>
                </div>

                <div className="py-2">
                    {sidebarMenuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="block px-4 py-3 text-gray-800 hover:bg-gray-200 transition-colors duration-150"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}


            {/* Header */}
            <header className="bg-black text-white p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <Menu className="w-6 h-6" />
                        </button>
                        <a href="#" className="text-2xl font-bold tracking-widest">BrandName</a>
                    </div>

                    <div className="relative w-full max-w-md mx-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-gray-800 rounded-full py-2 px-4 text-sm focus:outline-none text-white"
                        />
                        <Search className="absolute right-3 top-2 w-5 h-5 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="text-xs">Pickup (ASAP)</div>
                            <div className="text-xs">|</div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs">Grove</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>

                        <User className="w-6 h-6" />

                        <div className="relative">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                                {cartCount}
                            </span>
                        </div>

                        <button className="bg-gray-200 text-black px-4 py-2 rounded text-sm font-medium">
                            Log in
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* Popular Categories */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-medium">Popular Categories</h2>
                        <a href="#" className="text-sm flex items-center gap-1">
                            View All
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                        {categories.map((category, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-gray-100 rounded-lg overflow-hidden mb-2 w-full aspect-square relative">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm text-center">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Items Carousel */}
                <div className="mb-10 relative">
                    <div
                        ref={featuredScrollRef}
                        className="flex overflow-x-auto gap-4 hide-scrollbar scroll-smooth"
                    >
                        {featuredItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.backgroundColor} min-w-[280px] md:min-w-[320px] h-64 rounded-lg relative overflow-hidden flex-1`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title || "Featured item"}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    {item.subtitle && <p className="text-xs mb-1">{item.subtitle}</p>}
                                    {item.title && <h3 className="text-xl font-bold">{item.title}</h3>}
                                    {item.cta && <p className="text-xs mt-2">{item.cta}</p>}
                                </div>
                                <button className="absolute bottom-4 right-4 bg-white rounded-full p-1">
                                    <span className="flex items-center justify-center w-5 h-5">+</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* ปุ่มควบคุมการ scroll */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-1 text-white z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-1 text-white z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Today's Hot Bar Menu */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-medium">Today's Hot Bar Menu</h2>
                        <div className="flex items-center gap-2">
                            <a href="#" className="text-sm flex items-center gap-1">
                                View All
                            </a>
                            <div className="flex gap-1">
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {hotBarItems.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="bg-gray-100 relative mb-2">
                                    <span className="absolute top-2 left-2 bg-gray-100 px-2 py-1 text-xs">
                                        {item.label}
                                    </span>
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Accessibility Button */}
            <button className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full">
                <span className="sr-only">Accessibility</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6M12 6v12" />
                </svg>
            </button>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}