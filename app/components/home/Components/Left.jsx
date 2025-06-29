"use client"
import { TypeAnimation } from "react-type-animation"; // Text typing animation component

const Left = () => { 
    return (
        <div className="col-span-7 place-self-center">
                <h1 className="text-blue-600 mb-6 text-4xl font-extrabold">
                    Hello, I'm{" "}
                    <span className="text-white">David</span>
                </h1>

                {/* Typing animation for profession titles */}
                <h1 className="text-white mb-4 text-3xl lg:text-5xl font-bold">
                    I'm{" "}
                    <TypeAnimation
                    sequence={[
                        "a Web Developer",
                        2000,
                        "a Software Engineer",
                        2000,
                        "a Tech Enthusiast",
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-white"
                    />
                </h1>

                {/* Short bio/description */}
                <p className="text-[#adb7be] text-lg lg:text-xl">
                    I'm a software engineer with a passion for building web applications.
                    I love creating intuitive and dynamic user experiences using the latest technologies.
                </p>

            {/* Call-to-action buttons */}
                <div>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Hire Me
                    </button>
                    <button className="ml-4 mt-8 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
                    Download Resume
                    </button>
                </div>
            </div>
    );
}

export default Left;