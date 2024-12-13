import React, { useEffect, useState, useRef } from "react";

function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id="pricing"
      className="bg-gray-100 py-16 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold mb-6 text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          Pricing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Free", "Pro", "Enterprise"].map((plan, index) => (
            <div
              key={index}
              className={`p-6 pb-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg shadow-black hover:shadow-black hover:shadow-xl transition-all transform hover:scale-110 ${isVisible ? "animate-zoom-in" : "scale-0"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{plan}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;