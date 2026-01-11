import React from 'react';
import { Link } from 'react-router';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "10 Tips to Win Your First Design Contest",
            excerpt: "Learn the essential strategies and techniques that successful designers use to stand out in creative contests and win their first competition.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            category: "Design",
            author: "Sarah Mitchell",
            authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            date: "Jan 15, 2024",
            readTime: "5 min read",
            tags: ["Design", "Tips", "Beginner"]
        },
        {
            id: 2,
            title: "The Art of Creative Writing: Contest Edition",
            excerpt: "Discover how to craft compelling stories and articles that judges love. From structure to style, master the art of contest writing.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
            category: "Writing",
            author: "Michael Johnson",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            date: "Jan 12, 2024",
            readTime: "7 min read",
            tags: ["Writing", "Creative", "Contest"]
        },
        {
            id: 3,
            title: "Photography Contest Success: Lighting & Composition",
            excerpt: "Master the fundamentals of photography that win contests. Learn about lighting techniques, composition rules, and post-processing tips.",
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            category: "Photography",
            author: "Emma Davis",
            authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            date: "Jan 10, 2024",
            readTime: "6 min read",
            tags: ["Photography", "Lighting", "Composition"]
        },
        {
            id: 4,
            title: "Building Your Creative Portfolio for Contests",
            excerpt: "Create a stunning portfolio that showcases your best work and increases your chances of winning contests across different categories.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "Portfolio",
            author: "David Wilson",
            authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            date: "Jan 8, 2024",
            readTime: "8 min read",
            tags: ["Portfolio", "Creative", "Strategy"]
        },
        {
            id: 5,
            title: "Contest Networking: Building Creative Connections",
            excerpt: "Learn how to network effectively within the contest community, build lasting relationships, and collaborate with fellow creators.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: "Networking",
            author: "Lisa Chen",
            authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            date: "Jan 5, 2024",
            readTime: "4 min read",
            tags: ["Networking", "Community", "Collaboration"]
        },
        {
            id: 6,
            title: "The Psychology of Winning: Contest Mindset",
            excerpt: "Develop the right mindset and mental strategies that separate winners from participants. Learn to handle pressure and stay motivated.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
            category: "Psychology",
            author: "Robert Taylor",
            authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            date: "Jan 3, 2024",
            readTime: "6 min read",
            tags: ["Psychology", "Mindset", "Motivation"]
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            Design: "bg-blue-100 text-blue-800",
            Writing: "bg-green-100 text-green-800",
            Photography: "bg-purple-100 text-purple-800",
            Portfolio: "bg-orange-100 text-orange-800",
            Networking: "bg-pink-100 text-pink-800",
            Psychology: "bg-indigo-100 text-indigo-800"
        };
        return colors[category] || "bg-gray-100 text-gray-800";
    };

    return (
        <div className="pt-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
                    </h2>
                    <p data-aos="fade-up" className="text-[20px] text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the latest tips, strategies, and insights from our community of
                        successful creators and contest experts.
                    </p>
                </div>

                {/* Featured Blog Post */}
                <div data-aos="fade-up" className="mb-16">
                    <div data-aos="fade-up" className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div data-aos="fade-up" className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12">
                                <div className="flex items-center mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}>
                                        {blogPosts[0].category}
                                    </span>
                                    <span className="ml-4 text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    {blogPosts[0].title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={blogPosts[0].authorImage}
                                            alt={blogPosts[0].author}
                                            className="w-10 h-10 rounded-full object-cover mr-3"
                                            onError={(e) => {
                                                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(blogPosts[0].author) + "&background=6366f1&color=fff&size=40";
                                            }}
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                                            <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
                                        </div>
                                    </div>
                                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.slice(1).map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={post.authorImage}
                                            alt={post.author}
                                            className="w-8 h-8 rounded-full object-cover mr-2"
                                            onError={(e) => {
                                                e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(post.author) + "&background=6366f1&color=fff&size=32";
                                            }}
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                                            <p className="text-gray-500 text-xs">{post.date}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                                </div>

                                <div  className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Blogs CTA */}
                <div className="text-center">
                    <Link to="#" data-aos="fade-up" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View All Blog Posts
                        <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Newsletter Signup */}
               
            </div>
        </div>
    );
};

export default Blogs;