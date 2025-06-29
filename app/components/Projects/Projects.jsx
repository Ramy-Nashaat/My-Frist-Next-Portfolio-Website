"use client"; // This tells Next.js that this component should run on the client side

import { useState } from "react";

// Array of front-end project objects with id, title, type (web/mobile), and image path
const frontEndProjects =
[
    {
        id: 1,
        title: "Portfolio Website",
        type: "web",
        img: "/images/projects/project1.png",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        type: "web",
        img: "/images/projects/project2.png",
    },
    {
        id: 3,
        title: "Food Delivery App",
        type: "mobile",
        img: "/images/projects/project3.png",
    },
    {
        id: 4,
        title: "News Aggregator Website",
        type: "web",
        img: "/images/projects/project4.png",
    },
    {
    id: 5,
    title: "Fitness Tracker",
    type: "mobile",
    img: "/images/projects/project5.png",
    },
    {
        id: 6,
        title: "Blog Website",
        type: "web",
        img: "/images/projects/project6.png",
    },
    {
        id: 7,
        title: "Crypto Price Tracker",
        type: "web",
        img: "/images/projects/project7.png",
    },
    {
        id: 8,
        title: "Weather App",
        type: "mobile",
        img: "/images/projects/project8.png",
    },
    {
        id: 9,
        title: "Online Learning Platform",
        type: "web",
        img: "/images/projects/project9.png",
    },
    {
        id: 10,
        title: "To-Do List App",
        type: "mobile",
        img: "/images/projects/project10.png",
    }
    ];

    const Projects = () => {
    // State to hold the currently displayed projects
    const [filteredProjects, setFilteredProjects] = useState(frontEndProjects);

    // Function to filter projects based on type (web, mobile, or all)
    const handleFilter = (type) => {
        if (type === "all") {
        setFilteredProjects(frontEndProjects); // Show all projects
        } else {
        // Filter the array by the selected type
        setFilteredProjects(frontEndProjects.filter((project) => project.type === type));
        }
    };

    return (
        <section id="Projects">
        <div className="mt-[100px] flex flex-col items-center justify-center">
            
            {/* Filter buttons */}
            <div className="flex gap-5 justify-center items-center">
            <button
                onClick={() => handleFilter("all")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                All
            </button>
            <button
                onClick={() => handleFilter("web")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Web
            </button>
            <button
                onClick={() => handleFilter("mobile")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Mobile
            </button>
            </div>

            {/* Render filtered project cards */}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            {filteredProjects.map((project) => (
                <a
                key={project.id}
                href="#"
                className="w-[300px] h-[300px] bg-gray-800 rounded-lg flex flex-col justify-center p-2"
                >
                {/* Project image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[80%] object-cover rounded-md"
                />
                {/* Project title */}
                <h2 className="text-white text-xl font-bold mt-2">{project.title}</h2>
                {/* Project type (web/mobile) */}
                <span className="text-gray-400">{project.type}</span>
                </a>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects; // Export the component to be used in other parts of the app
