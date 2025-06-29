"use client";
import Stats from "./Components/Stats";
import React from "react";
import Left from "./Components/Left";
import Right from "./Components/Right";

const Home = () => {
    return (
        <section id="Home" className="px-4 lg:px-12 py-8">
        {/* Grid of Left and Right */}
        <div className=" mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <Left />
            <Right />
        </div>

        {/* Stats Section - appears below Left & Right */}
        <div className="mt-12 flex justify-center">
            <Stats />
        </div>
        </section>
    );
};

export default Home;
