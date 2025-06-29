"use client"; // Client Component since it uses useState

import { useState } from "react";

const AboutInfo = () => {
    // State for displaying selected content (Skills or Education)
    const [data, setData] = useState({});

    // Show Skills when user clicks "Skills" button
    const handleSkillsBtn = () => {
        setData({
            title: "Skills",
            listItems: [
                "JavaScript",
                "React.js",
                "Node.js",
                "Next.js",
                "HTML & CSS",
                "Tailwind CSS",
            ],
        });
    };

    // Show Education when user clicks "Education" button
    const handleEducationBtn = () => {
        setData({
            title: "Education",
            listItems: [
                "Bachelor of Science in Computer Science",
                "Master of Science in Software Engineering",
                "Certified Full Stack Developer",
            ],
        });
    };

    return (
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-start">
            {/* Section title */}
            <h1 className="text-blue-600 mb-4 text-3xl sm:text-4xl font-extrabold">
                About Me
            </h1>

            {/* Description text */}
            <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
                I'm a software engineer with a passion for building web applications.
                I love creating intuitive and dynamic user experiences using the latest technologies.
                With a background in computer science and several years of experience in the industry,
                I have honed my skills in various programming languages and frameworks.
                My goal is to leverage technology to solve real-world problems and make a positive impact.
            </p>

            {/* Buttons to toggle content */}
            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    onClick={handleSkillsBtn}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Skills
                </button>
                <button
                    onClick={handleEducationBtn}
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >
                    Education
                </button>
            </div>

            {/* Display the selected section */}
            {data.title && (
                <div className="w-full">
                    {/* Section subtitle */}
                    <h2 className="text-blue-600 text-xl sm:text-2xl font-bold mb-2">{data.title}</h2>

                    {/* List of items (skills or education) */}
                    <ul className="list-disc list-inside text-[#adb7be] max-h-[200px] overflow-y-auto">
                        {data.listItems && data.listItems.map((item, index) => (
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AboutInfo;
