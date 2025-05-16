'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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


export default function Navbar({ brandName = 'BrandName' }) {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [cartCount, setCartCount] = useState(0);

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

    return (
        <div className='sticky top-0 z-50'>
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
            <header className="sticky top-0 z-50 bg-black text-white p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <Menu className="w-6 h-6" />
                        </button>
                        <a href="/" className="text-2xl font-bold tracking-widest">BrandName</a>
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
        </div>
    )
}



