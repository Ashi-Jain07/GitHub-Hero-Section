import { useState } from "react";
import { useEffect } from "react";

function HeroSection() {
  const [text, setText] = useState("");
  const heroText = "Welcome to Your GitHub Journey";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(heroText.slice(0, index + 1));
      index++;
      if (index === heroText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in">
          {text}
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          GitHub is where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
        </p>
        <div className="space-x-4">
          <a
            href="https://github.com/signup"
            className="inline-block bg-white text-blue-500 hover:bg-transparent hover:text-white hover:border-2 hover:border-white px-5 py-3 rounded-lg font-medium hover:bg-blue-100 transition-transform transform hover:scale-105"
          >
            Sign Up
          </a>
          <a
            href="https://github.com/login"
            className="inline-block bg-transparent border-2 border-white px-5 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-500 transition-transform transform hover:scale-105"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;