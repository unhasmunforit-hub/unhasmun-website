"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CommitteeInfo {
    name: string;
    fullName: string;
    description: string;
    topicDescription: string;
}

const committeeDetails: CommitteeInfo[] = [
    {
        name: "WIPO",
        fullName: "Strengthening Traditional Cultural Expressions Towards International Copyright and Protection Standards",
        description:
            "World Intellectual Property Organization (WIPO) Step into the spotlight with our chosen council for Makassar MUN: the World Intellectual Property Organization (WIPO)! Perfectly echoing our Grand Theme, \"Recognize, Navigate, Balance: Building Consensus in a Diverse World of I La Galigo,\" WIPO stands as the ultimate international arena for delegates to champion the rights of indigenous communities. In a modern era where local heritage is increasingly vulnerable to cross-border commercial exploitation, the urgency to fortify our international legal frameworks has never been greater. On this dynamic stage, delegates are challenged to genuinely recognize the intellectual property rights of local creators, deftly navigate the complex tug-of-war between legal protection and global economic interests, and strike a crucial balance to ensure that rapid digitalization empowers, rather than erases, the authentic voices of our diverse world.",
        topicDescription:
            "Strengthening Traditional Cultural Expressions Towards International Copyright and Protection Standards. The World Intellectual Property Organization (WIPO) is a specialized agency of the United Nations mandated to promote the protection of intellectual property worldwide. The current international copyright framework remains fundamentally inadequate for protecting Traditional Cultural Expressions (TCEs). The living heritage of indigenous and local communities, expressed through music, dance, art, and design, is collectively owned and passed down from generation to generation; however, it does not align with conventional copyright laws, which are often applied to TCEs. This leaves indigenous communities vulnerable to unauthorized exploitation and commercialization without permission, attribution, or benefit-sharing. Therefore, this committee seeks to advance international copyright standards and protections that recognize collective ownership, customary law, and the right of communities to determine how their cultural expressions are used, affirming that the protection of TCEs is fundamentally a matter of intellectual property rights, legal justice, and the integrity of the international IP system under the WIPO framework.",
    },
    {
        name: "UNHRC",
        fullName: "Ensuring the Protection of Women with Disabilities from Intersecting Discrimination",
        description:
            "United Nations Human Rights Council (UNHRC) Take your place at the forefront of global justice with our designated council for Makassar MUN: the United Nations Human Rights Council (UNHRC)! Seamlessly embodying our Grand Theme, \"Recognize, Navigate, Balance: Building Consensus in a Diverse World of I La Galigo,\" the UNHRC operates as the ultimate diplomatic battlefield for safeguarding human dignity. In an increasingly fragmented world where systemic inequalities threaten the safety of marginalized populations, the demand for resilient international human rights frameworks is at an all-time high. Within these historic walls, delegates are called upon to authentically recognize the lived realities of vulnerable communities, skillfully navigate the intense diplomatic friction between state sovereignty and universal liberties, and strike a vital balance to ensure that global policies uplift rather than overlook the diverse voices of our shared humanity.",
        topicDescription:
            "Ensuring the Protection of Women with Disabilities from Intersecting Discrimination Prepare for a profoundly intense and necessary debate, because the pursuit of genuine equality cannot wait. This compelling agenda tackles a devastating blind spot in modern global policy: while international frameworks often address gender and disability in isolation, they inadvertently leave women with disabilities exposed to compounded, systemic discrimination and violence. Echoing the profound resilience found within the epic tales of I La Galigo, this topic challenges delegates to forge a unified consensus on shielding humanity's most at-risk individuals. The stakes are monumental, millions remain silenced by these overlapping structural barriers every single day. It is absolutely imperative for delegates to construct airtight international safeguards that empower these communities, untangle the complexities of grassroots implementation, and champion a truly accessible, inclusive future for everyone.",
    },
    {
        name: "CCPCJ",
        fullName: "Strengthening International Cooperation to Combat Illegal Mining and Illicit Mineral Trafficking by Transnational Criminal Organizations",
        description:
            "The Commission on Crime Prevention and Criminal Justice (CCPCJ) Step into the epicenter of global law enforcement with our designated council for Makassar MUN: the CCPCJ! Flawlessly reflecting our Grand Theme, \"Recognize, Navigate, Balance: Building Consensus in a Diverse World of I La Galigo,\" the CCPCJ stands as the ultimate diplomatic arena for dismantling global illicit networks. In an era where highly sophisticated syndicates exploit borders and threaten international stability, the need for robust, unified criminal justice frameworks has never been more critical. Within this core commission of ECOSOC, delegates are challenged to authentically recognize the complex web of transnational crimes, skillfully navigate the intense jurisdictional friction between sovereign states and international law, and strike a crucial balance to forge sweeping policies that protect the integrity of our shared global governance.",
        topicDescription:
            "Strengthening International Cooperation to Combat Illegal Mining and Illicit Mineral Trafficking by Transnational Criminal Organizations. Brace yourselves for a relentlessly high-stakes negotiation, because the fight to reclaim the world's natural resources starts now. This explosive agenda confronts a rapidly expanding and devastating underbelly of the global economy, with an estimated $281 billion underground empire ruthlessly controlled by Transnational Criminal Organizations (TCOs). Drawing inspiration from the profound interconnectedness of the world found within the epic tales of I La Galigo, this topic demands that delegates build a steadfast consensus to dismantle the cartels thriving on institutional corruption, regulatory loopholes, and environmental destruction. The stakes are colossal billions of illicit dollars fuel further global crime while ecosystems and vulnerable communities are decimated every single day. It is absolutely vital for delegates to engineer ironclad international countermeasures that trace dark financial flows, shatter criminal hierarchies from the top down, and champion a resilient, transparent global supply chain for the future.",
    },
    {
        name: "G20",
        fullName: "Reforming Global Debt Architecture to Support Sustainable Growth in the Global South",
        description:
            "Brace yourselves to step into the ultimate arena where the future of the global economy is forged as we proudly present the G20 Finance Track! This council was specifically chosen for its absolutely crucial role in steering how international financial systems respond to the severe debt distress hitting developing nations right now. The urgency of this council is incredibly real today because global financial stability demands powerful policy coordination built purely on consensus rather than mere voting. This choice resonates flawlessly with our Maksmun 2026 Grand Theme of \"Recognize, Navigate, Balance\" since delegates will be intellectually pushed to recognize diverse economic perspectives, navigate the immense complexities of global governance, and balance conflicting views to build meaningful agreements in a highly challenging world.",
        topicDescription:
            "Reforming Global Debt Architecture to Support Sustainable Growth in the Global South. Get ready for an epic and strategic debate with our official topic of Reforming Global Debt Architecture to Support Sustainable Growth in the Global South! This issue carries a critical urgency because countless nations in the Global South are currently fighting hard to balance heavy debt repayments with the desperate need to sustain economic growth and fund vital public services. The international community is heavily pressured to reform the current global debt architecture, especially by improving mechanisms like the Common Framework, making it more effective, transparent, and responsive without sacrificing worldwide financial stability. This topic is the ultimate manifestation of the diplomatic spirit within our Grand Theme, calling upon empathetic delegates to balance clashing interests and achieve peaceful, inclusive, and sustainable solutions on both regional and global levels.",
    },
];

