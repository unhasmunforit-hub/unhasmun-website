import Image from "next/image";

export default function MakassarMunPage() {
    return (
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
                {/* 2x2 Grid, forced 2 columns on mobile */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-20 lg:gap-28 w-full max-w-5xl pt-8 md:pt-12">
                    {/* Card 1 */}
                    <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44 bg-[#D1D5DB] rounded-full mb-3 sm:mb-6 md:mb-8 shadow-inner"></div>
                        <h2 className="text-white font-bold text-[10px] sm:text-sm md:text-xl lg:text-[22px] tracking-wide text-center uppercase">TO BE ANNOUNCED</h2>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44 bg-[#D1D5DB] rounded-full mb-3 sm:mb-6 md:mb-8 shadow-inner"></div>
                        <h2 className="text-white font-bold text-[10px] sm:text-sm md:text-xl lg:text-[22px] tracking-wide text-center uppercase">TO BE ANNOUNCED</h2>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44 bg-[#D1D5DB] rounded-full mb-3 sm:mb-6 md:mb-8 shadow-inner"></div>
                        <h2 className="text-white font-bold text-[10px] sm:text-sm md:text-xl lg:text-[22px] tracking-wide text-center uppercase">TO BE ANNOUNCED</h2>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#B93636] rounded-2xl md:rounded-[2rem] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-2xl transition-transform hover:scale-105">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-44 md:h-44 bg-[#D1D5DB] rounded-full mb-3 sm:mb-6 md:mb-8 shadow-inner"></div>
                        <h2 className="text-white font-bold text-[10px] sm:text-sm md:text-xl lg:text-[22px] tracking-wide text-center uppercase">TO BE ANNOUNCED</h2>
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
    );
}
