"use client"
import Image from "next/image"; // Next.js optimized Image component

const HeroImg = "/images/hero-image.png"; // Path to your hero image (should be inside /public/images)


const Right = () => {
    return (
        <div className="col-span-5">
                <div className="rounded-full w-[400px] h-[400px] lg:w-[500px] lg:h-[400px]">
                    <Image
                    src={HeroImg}
                    alt="Hero Image"
                    width={500} // Required for Next.js Image optimization
                    height={500}
                    className="rounded-full object-cover w-full h-full"
                    />
                </div>
            </div>
    )
}

export default Right;