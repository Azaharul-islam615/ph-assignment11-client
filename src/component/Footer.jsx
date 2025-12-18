import React from "react";
import logo from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png"; // আপনার লোগো path

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Contests", href: "/all-contests" },
        { name: "Login", href: "/login" },
        { name: "Register", href: "/register" },
    ];

    return (
        <footer data-aos="fade-up" className="bg-black text-white py-10">
            <div  className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">

                {/* Logo */}
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-16 h-16 mb-2 rounded-full  " />
                    <span className="text-2xl font-bold">ContestHub</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="hover:text-indigo-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-white"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>

                    {/* Twitter */}
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-white"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-white"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.967 0 1.75.79 1.75 1.764s-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.338-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.566 2.837-1.566 3.034 0 3.596 1.996 3.596 4.59v5.609z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-400 mt-6 text-center">
                    © {new Date().getFullYear()} ContestHub. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
