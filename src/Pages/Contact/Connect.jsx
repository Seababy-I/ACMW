import React from 'react';
import LinkedInIcon from '../../Assets/Contact/LinkedIn.svg';
import InstagramIcon from '../../Assets/Contact/Insta.svg';
import GithubIcon from '../../Assets/Contact/GitHub.svg';
import MailIcon from '../../Assets/Contact/Mail.svg';
import LocationIcon from '../../Assets/Contact/Location.svg';

export default function Connect() {
   // This filter converts the icon color to #2B609E
    const brandBlueFilter = { filter: 'brightness(0) saturate(100%) invert(29%) sepia(43%) saturate(1137%) hue-rotate(176deg) brightness(94%) contrast(89%)' };
    return (
        <section className="relative z-10 w-full max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-start justify-between gap-12">

            {/* LEFT COLUMN: Title, Description, and Contact Box */}
            <div className="flex-1 flex flex-col gap-10">

                {/* 1. Animated Header Section */}
                <div className="group">
                    <h2 className="text-6xl font-black text-white mb-2 uppercase tracking-tighter">
                        Connect <span className="text-[#2B609E] animate-pulse">With Us</span>
                    </h2>
                    <div className="h-1.5 bg-[#2B609E] rounded-full w-48 transition-all duration-1000 group-hover:w-64"></div>

                    <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-md font-medium">
                        Explore our social media handles to know about our latest events, programs and insights.
                    </p>
                </div>

                {/* 2. Rectangle 13: Get in Touch Box */}
                <div
                    style={{
                        background: '#031224cc',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(1px)',
                        borderRadius: '19px',
                        width: '495.44px',
                        height: '283px'
                    }}
                    className="p-8 flex flex-col justify-center transition-transform hover:scale-[1.01]"
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>

                    <div className="space-y-6">
                        {/* Location - Icon now Blue */}
                        <div className="flex items-center gap-6">
                            <img 
                                src={LocationIcon} 
                                alt="Location" 
                                className="w-8 h-8" 
                                style={brandBlueFilter} 
                            />
                            <div>
                                <p className="text-white font-bold text-base">Visit Us:</p>
                                <p className="text-gray-400 text-sm">
                                    Manipal Institute Of Technology, Eshwar Nagar,<br/>
                                    Manipal, Karnataka
                                </p>
                            </div>
                        </div>

                        {/* Email - Icon now Blue */}
                        <div className="flex items-center gap-6 group">
                            <img 
                                src={MailIcon} 
                                alt="Email" 
                                className="w-8 h-8" 
                                style={brandBlueFilter} 
                            />
                            <div>
                                <p className="text-white font-bold text-base">Mail Us:</p>
                                <a
                                    href="mailto:acmw.manipal@gmail.com"
                                    className="text-gray-400 text-sm hover:text-[#2B609E] transition-colors duration-300"
                                >
                                    acmw.manipal@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Social Circles */}
            <div className="flex-1 flex flex-col items-center gap-10 pt-16">
                <div className="flex gap-16">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/acm-w-manipal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group social-circle-linkedin"
                    >
                        <div 
                            className="w-60 h-60 rounded-full flex flex-col items-center justify-center text-white transition-all duration-500 hover:scale-110 cursor-pointer"
                            style={{
                                background: 'rgba(43, 96, 158, 0.15)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(43, 96, 158, 0.3)',
                                boxShadow: '0 0 25px rgba(43, 96, 158, 0.4)',
                            }}
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12 invert transition-all duration-300" />
                            <span className="text-2xl font-bold mt-2">LinkedIn</span>
                            <span className="text-2xs opacity-60">Let's Connect</span>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/acmwmanipal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group social-circle-instagram"
                    >
                        <div 
                            className="w-60 h-60 rounded-full flex flex-col items-center justify-center text-white transition-all duration-500 hover:scale-110 cursor-pointer"
                            style={{
                                background: 'rgba(43, 96, 158, 0.15)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(43, 96, 158, 0.3)',
                                boxShadow: '0 0 25px rgba(43, 96, 158, 0.4)',
                            }}
                        >
                            <img src={InstagramIcon} alt="Instagram" className="w-12 h-12 invert transition-all duration-300" />
                            <span className="text-2xl font-bold mt-2">Instagram</span>
                            <span className="text-2xs opacity-60">Share your Ideas</span>
                        </div>
                    </a>
                </div>

                {/* GitHub */}
                <a
                    href="https://github.com/ACMW-Manipal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group social-circle-github"
                >
                    <div 
                        className="w-60 h-60 rounded-full flex flex-col items-center justify-center text-white transition-all duration-500 hover:scale-110 cursor-pointer"
                        style={{
                            background: 'rgba(43, 96, 158, 0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(43, 96, 158, 0.3)',
                            boxShadow: '0 0 25px rgba(43, 96, 158, 0.4)',
                        }}
                    >
                        <img src={GithubIcon} alt="GitHub" className="w-12 h-12 invert transition-all duration-300" />
                        <span className="text-2xl font-bold mt-2">GitHub</span>
                        <span className="text-2xs opacity-60">Fork & Contribute</span>
                    </div>
                </a>
            </div>

            <style>{`
                @keyframes pulse-glow-purple {
                    0%, 100% { 
                        box-shadow: 0 0 25px rgba(43, 96, 158, 0.4);
                    }
                    50% { 
                        box-shadow: 0 0 40px rgba(43, 96, 158, 0.6);
                    }
                }

                .social-circle-linkedin > div,
                .social-circle-instagram > div,
                .social-circle-github > div {
                    animation: pulse-glow-purple 3s ease-in-out infinite;
                }

                .social-circle-linkedin:hover > div {
                    background: rgba(0, 119, 181, 0.25) !important;
                    border: 1px solid rgba(0, 119, 181, 0.4) !important;
                    box-shadow: 0 0 40px rgba(0, 119, 181, 0.7) !important;
                    animation: none !important;
                }

                .social-circle-instagram:hover > div {
                    background: rgba(214, 41, 118, 0.25) !important;
                    border: 1px solid rgba(214, 41, 118, 0.4) !important;
                    box-shadow: 0 0 40px rgba(214, 41, 118, 0.7) !important;
                    animation: none !important;
                }

                .social-circle-github:hover > div {
                    background: rgba(147, 22, 249, 0.25) !important;
                    border: 1px solid rgba(147, 22, 249, 0.4) !important;
                    box-shadow: 0 0 40px rgba(147, 22, 249, 0.7) !important;
                    animation: none !important;
                }
            `}</style>
        </section>
    );
}
