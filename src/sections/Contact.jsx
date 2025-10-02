import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
    const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10">
                <TitleHeader 
                    title="Got a Project?"
                    sub="📬 Get In Touch"
                />
                
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Contact Form - Left Side */}
                    <div className="lg:col-span-5">
                        <div className="card-border rounded-xl p-8">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-white-50 text-lg font-semibold">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-black-50 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-white-50 text-lg font-semibold">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-black-50 rounded-lg text-white focus:outline-none focus:border-white-50 transition-colors"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-white-50 text-lg font-semibold">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-black border border-black-50 rounded-lg text-white focus:outline-none focus:border-white-50 transition-colors resize-vertical"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="cta-wrapper w-full lg:w-80 md:h-16 h-12"
                                    >
                                        <div className="cta-button group">
                                            <div className="bg-circle"></div>
                                            <p className="text">Send Message</p>
                                            <div className="arrow-wrapper">
                                                <img src="/images/arrow-down.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Experience - Right Side */}
                    {isTabletOrDesktop && (
                        <div className="lg:col-span-7 min-h-96">
                            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-2xl overflow-hidden">
                                <ContactExperience />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
