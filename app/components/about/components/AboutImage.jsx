"use client"; // Client Component

import Image from "next/image";

const AboutImg = "/images/About.png"; // Path to image in public folder

const AboutImage = () => {
    return (
        <div className="col-span-12 lg:col-span-5 flex justify-center">
            {/* Responsive image box with fixed width/height depending on screen size */}
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                    src={AboutImg}
                    alt="About Image"
                    width={500} // Needed for Next.js image optimization
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </div>
    );
};

export default AboutImage;
