"use client"; // This tells Next.js that this component uses client-side features (like useState, useEffect)

import { useEffect, useState } from "react";

// Array of statistics to display with label and target number
const stats = [
    { label: "Projects", value: 120 },
    { label: "Users", value: 3400 },
    { label: "Awards", value: 15 },
    { label: "Years", value: 5 },
];

// Counter component handles animated counting from 0 to the given "end" value
const Counter = ({ end }) => {
  const [count, setCount] = useState(0); // Start from 0

    useEffect(() => {
        let current = 0;
        const duration = 2000; // Total animation time in milliseconds
        const frameDuration = 30; // Update interval in ms (about 33 updates per second)
        const totalFrames = Math.round(duration / frameDuration); // How many steps in total
        const increment = end / totalFrames; // How much to increase each frame

        // Start a timer that updates the count on each interval
        const timer = setInterval(() => {
            current += increment;

        if (current >= end) {
            clearInterval(timer); // Stop timer once we reach the target
            current = end;
        }

        setCount(Math.floor(current)); // Update state, floor to remove decimals
        }, frameDuration);

        return () => clearInterval(timer); // Cleanup on unmount
        }, [end]);

    return <span>{count}</span>; // Show current animated count
};

// Main Stats component that maps through each stat item and shows it with animation
const BottomBar = () => {
    return (
        <div className="w-full max-w-5xl px-8 py-6 border border-gray-300 rounded-3xl bg-white/10 backdrop-blur-md shadow-md grid grid-cols-2 md:grid-cols-4 text-center text-white gap-6 max-h-[100vh] overflow-y-auto mx-auto mt-8">
        {stats.map((item, index) => (
            <div key={index}>
            <h2 className="text-3xl font-bold text-white">
                <Counter end={item.value} /> {/* Animated number */}
            </h2>
            <p className="text-lg mt-1">{item.label}</p> {/* Label under number */}
            </div>
        ))}
        </div>
    )
}


export default BottomBar