export default function MakassarMunPage() {
    const [selectedCommittee, setSelectedCommittee] =
        useState<CommitteeInfo | null>(null);

    return (
        <>
            <section className="relative bg-mun-cream min-h-screen flex flex-col font-sans overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <Image
                        src="/background-page.svg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Main Content Space */}
                <div className="relative z-10 w-full flex-grow flex items-center justify-center px-4 pt-28 md:pt-40 pb-12 md:pb-24">
                    {/* Grid: 1 column on mobile (compact), 2 columns on sm and above */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-20 lg:gap-28 w-full max-w-[300px] sm:max-w-5xl pt-8 md:pt-12">
                        {/* Card 1 - WIPO */}
                        <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                            <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-48 md:h-48 bg-white rounded-full mb-3 sm:mb-4 md:mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-[70%] h-[70%]">
                                    <Image
                                        src="/wipo-logo-symbol.png"
                                        alt="WIPO Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h2 className="text-white font-bold text-lg sm:text-lg md:text-2xl lg:text-[26px] tracking-wide text-center uppercase">
                                WIPO
                            </h2>
                            <p className="text-white/80 text-sm sm:text-[15px] md:text-lg lg:text-[18px] text-center mt-1 sm:mt-2 leading-loose px-1 sm:px-2 italic">
                                World Intellectual <br /> Property Organization
                            </p>
                            <button
                                onClick={() =>
                                    setSelectedCommittee(committeeDetails[0])
                                }
                                className="mt-3 sm:mt-3 md:mt-5 px-16 sm:px-16 md:px-24 py-1.5 sm:py-1.5 md:py-2 bg-white text-[#B93636] rounded-full text-xs sm:text-[11px] md:text-[15px] font-semibold shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                See Details
                            </button>
                        </div>
                        {/* Card 2 - UNHRC */}
                        <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                            <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-48 md:h-48 bg-white rounded-full mb-3 sm:mb-4 md:mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-[70%] h-[70%]">
                                    <Image
                                        src="/unhcr-logo-official.png"
                                        alt="UNHRC Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h2 className="text-white font-bold text-lg sm:text-lg md:text-2xl lg:text-[26px] tracking-wide text-center uppercase">
                                UNHRC
                            </h2>
                            <p className="text-white/80 text-sm sm:text-[15px] md:text-lg lg:text-[18px] text-center mt-1 sm:mt-2 leading-loose px-1 sm:px-2 italic">
                                United Nations <br /> Human Rights Council
                            </p>
                            <button
                                onClick={() =>
                                    setSelectedCommittee(committeeDetails[1])
                                }
                                className="mt-3 sm:mt-3 md:mt-5 px-16 sm:px-16 md:px-24 py-1.5 sm:py-1.5 md:py-2 bg-white text-[#B93636] rounded-full text-xs sm:text-[11px] md:text-[15px] font-semibold shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                See Details
                            </button>
                        </div>
                        {/* Card 3 - CCPCJ */}
                        <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                            <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-48 md:h-48 bg-white rounded-full mb-3 sm:mb-4 md:mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-[70%] h-[70%]">
                                    <Image
                                        src="/ccpcj-logo.jpg"
                                        alt="CCPCJ Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h2 className="text-white font-bold text-lg sm:text-lg md:text-2xl lg:text-[26px] tracking-wide text-center uppercase">
                                CCPCJ
                            </h2>
                            <p className="text-white/80 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-center mt-1 sm:mt-2 leading-loose px-1 sm:px-2 italic">
                                The Commission on Crime <br /> Prevention and Criminal Justice
                            </p>
                            <button
                                onClick={() =>
                                    setSelectedCommittee(committeeDetails[2])
                                }
                                className="mt-3 sm:mt-3 md:mt-5 px-16 sm:px-16 md:px-24 py-1.5 sm:py-1.5 md:py-2 bg-white text-[#B93636] rounded-full text-xs sm:text-[11px] md:text-[15px] font-semibold shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                See Details
                            </button>
                        </div>
                        {/* Card 4 - G20 */}
                        <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                            <div className="relative w-32 h-32 sm:w-28 sm:h-28 md:w-48 md:h-48 bg-white rounded-full mb-3 sm:mb-4 md:mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-[70%] h-[70%]">
                                    <Image
                                        src="/g20-logo.png"
                                        alt="G20 Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h2 className="text-white font-bold text-lg sm:text-lg md:text-2xl lg:text-[26px] tracking-wide text-center uppercase">
                                G20
                            </h2>
                            <p className="text-white/80 text-sm sm:text-[15px] md:text-lg lg:text-[18px] text-center mt-1 sm:mt-2 leading-loose px-1 sm:px-2 italic">
                                Group of 20
                            </p>
                            <button
                                onClick={() =>
                                    setSelectedCommittee(committeeDetails[3])
                                }
                                className="mt-3 sm:mt-3 md:mt-5 px-16 sm:px-16 md:px-24 py-1.5 sm:py-1.5 md:py-2 bg-white text-[#B93636] rounded-full text-xs sm:text-[11px] md:text-[15px] font-semibold shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tongkonan decoration - directly above footer, overlapping behind cards */}
                <div className="relative w-full z-0 mt-[-100px] md:mt-[-250px] lg:mt-[-350px] pointer-events-none">
                    <Image
                        src="/tongkonan-footer.webp"
                        alt="Tongkonan decoration"
                        width={1920}
                        height={400}
                        className="w-full h-auto block"
                    />
                </div>
            </section>

            {/* WIPO Detail Popup Modal */}
            <AnimatePresence>
                {selectedCommittee && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCommittee(null)}
                    >
                        {/* Blur backdrop */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                        {/* Modal content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="relative bg-[#B93636] rounded-2xl md:rounded-3xl pt-8 pb-8 px-6 sm:pt-16 sm:pb-16 sm:px-8 md:pt-24 md:pb-24 md:px-12 max-w-6xl w-full shadow-2xl max-h-[85vh] sm:max-h-[70vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCommittee(null)}
                                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all z-10 cursor-pointer"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
 
                            {/* Layout: Left avatar (sticky) + Divider + Right description (scrollable) */}
                            <div className="flex flex-col md:flex-row items-stretch max-h-[calc(85vh-5rem)] md:max-h-[calc(70vh-13rem)]">
                                {/* Left side - Avatar & Name (sticky, no scroll) */}
                                <div className="flex flex-col items-center justify-center shrink-0 md:pr-8 pb-4 md:pb-0">
                                    <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-inner mb-2 sm:mb-4 overflow-hidden flex items-center justify-center">
                                        {selectedCommittee.name === "WIPO" ? (
                                            <div className="relative w-[70%] h-[70%]">
                                                <Image
                                                    src="/wipo-logo-symbol.png"
                                                    alt="WIPO Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : selectedCommittee.name === "UNHRC" ? (
                                            <div className="relative w-[70%] h-[70%]">
                                                <Image
                                                    src="/unhcr-logo-official.png"
                                                    alt="UNHRC Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : selectedCommittee.name === "CCPCJ" ? (
                                            <div className="relative w-[70%] h-[70%]">
                                                <Image
                                                    src="/ccpcj-logo.jpg"
                                                    alt="CCPCJ Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : selectedCommittee.name === "G20" ? (
                                            <div className="relative w-[70%] h-[70%]">
                                                <Image
                                                    src="/g20-logo.png"
                                                    alt="G20 Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-[#D1D5DB] rounded-full" />
                                        )}
                                    </div>
                                    <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl text-center">
                                        {selectedCommittee.name}
                                    </h3>
                                    <p className="text-white/80 text-[10px] sm:text-[15px] text-center mt-0.5 sm:mt-1 max-w-[200px] leading-loose whitespace-pre-line italic">
                                        {selectedCommittee.fullName}
                                    </p>
                                </div>
 
                                {/* Vertical divider line (desktop) / Horizontal divider (mobile) */}
                                <div className="hidden md:block w-px bg-white/30 shrink-0" />
                                <div className="block md:hidden w-full h-px bg-white/30 shrink-0" />
 
                                {/* Right side - Description (scrollable) */}
                                <div className="flex-1 pl-4 pr-4 pt-4 pb-6 sm:pr-6 md:pl-8 md:pr-6 md:pt-0 md:pb-0 overflow-y-auto modal-scrollbar max-h-[calc(85vh-10rem)] md:max-h-full">
                                    <h4 className="text-white font-bold text-[15px] sm:text-xl md:text-2xl mb-2 sm:mb-4">
                                        The Council Reveal
                                    </h4>
                                    <p
                                        className="text-white/90 text-[13px] sm:text-sm md:text-[15px] leading-relaxed md:leading-loose"
                                        style={{ textAlign: "justify" }}
                                    >
                                        {selectedCommittee.description}
                                    </p>
 
                                    {/* Divider */}
                                    <div className="w-full h-px bg-white/20 my-4 sm:my-6" />
 
                                    <h4 className="text-white font-bold text-[15px] sm:text-xl md:text-2xl mb-2 sm:mb-4">
                                        The Topic Reveal
                                    </h4>
                                    <p
                                        className="text-white/90 text-[13px] sm:text-sm md:text-[15px] leading-relaxed md:leading-loose"
                                        style={{ textAlign: "justify" }}
                                    >
                                        {selectedCommittee.topicDescription}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
