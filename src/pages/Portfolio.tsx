import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import me from '/public/images/me.png';

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
            icon: "📊"
        },
        {
            title: "Accessible BigCommerce App",
            description: "Developed a UI to customize accessibility features on BigCommerce stores.",
            icon: "♿"
        },
        {
            title: "Nobl AI – SaaS Subscription Panel",
            description: "Created a user dashboard to manage subscriptions, invoices, and generate API keys.",
            icon: "🧠"
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth font-inter overflow-hidden">
            {/* Navbar */}
            <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                    Sandeep Kumar
                </h1>
                <nav className="space-x-6 hidden md:flex">
                    {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-teal-500 transition duration-300 font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-[100px] py-25 bg-gradient-to-br from-white via-cyan-50 to-white" data-aos="fade-up">
                <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Sandeep</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-600 mb-8">
                        <Typewriter
                            words={['MERN Stack Developer', 'React & Node.js Enthusiast', 'Web Performance Optimizer']}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                    <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                        View My Work
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-[6px] border-white">
                        <img
                            src="/images/me.png"
                            alt="Sandeep Kumar"
                            className="w-full h-full object-cover object-center scale-130 transition-transform duration-500 ease-in-out"
                            style={{
                                imageRendering: 'auto',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                                WebkitTransform: 'translateZ(0)',
                            }}
                        />
                    </div>
                </div>

            </section>

            {/* Skills Section */}
            <section id="skills" className="px-6 py-20 bg-gray-50" data-aos="fade-up">
                <h3 className="text-4xl font-bold text-center mb-16">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                    {[FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5].map((Icon, idx) => (
                        <div key={idx} className="transform hover:scale-110 transition duration-300">
                            <Icon className="text-6xl text-teal-500 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold">
                                {["React.js", "Node.js", "PostgreSQL & MySQL", "CSS3", "HTML5"][idx]}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-6 py-20 bg-white">
                <h3 className="text-4xl font-bold text-center mb-16" data-aos="zoom-in">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white/70 backdrop-blur-md"
                            data-aos="fade-up"
                        >
                            <div className="text-5xl text-teal-500 text-center mb-4">{project.icon}</div>
                            <h4 className="text-2xl font-bold mb-2 text-center">{project.title}</h4>
                            <p className="text-gray-600 text-center mb-6 text-sm">{project.description}</p>
                            <div className="text-center">
                                <a
                                    href="#"
                                    className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-20 bg-gray-50" data-aos="fade-right">
                <h3 className="text-4xl font-bold text-center mb-12">About Me</h3>
                <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
                    I'm a passionate MERN stack developer from Una, Himachal Pradesh. I build modern web apps using React, Node, and PostgreSQL. Previously worked at The Brihaspati Infotech Pvt. Ltd. as a PHP Developer. I'm experienced in creating scalable, high-performance web applications and have a strong foundation in both front-end and back-end development.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 py-20 bg-white" data-aos="fade-left">
                <h3 className="text-4xl font-bold text-center mb-12">Contact Me</h3>
                <form className="max-w-2xl mx-auto space-y-6">
                    <input className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" placeholder="Your Name" />
                    <input className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" type="email" placeholder="Your Email" />
                    <textarea className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your Message" rows={5}></textarea>
                    <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 rounded-full transition-transform transform hover:scale-110">
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-100 text-gray-500 text-sm">
                © {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
            </footer>
        </div>
    );
}
