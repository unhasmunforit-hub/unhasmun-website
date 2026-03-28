import Image from 'next/image';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mun-dark text-[0px] leading-[0]">
        <Image
          src="/home/hero-bg.webp"
          alt="UNHAS MUN Header"
          width={1920}
          height={1080}
          priority
          className="block w-full h-[85vh] object-cover md:h-auto md:object-contain"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-base leading-normal">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8 px-4 py-8 max-w-md md:max-w-none">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src="/main-logo.webp"
                alt="UNHAS MUN Logo"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-3 md:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-normal leading-tight">
                <ShinyText
                  text="UNHAS MODEL"
                  speed={3}
                  color="#ffffff"
                  shineColor="#b1abab"
                  spread={120}
                  direction="left"
                />
                <br />
                <ShinyText
                  text="UNITED NATIONS"
                  speed={3}
                  color="#ffffff"
                  shineColor="#b1abab"
                  spread={120}
                  direction="left"
                />
              </h1>
              <div className="inline-flex px-5 py-2 md:px-9 md:py-3 border border-white/30 rounded-full backdrop-blur-sm bg-white/5 items-center gap-2 md:gap-4">
                <Image
                  src="/home/plane-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-5 md:h-5 object-contain flex-shrink-0"
                />
                <ShinyText
                  text="shape the future behind the table"
                  speed={3}
                  color="#ffffff"
                  shineColor="#b1abab"
                  spread={120}
                  direction="left"
                  className="text-sm sm:text-base md:text-lg tracking-widest whitespace-nowrap"
                />
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
