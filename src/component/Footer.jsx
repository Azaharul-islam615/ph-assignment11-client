import React from "react";
import { Link } from "react-router";
import logo from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png";

const Footer = () => {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "All Contests", href: "/allcontest" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const legalLinks = [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Help Center", href: "/help" },
    ];

    const contestCategories = [
        { name: "Design Contests", href: "/allcontest?category=design" },
        { name: "Writing Contests", href: "/allcontest?category=writing" },
        { name: "Photography", href: "/allcontest?category=photography" },
        { name: "Innovation", href: "/allcontest?category=innovation" },
    ];

    const accountLinks = [
        { name: "Login", href: "/login" },
        { name: "Register", href: "/register" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "My Profile", href: "/dashboard/myProfile" },
    ];

    return (
        <footer data-aos="fade-up" className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="ContestHub Logo" className="w-12 h-12 rounded-full mr-3" />
                            <span className="text-2xl font-bold text-white">ContestHub</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your gateway to creativity. Join thousands of creators worldwide and showcase your talents
                            through exciting contests, win amazing prizes, and build your creative career.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.967 0 1.75.79 1.75 1.764s-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.338-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.566 2.837-1.566 3.034 0 3.596 1.996 3.596 4.59v5.609z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contest Categories */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contest Categories</h3>
                        <ul className="space-y-3">
                            {contestCategories.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
                        <ul className="space-y-3 mb-6">
                            {accountLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.slice(0, 2).map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} ContestHub. All rights reserved.
                        </div>

                        {/* Additional Legal Links */}
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Terms
                            </Link>
                            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Privacy
                            </Link>
                            <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Cookies
                            </Link>
                            <Link to="/help" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Help
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                
            </div>
        </footer>
    );
};

export default Footer;
