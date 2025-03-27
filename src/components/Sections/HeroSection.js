"use client";
import React, { useState, useEffect, useRef } from "react";

const HomeSection = () => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [doorsOpen, setDoorsOpen] = useState(false);
    const [textAnimation, setTextAnimation] = useState(false);
    const bannerRef = useRef(null);

    const boxData = [
        { id: 1, image: "/images/web-design.jpg", content: "Web Design" },
        { id: 2, image: "/images/ecommerce.jpg", content: "E-Commerce" },
        { id: 3, image: "/images/seo.jpg", content: "SEO Optimization" },
        { id: 4, image: "/images/branding.jpg", content: "Branding" },
    ];

    const [circleContent, setCircleContent] = useState(boxData[0].content);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOverlayVisible(false);
            setDoorsOpen(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current.classList.add("banner-animation");
        }
    }, []);

    const handleBoxClick = (content) => {
        setTextAnimation(false);
        setTimeout(() => {
            setCircleContent(content);
            setTextAnimation(true);
        }, 100);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            {overlayVisible && (
                <div className="absolute inset-0 flex">
                    <div className={`w-1/2 h-full bg-black transition-all duration-1000 ${doorsOpen ? "translate-x-[-100%]" : ""}`}></div>
                    <div className={`w-1/2 h-full bg-black transition-all duration-1000 ${doorsOpen ? "translate-x-full" : ""}`}></div>
                </div>
            )}

            <div className="w-full max-w-7xl px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold uppercase mb-4 animate-fade-in">
                        TOP WEBSITE <br />
                        <span className="text-yellow-500">DESIGN COMPANY</span>
                    </h1>
                    <h2 className="text-lg lg:text-2xl font-light mb-6 animate-fade-in">
                        Since 2023
                    </h2>
                    <button
                        className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
                        onClick={() => (window.location.href = "/Contact")}
                    >
                        Work With Us
                    </button>
                    <div className="mt-8 text-lg flex items-center justify-center lg:justify-start">
                        Scroll Down <span className="ml-2 animate-bounce">↓</span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center mt-12 lg:mt-0">
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-yellow-500 flex items-center justify-center mb-6">
                        <p className={`text-lg text-center transition-opacity duration-500 ${textAnimation ? "opacity-100" : "opacity-0"}`}>
                            {circleContent}
                        </p>
                    </div>
                    <button
                        className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
                        onClick={() => (window.location.href = "/services")}
                    >
                        View More
                    </button>
                    
                    {/* Service Boxes */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {boxData.map((box) => (
                            <div
                                key={box.id}
                                className="w-32 h-32 md:w-40 md:h-40 bg-cover bg-center flex items-center justify-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105"
                                style={{ backgroundImage: `url(${box.image})` }}
                                onClick={() => handleBoxClick(box.content)}
                            >
                                <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded">{box.content}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
