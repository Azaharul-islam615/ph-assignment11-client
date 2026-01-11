import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Graphic Designer",
            company: "Creative Studio Inc.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            content: "ContestHub has transformed my creative career! I've won 5 design contests and connected with amazing clients. The platform is user-friendly and the community is incredibly supportive.",
            rating: 5,
            contestsWon: 5,
            category: "Design"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Content Writer",
            company: "Freelance Writer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            content: "As a writer, ContestHub gave me the perfect platform to showcase my skills. The writing contests are well-organized, and the feedback from judges has helped me improve tremendously.",
            rating: 5,
            contestsWon: 3,
            category: "Writing"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Photographer",
            company: "Visual Arts Studio",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: "The photography contests on ContestHub are incredible! I've not only won prizes but also gained recognition in the photography community. It's the best platform for creative professionals.",
            rating: 5,
            contestsWon: 7,
            category: "Photography"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "UI/UX Designer",
            company: "Tech Innovations Ltd.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: "ContestHub's interface design contests pushed me to think outside the box. The competition is healthy, and the prizes are substantial. I've grown both professionally and creatively.",
            rating: 5,
            contestsWon: 4,
            category: "UI/UX"
        },
        {
            id: 5,
            name: "Lisa Park",
            role: "Marketing Specialist",
            company: "Brand Solutions Co.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            content: "The idea pitching contests on ContestHub are fantastic! I've presented innovative marketing concepts and received valuable feedback. It's a great platform for professional growth.",
            rating: 5,
            contestsWon: 2,
            category: "Marketing"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div  className="pt-16 z-0 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-2">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Creators Say</span>
                    </h2>
                    <p data-aos="fade-up" className="text-[20px] text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Hear from our amazing community of creators who have found success,
                        growth, and recognition through ContestHub contests.
                    </p>
                </div>

                {/* Main Testimonial */}
                <div className="mb-16 z-0">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

                        <div data-aos="fade-up" className="relative ">
                            {/* Quote Icon */}
                            <div className="text-center mb-8">
                                <svg className="w-16 h-16 text-purple-300 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                    "{testimonials[currentTestimonial].content}"
                                </p>

                                {/* Rating */}
                                <div className="flex justify-center mb-6">
                                    {renderStars(testimonials[currentTestimonial].rating)}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center justify-center space-x-4">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                                        onError={(e) => {
                                            e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonials[currentTestimonial].name) + "&background=8b5cf6&color=fff&size=64";
                                        }}
                                    />
                                    <div className="text-left">
                                        <h4 className="text-xl font-bold text-gray-900">
                                            {testimonials[currentTestimonial].name}
                                        </h4>
                                        <p className="text-purple-600 font-medium">
                                            {testimonials[currentTestimonial].role}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {testimonials[currentTestimonial].company}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 flex justify-center z-0 space-x-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {testimonials[currentTestimonial].contestsWon}
                                        </div>
                                        <div className="text-sm text-gray-500">Contests Won</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">
                                            {testimonials[currentTestimonial].category}
                                        </div>
                                        <div className="text-sm text-gray-500">Category</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center space-x-2 mb-12 z-0">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? 'bg-purple-600 w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Section */}
               
            </div>
        </div>
    );
};

export default Testimonials;