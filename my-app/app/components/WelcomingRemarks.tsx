"use client";

import Image from 'next/image';

const remarks = {
  name: "Jacinta Arkana",
  titleLine1: "Secretary-General,",
  titleLine2: "Unhas MUN 2026",
  avatar: "/about/commitee/Jacinta Arkana Shafiqah Jasman (Eci) (1) 1.webp",
  letter: [
    "Dear Distinguished Guests,",
    "Hi, everyone! I am Jacinta, and it is my honor to serve as the Secretary-General of Unhas MUN 2026! On behalf of the entire secretariat, I warmly welcome you to Unhas Model United Nations, a student activity of Hasanuddin University where students come together to learn, share ideas, and grow. We are brought together by curiosity about global issues and a genuine desire to understand the world more deeply. More than anything, this is a space to grow as people, to shape perspective, and to become more aware of the impact we carry.",
    "Inspired by the spirit of the United Nations, we build our community on how we carry ourselves and how we treat others. We value maturity and responsibility in every role we take. We choose to bring positive energy into the space we share. We stay open to learning, change, and new experiences. And we believe growth happens best when people connect and work together.",
    "This website is simply a window into who we are and what we continue to build. Here you can get to know our journey, our purpose, and the people behind this community. Thank you for being here and taking the time to know about Unhas MUN Student Activity!",
    "Best Regards,",
  ],
};

export default function WelcomingRemarks() {
  return (
    <section style={s.section as React.CSSProperties}>
      <style>{`
        .wr-card-front { overflow: hidden; }
        @media (max-width: 768px) {
          .wr-inner { flex-direction: column !important; }
          .wr-divider { width: 100% !important; min-height: 2px !important; height: 2px !important; margin: 24px 0 !important; align-self: unset !important; order: 2 !important; }
          .wr-profile { flex-direction: row !important; align-items: center !important; gap: 16px !important; padding-right: 0 !important; padding-bottom: 0 !important; min-width: unset !important; width: 100% !important; order: 3 !important; justify-content: center !important; }
          .wr-avatar { width: 112px !important; height: 112px !important; margin-bottom: 0 !important; }
          .wr-name { font-size: 16px !important; }
          .wr-role { font-size: 11px !important; }
          .wr-quote { font-size: 60px !important; top: 8px !important; right: 20px !important; }
          .wr-letter { order: 1 !important; }
        }
        @media (max-width: 480px) {
          .wr-profile { flex-direction: column !important; text-align: center !important; align-items: center !important; }
          .wr-card-front { padding: 48px 28px !important; }
          .wr-letter { padding-top: 0 !important; }
          .wr-greeting { font-size: 12.5px !important; }
          .wr-para { font-size: 12px !important; }
        }
      `}</style>

      {/* ── Header ── */}
      <div style={s.header as React.CSSProperties}>
        <h2 style={s.title as React.CSSProperties}>Welcoming Remarks!</h2>
        <p style={s.subtitle as React.CSSProperties}>Letter from the Secretary-General, Unhas MUN 2026</p>
      </div>

      {/* ── Double-box wrapper ── */}
      <div style={s.wrapper as React.CSSProperties}>
        {/* Back card — slightly rotated, lighter red */}
        <div style={s.cardBack as React.CSSProperties} />

        {/* Front card — main dark red */}
        <div style={s.cardFront as React.CSSProperties} className="wr-card-front">

          {/* Quotation mark top-right */}
          <span style={s.quote as React.CSSProperties}>&quot;</span>

          {/* Profile | Divider | Letter */}
          <div style={s.inner as React.CSSProperties} className="wr-inner">

            {/* Profile */}
            <div style={s.profile as React.CSSProperties} className="wr-profile">
              <div style={s.avatar as React.CSSProperties} className="wr-avatar">
                {remarks.avatar && (
                  <Image src={remarks.avatar} alt={remarks.name} width={160} height={160} style={s.avatarImg as React.CSSProperties} />
                )}
              </div>
              <div>
                <p style={s.name as React.CSSProperties} className="wr-name">{remarks.name}</p>
                <p style={s.role as React.CSSProperties} className="wr-role">{remarks.titleLine1}</p>
                <p style={s.role as React.CSSProperties} className="wr-role">{remarks.titleLine2}</p>
              </div>
            </div>

            {/* Vertical divider */}
            <div style={s.divider as React.CSSProperties} className="wr-divider" />

            {/* Letter body */}
            <div style={s.letter as React.CSSProperties} className="wr-letter">
              {remarks.letter.map((para, i) => (
                <p
                  key={i}
                  style={i === 0 ? s.greeting as React.CSSProperties : s.para as React.CSSProperties}
                  className={i === 0 ? "wr-greeting" : "wr-para"}
                >
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    padding: "48px 24px",
    maxWidth: "960px",
    margin: "0 auto 200px auto",
  },

  /* header */
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    fontSize: "clamp(24px, 5vw, 42px)",
    fontWeight: 700,
    color: "#1c1c1c",
    margin: "0 0 8px",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#888",
    margin: 0,
    fontWeight: 700,
  },

  /* double box */
  wrapper: {
    position: "relative",
    overflow: "hidden",
  },
  cardBack: {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background: "#b94040",
    transform: "rotate(3.5deg) translateY(10px) translateX(6px)",
    zIndex: 0,
    opacity: 0.65,
  },
  cardFront: {
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(150deg, #8b1616 0%, #6b0f0f 100%)",
    borderRadius: "16px",
    padding: "64px 56px",
    boxShadow: "0 20px 56px rgba(80, 8, 8, 0.32)",
  },

  /* quote mark */
  quote: {
    position: "absolute",
    top: "16px",
    right: "36px",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "100px",
    lineHeight: 1,
    fontWeight: 700,
    color: "rgba(235, 195, 130, 0.65)",
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 0,
  },

  /* inner grid */
  inner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    position: "relative",
    zIndex: 1,
  },

  /* profile */
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "200px",
    paddingRight: "40px",
    gap: "4px",
    justifyContent: "center",
  },
  avatar: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#ffffff",
    marginBottom: "16px",
    overflow: "hidden",
    flexShrink: 0,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 3px",
    lineHeight: 1.3,
  },
  role: {
    fontSize: "12.5px",
    color: "rgba(255,255,255,0.60)",
    margin: 0,
    lineHeight: 1.55,
    fontWeight: 500,
  },

  /* divider */
  divider: {
    width: "2px",
    alignSelf: "stretch",
    minHeight: "280px",
    background: "rgba(255,255,255,0.22)",
    borderRadius: "2px",
    flexShrink: 0,
    marginRight: "32px",
  },

  /* letter */
  letter: {
    flex: 1,
    paddingTop: "2px",
  },
  greeting: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.92)",
    margin: "0 0 10px",
    fontWeight: 600,
    lineHeight: 1.75,
    textAlign: "justify",
  },
  para: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.78)",
    margin: "0 0 14px",
    lineHeight: 1.85,
    textAlign: "justify",
  },
};
