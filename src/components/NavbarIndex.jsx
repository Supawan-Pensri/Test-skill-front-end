"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // ตรวจจับการ scroll เพื่อเปลี่ยนสไตล์ของ navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Toggle menu สำหรับทุกขนาดหน้าจอ
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // รายการเมนู
    const menuItems = [
        { title: "Delivery | Pickup", href: "/delivery-pickup" },
        { title: "Ship Anywhere", href: "/shipping" },
        { title: "Catering", href: "/catering" },
        { title: "Membership", href: "/membership" },
        { title: "Digital Gift Cards", href: "/gift-cards" },
        { title: "Locations", href: "/locations" },
        { title: "FAQs", href: "/faqs" },
        { title: "Our Mission", href: "/mission" },
        { title: "Contact Us", href: "/contact" }
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-md py-2" : "bg-black py-4"
                }`}
        >
            <div className="w-full px-4">
                <div className="flex items-center">
                    {/* Menu Button - ฝั่งซ้าย */}
                    <div className="w-1/4">
                    
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    
                    {/* Logo - จัดกึ่งกลาง */}
                    <div className="w-2/4 text-center">
                        <Link href="/" className="text-xl font-bold text-white">
                            BrandName
                        </Link>
                    </div>

                    {/* พื้นที่ฝั่งขวา - แก้ไขเพิ่มไอคอน */}
                    <div className="w-1/4 flex justify-end items-center space-x-4">
                        {/* ไอคอนตะกร้าสินค้า */}
                        <Link href="/cart" className="relative group">
                            <svg 
                                className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition-opacity" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                >
                                </path>
                            </svg>
                            {/* Badge - สามารถเพิ่มตัวเลขจำนวนสินค้าในตะกร้าได้ */}
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        {/* ไอคอนโปรไฟล์ผู้ใช้ */}
                        <Link href="/account" className="group">
                            <svg 
                                className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition-opacity" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                >
                                </path>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Menu Overlay - แสดงเมื่อกดปุ่มเมนู (ทั้ง desktop และ mobile) */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
                        <div 
                            className="absolute top-0 left-0 w-full sm:w-80 h-full bg-black text-white shadow-lg py-8 px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-end mb-6">
                                <button 
                                    onClick={toggleMenu}
                                    className="focus:outline-none"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`py-2 px-4 hover:bg-gray-800 transition-colors rounded-md ${pathname === item.href ? "text-blue-400 font-medium" : "text-gray-300"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;