"use client";

import { useState, useRef } from 'react'; 

import {
    ChevronLeft,
    ChevronRight,
    ShoppingBag,
    Search,
    Menu,
    User,
    X,
    Mail,
    Lock
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
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // ตรงนี้จะเป็นการจัดการตรวจสอบข้อมูลและเข้าสู่ระบบ
        console.log('Logging in with:', { email, password, rememberMe });
        // สำหรับตัวอย่าง เราจะแค่ปิด modal และแสดงข้อความ
        alert(`ล็อกอินสำเร็จ! ยินดีต้อนรับ ${email}`);
        closeLoginModal();
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
                    <button 
                        className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium flex-1"
                        onClick={openLoginModal}
                    >
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

                        {/* <User className="w-6 h-6" /> */}

                        <div className="relative">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                                {cartCount}
                            </span>
                        </div>

                        <button 
                            className="bg-gray-200 text-black px-4 py-2 rounded text-sm font-medium"
                            onClick={openLoginModal}
                        >
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
                        <a href="/home" className="text-sm flex items-center gap-1">
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
                            <a href="/home" className="text-sm flex items-center gap-1">
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
            {/* <button className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full">
                <span className="sr-only">Accessibility</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6M12 6v12" />
                </svg>
            </button> */}

            {/* Login Modal */}
            {isLoginModalOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl relative">
                            <button
                                onClick={closeLoginModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                            
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-black hover:text-gray-700">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div>
                                        <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            <span className="sr-only">Sign in with Google</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                            </svg>
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            <span className="sr-only">Sign in with Facebook</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 text-center text-sm">
                                <p className="text-gray-600">
                                    Don't have an account? 
                                    <a href="#" className="font-medium text-black hover:text-gray-700 ml-1">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}

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