import React, { useState } from 'react';
import { Link } from 'react-router';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is ContestHub?",
            answer: "ContestHub is a comprehensive contest management platform where users can participate in various creative contests including design, writing, photography, idea pitching, and more. It connects creators worldwide and provides opportunities to showcase talents and win amazing prizes."
        },
        {
            question: "How do I participate in a contest?",
            answer: "To participate in a contest, first register for an account, browse available contests, select the one you're interested in, and complete the registration process. Some contests may require a participation fee which can be paid securely through our integrated payment system."
        },
        {
            question: "What types of contests are available?",
            answer: "ContestHub offers various contest categories including Creative Design & Art competitions, Writing & Article contests, Photography & Visual Art challenges, Idea Pitching & Innovation contests, and many more creative categories to suit different talents and interests."
        },
        {
            question: "How do I create and host my own contest?",
            answer: "To create a contest, you need to have a Contest Creator role. Once approved, you can access the dashboard to create new contests, set rules, deadlines, prizes, and manage submissions. All contests go through an admin approval process before going live."
        },
        {
            question: "What are the different user roles?",
            answer: "ContestHub has three main roles: Normal Users (can participate in contests), Contest Creators (can create and manage contests), and Admins (can approve contests, manage users, and oversee the platform). Role upgrades can be requested through the platform."
        },
        {
            question: "How does the payment system work?",
            answer: "We use Stripe for secure payment processing. When joining paid contests, you'll be redirected to a secure payment page. All transactions are encrypted and safe. Winners receive their prizes according to the contest terms and conditions."
        },
        {
            question: "How are winners selected and announced?",
            answer: "Winners are selected by contest creators based on the contest criteria. Once a contest ends, winners are announced on the platform with their names and photos displayed. Winners also receive notifications and their prizes as specified in the contest details."
        },
        {
            question: "Can I track my contest submissions?",
            answer: "Yes! In your dashboard, you can view all your participated contests, submitted tasks, and their status. You can also see your winning contests and track your overall performance through the leaderboard feature."
        },
        {
            question: "Is ContestHub mobile-friendly?",
            answer: "Absolutely! ContestHub is fully responsive and works seamlessly on mobile devices, tablets, and desktops. You can participate in contests, submit entries, and manage your account from any device with an internet connection."
        },
        {
            question: "How do I contact support?",
            answer: "You can reach our support team through the Contact page (available to logged-in users), or check our Help section. We're here to assist you with any questions about contests, payments, technical issues, or general platform usage."
        }
    ];

    return (
        <div className="mb-6">
            <div className="max-w-11/12 mx-auto  ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 data-aos="fade-up" className="text-4xl font-bold text-white pt-16 mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p data-aos="fade-up" className="text-[20px] text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about ContestHub, contests, participation, and more.
                    </p>
                </div>

                {/* FAQ Items */}
                <div data-aos="fade-up" className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div data-aos="fade-up"
                            key={index}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                            >
                                <span className="text-lg font-semibold text-gray-600 pr-4">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                    <svg
                                        className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="text-gray-600 text-[18px]  leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div data-aos="fade-up" className="mt-12 text-center">
                    <div className="bg-blue-600 rounded-lg p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-blue-100 text-[20px] font-medium mb-6">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <Link to="/contact" className="bg-white font-semibold text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;