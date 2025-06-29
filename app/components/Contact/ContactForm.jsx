"use client"; //  Indicates this is a client-side component in Next.js

//  Importing React useState hook and Font Awesome icons
import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  //  Initial form state for name, email, and message
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

  //  Handle input field changes (update formData state)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            }));
    };

  //  Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form submitted:", formData); // You can send this data to a backend or API
        setFormData({ name: "", email: "", message: "" }); // Clear the form after submit
    };

    return (
    <section id="Contact" className=" px-4">
        {/*  Container with glassmorphism and centered layout */}
        <div className="mt-30 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-lg text-white">

            {/*  Section title and subtitle */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Let's Contact to me</h2>
                <p className="text-[#adb7be] mt-2">
                Feel free to reach out by filling the form below or via social media.
                </p>
            </div>

            {/*  Form fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name input with icon */}
                <div className="relative">
                <FaUser className="absolute top-3 left-4 text-gray-400" />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                </div>

                {/* Email input with icon */}
                <div className="relative">
                <FaEnvelope className="absolute top-3 left-4 text-gray-400" />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                </div>

                {/* Message textarea with icon */}
                <div className="relative">
                <FaCommentDots className="absolute top-3 left-4 text-gray-400" />
                <textarea
                    name="message"
                    value={formData.message}
                    rows={5}
                    placeholder="Your Message"
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                ></textarea>
                </div>

                {/* Submit button */}
                <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                >
                Send Message
                </button>
            </form>

            {/*  Social media icons with links */}
            <div className="mt-8 flex justify-center gap-6 text-2xl">
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                    >
                        <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                </a>
            </div>
        </div>
    </section>
    );
};

export default ContactForm;
