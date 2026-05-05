"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        comment: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }

            setSubmitMessage("Message sent successfully! We will get back to you soon.");
            setFormData({ name: "", email: "", phone: "", comment: "" });
        } catch (error) {
            setSubmitMessage("Failed to send message. Please try again later.");
            console.error("Contact Form Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    return (
        <section className="relative bg-mun-cream min-h-screen font-sans">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                    src="/background-page.svg"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 pt-28 md:pt-40 pb-32 md:pb-40">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <div className="max-w-md">
                        <h1
                            className="font-black text-mun-dark mb-2 leading-tight"
                            style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-1px" }}
                        >
                            Contact us
                        </h1>
                        <p
                            className="text-mun-dark text-[20px] lg:text-[24px] font-medium"
                        >
                            We would love to hear from you
                        </p>
                    </div>

                    {/* Illustration (Using the provided image) */}
                    <div className="relative w-56 h-56 md:w-80 md:h-80">
                        <div className="absolute inset-0 flex items-center justify-center pt-4">
                            <Image
                                src="/contact-illustration.png"
                                alt="Contact Illustration"
                                fill
                                className="object-contain relative z-10"
                            />
                        </div>

                        {/* Floating Icons */}
                        <div className="absolute top-10 left-0 md:left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center z-20 shadow-xl drop-shadow-md hover:scale-105 transition-transform bg-white/5 p-1 backdrop-blur-sm">
                            <Image
                                src="/icon-chat.png"
                                alt="Chat Icon"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>

                        <div className="absolute top-0 right-0 md:right-2 w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center z-20 shadow-xl drop-shadow-md hover:scale-105 transition-transform bg-white/5 p-1 backdrop-blur-sm">
                            <Image
                                src="/icon-user.png"
                                alt="User Icon"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>

                        <div className="absolute bottom-0 right-6 md:right-6 md:bottom-[-16px] w-14 h-14 md:w-24 md:h-24 rounded-full flex items-center justify-center z-20 shadow-xl drop-shadow-md hover:scale-105 transition-transform bg-white/5 p-1 backdrop-blur-sm">
                            <Image
                                src="/icon-phone.png"
                                alt="Phone Icon"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-12 md:mt-24">
                    {/* Contact Form (Takes up more space now: 7 columns out of 12) */}
                    <div className="lg:col-span-7 bg-[#B93636] rounded-[2rem] p-4 md:p-8 lg:p-12 shadow-xl text-white">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">Send us a message</h2>

                        <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm lg:text-base font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/30 pb-2 pl-3 lg:pl-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm lg:text-base font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/30 pb-2 pl-3 lg:pl-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm lg:text-base font-bold mb-2">No. Hp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="No. Hp"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    onKeyDown={(e) => {
                                        if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="w-full bg-transparent border-b border-white/30 pb-2 pl-3 lg:pl-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="comment" className="block text-sm lg:text-base font-bold mb-2">Comment</label>
                                <textarea
                                    id="comment"
                                    placeholder="Comment"
                                    rows={4}
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/30 pb-2 pl-3 lg:pl-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors resize-none"
                                />
                            </div>

                            <div className="pt-2 lg:pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-mun-cream text-mun-dark font-bold py-2.5 lg:py-4 px-4 lg:px-6 rounded-[2rem] hover:bg-white transition-colors shadow-md text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                </button>
                            </div>

                            {submitMessage && (
                                <p className={`text-center ${submitMessage.includes("success") ? "text-green-300" : "text-red-300"}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information (Takes up less space now: 5 columns out of 12) */}
                    <div className="lg:col-span-5 pt-4">
                        <h2 className="text-2xl lg:text-4xl font-bold text-mun-dark mb-2">Get in touch</h2>
                        <p className="text-black mb-8 text-sm lg:text-lg max-w-sm">
                            we&apos;d be happy to connect and hear<br />
                            your thoughts
                        </p>

                        <div className="space-y-6 my-8 lg:my-12">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D97777] rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8 text-white" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-mun-dark text-lg lg:text-xl">Email</h3>
                                    <p className="text-mun-dark/80 font-medium text-base lg:text-xl">unhasmun@gmail.com</p>
                                </div>
                            </div>

                            {/* WhatsApp / Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D97777] rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8 text-white" stroke="currentColor" strokeWidth="2">
                                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-mun-dark text-lg lg:text-xl">Kontak</h3>
                                    <p className="text-mun-dark/80 font-medium text-base lg:text-xl">+62 851-8326-3406</p>
                                </div>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-1 bg-black mt-0 mb-4"></div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-mun-dark mb-4 text-base lg:text-lg">Follow our social media</h3>
                            <div className="flex gap-4">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/unhas-model-united-nations-183a40217/" className="w-12 h-12 md:w-16 md:h-16 bg-[#D97777] rounded-xl md:rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a href="https://instagram.com/unhasmun" className="w-12 h-12 md:w-16 md:h-16 bg-[#D97777] rounded-xl md:rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* TikTok */}
                                <a href="https://tiktok.com/@unhasmun" className="w-12 h-12 md:w-16 md:h-16 bg-[#D97777] rounded-xl md:rounded-2xl flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.62 5.56-1.16 1.65-2.95 2.74-4.93 3.01-1.98.27-4.04-.15-5.67-1.32-1.64-1.18-2.65-3.04-2.8-5.07-.16-2.03.54-4.08 2.02-5.46 1.47-1.37 3.54-1.92 5.5-1.52v4.13c-1.13-.24-2.34-.1-3.32.55-1 .65-1.6 1.8-1.57 3.01.03 1.2.7 2.31 1.74 2.87 1.04.57 2.31.57 3.33.02 1.03-.55 1.7-1.66 1.73-2.86V.02h3.28z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tongkonan decoration - directly above footer */}
            <div className="relative w-full">
                <Image
                    src="/tongkonan-footer.webp"
                    alt="Tongkonan decoration"
                    width={1920}
                    height={400}
                    className="w-full h-auto block"
                />
            </div>
        </section>
    );
}
