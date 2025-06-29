"use client"; // Mark this file as a Client Component

import AboutImage from "./components/AboutImage"; // Import image component
import AboutInfo from "./components/AboutInfo";   // Import text/info component

const About = () => {
    return (
        <section id="About" className="px-4 lg:px-12 py-16">
            {/* Responsive grid: column layout on small screens, row layout on large screens */}
            <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-12 gap-10">
                <AboutImage /> {/* Image section */}
                <AboutInfo />  {/* Text and interaction section */}
            </div>
        </section>
    );
};

export default About;
