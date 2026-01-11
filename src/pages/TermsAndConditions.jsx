import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen  py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Terms and Conditions
                    </h1>
                    <p className="text-[20px] text-gray-300">
                        Please read these terms and conditions carefully before using ContestHub
                    </p>
                    <div className="mt-2 text-sm text-gray-300">
                        Last updated: January 15, 2024
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="prose prose-lg max-w-none">

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By accessing and using ContestHub ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms and Conditions govern your use of ContestHub, including all content, services, and products available at or through the website.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Registration</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        To participate in contests, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">User Roles</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><strong>Normal Users:</strong> Can participate in contests and submit entries</li>
                                        <li><strong>Contest Creators:</strong> Can create, manage, and judge contests</li>
                                        <li><strong>Administrators:</strong> Can manage the platform and approve contests</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Contest Participation</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Contests are open to individuals who meet the specific requirements outlined in each contest description. Age restrictions may apply to certain contests.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Submission Guidelines</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>All submissions must be original work created by the participant</li>
                                        <li>Submissions must comply with contest-specific requirements and deadlines</li>
                                        <li>Plagiarism or copyright infringement will result in disqualification</li>
                                        <li>ContestHub reserves the right to remove inappropriate content</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Prizes</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contest Fees</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Some contests may require an entry fee. All payments are processed securely through Stripe. Entry fees are non-refundable unless the contest is cancelled by ContestHub.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Prize Distribution</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Winners will be notified via email and announced on the platform. Prizes will be distributed according to the timeline specified in each contest. Winners may be required to provide additional information for prize delivery.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">User Content</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        You retain ownership of your original content. By submitting content to ContestHub, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and promote your content in connection with the contest and platform.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Platform Content</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        All content on ContestHub, including text, graphics, logos, and software, is the property of ContestHub or its licensors and is protected by copyright and other intellectual property laws.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">Users are prohibited from:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Submitting false, misleading, or fraudulent information</li>
                                <li>Violating any applicable laws or regulations</li>
                                <li>Infringing on the rights of others</li>
                                <li>Attempting to manipulate contest results</li>
                                <li>Using automated systems to participate in contests</li>
                                <li>Harassing or threatening other users</li>
                                <li>Uploading malicious software or content</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use ContestHub. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                ContestHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the platform.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may terminate or suspend your account and access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about these Terms and Conditions, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-700"><strong>Email:</strong> support@contesthub.com</p>
                                <p className="text-gray-700"><strong>Address:</strong> ContestHub Inc., Dhaka, Bangladesh, IC 12345</p>
                                <p className="text-gray-700"><strong>Phone:</strong> +01317087713</p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;