import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center px-8 py-6" style={{ backgroundColor: "#710004", minHeight: "100px" }}>
      {/* Logo — absolute kiri */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:block">
        <Image
          src="/main-logo.webp"
          alt="UNHAS MUN Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Center: copyright + social icons */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-white text-sm font-medium tracking-wide">
          © 2026 Unhas MUN, All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a
            href="https://instagram.com/unhasmun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-white/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/unhasmun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-white/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
