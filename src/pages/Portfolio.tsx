import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Tilt from 'react-parallax-tilt'; // New!
import extremePerformance from '../../public/images/extreme_logo.svg';
import noblAI from '../../public/images/Group-1150-1-1.png';
import accesibe from '../../public/images/logo.svg';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const projects = [
        {
            title: "Extreme Performance – Admin Dashboard",
            description: "Built a complete admin dashboard with filters and integrated BigCommerce checkout system.",
            image: extremePerformance,
        },
        {
            title: "Accessible BigCommerce App",
            description: "Developed a UI to customize accessibility features on BigCommerce stores.",
            image: accesibe,
        },
        {
            title: "Nobl AI – SaaS Subscription Panel",
            description: "Created a user dashboard to manage subscriptions, invoices, and generate API keys.",
            image: noblAI,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans scroll-smooth">
            {/* Navbar */}
            <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg sticky top-0 z-50">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">Sandeep Kumar</h1>
                <nav className="space-x-6 hidden md:flex">
                    {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-teal-400 transition duration-300 font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center justify-center text-center px-4 py-32" data-aos="fade-up">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                    Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Sandeep</span>
                </h2>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">MERN Stack Developer | React & Node.js Enthusiast</p>
                <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                    View My Work
                </a>
            </section>

            {/* Skills Section */}
            <section id="skills" className="px-6 py-20 bg-gray-900" data-aos="fade-up">
                <h3 className="text-4xl font-bold text-center mb-16">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                    {[FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5].map((Icon, idx) => (
                        <div key={idx} className="transform hover:scale-110 transition duration-300">
                            <Icon className="text-6xl text-teal-400 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold">
                                {["React.js", "Node.js", "PostgreSQL & MySQL", "CSS3", "HTML5"][idx]}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-6 py-20 bg-gray-800">
                <h3 className="text-4xl font-bold text-center mb-16" data-aos="zoom-in">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <Tilt
                            key={idx}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            glareEnable={true}
                            glareMaxOpacity={0.2}
                            className="bg-gray-900 p-6 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-300 group"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center justify-center h-44 mb-6 bg-gray-700 rounded-xl overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="text-2xl font-bold mb-3 text-center">{project.title}</h4>
                            <p className="text-gray-400 mb-6 text-center text-sm">{project.description}</p>
                            <div className="text-center">
                                <a
                                    href="#"
                                    className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-110"
                                >
                                    View Project
                                </a>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-20 bg-gray-900" data-aos="fade-right">
                <h3 className="text-4xl font-bold text-center mb-12">About Me</h3>
                <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
                    I'm a passionate MERN stack developer from Una, Himachal Pradesh. I build modern web apps using React, Node, and PostgreSQL. Previously worked at The Brihaspati Infotech Pvt. Ltd. as a PHP Developer. I'm experienced in creating scalable, high-performance web applications and have a strong foundation in both front-end and back-end development.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 py-20 bg-gray-800" data-aos="fade-left">
                <h3 className="text-4xl font-bold text-center mb-12">Contact Me</h3>
                <form className="max-w-2xl mx-auto space-y-6">
                    <input className="w-full px-5 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" placeholder="Your Name" />
                    <input className="w-full px-5 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" type="email" placeholder="Your Email" />
                    <textarea className="w-full px-5 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Message" rows={5}></textarea>
                    <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 rounded-full transition-transform transform hover:scale-110">
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-900 text-gray-400 text-sm">
                © {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
            </footer>
        </div>
    );
}
