import React, { useRef, useState, useEffect } from "react";

function CodePreviewSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-black text-white py-16 place-items-center"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2
                    className={`text-3xl font-bold mb-6 text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Explore the Code in Action
                </h2>
                <p
                    className={`text-lg text-center mb-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    See live previews of collaborative coding, version control, and deployment in real-time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {["Live Collaboration", "Code Review", "Instant Deployment"].map(
                        (feature, index) => (
                            <div
                                key={index}
                                className={`p-6 bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-white transition-transform transform ${isVisible ? "animate-zoom-in" : "scale-0"
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover the future of development.
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
            <video
                className={`w-5/6 h-2/3 object-cover transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/DeveloperCodingBackground.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default CodePreviewSection;