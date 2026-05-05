"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Executive Board", "USG", "SMG", "Advisor"] as const;

type Category = typeof categories[number];

interface Member {
  name: string;
  position: string;
  image: string;
}

const committeeData: Record<Category, Member[]> = {
  "Executive Board": [
    {
      name: "Feodor Farrel Sulistyo",
      position: "Secretary",
      image: "/about/commitee/Feodor Farrel Sulistyo.webp",
    },
    {
      name: "Jacinta Arkana\nShafiqah Jasman",
      position: "Secretary-General",
      image: "/about/commitee/Jacinta Arkana Shafiqah Jasman.webp",
    },
    {
      name: "Afifah Radhiyah Arifani",
      position: "Treasurer",
      image: "/about/commitee/Afifah Radhiyah Arifani.webp",
    },
  ],
  "USG": [
    {
      name: "Fathiyah Salsabilla",
      position: "Minister of GA",
      image: "/about/commitee/Fathiyah Salsabilla (GA).webp",
    },
    {
      name: "Anisa Shafiqa Yusran",
      position: "Minister of IO",
      image: "/about/commitee/Anisa Shafiqa Yusran (IO).webp",
    },
    {
      name: "Muh. Summary Arif Rusman",
      position: "Minister of M&R",
      image: "/about/commitee/Muh. Sumary Arif Rusman J.webp",
    },
    {
      name: "Aida Mufida Setiawan",
      position: "Minister of PIR",
      image: "/about/commitee/Aida Mufida Setiawan (PIR).webp",
    },
  ],
  "SMG": [
    {
      name: "Muhammad Aflahal Mukmin",
      position: "SMG",
      image: "/about/commitee/Muhammad Aflahal Mukmin.webp",
    },
    {
      name: "Zadrach Barenz Windessy",
      position: "SMG",
      image: "/about/commitee/Zadrach Barenz Windessy.webp",
    },
    {
      name: "Indhie Rina Tamandalan",
      position: "SMG",
      image: "/about/commitee/Indhie Rina Tamandalan.webp",
    },
  ],
  "Advisor": [
    {
      name: "H. Abdul Razaq Z. Cangara, S.IP., M.Si., MIR.",
      position: "Faculty Advisor",
      image: "/about/commitee/H. Abdul Razaq Z. Cangara, S.IP., M.Si., MIR..webp",
    },
    {
      name: "Ishaq Rahman, S.IP., M.Si., AMIPR.",
      position: "Faculty Advisor",
      image: "/about/commitee/Ishaq Rahman, S.IP., M.Si., AMIPR..webp",
    },
    {
      name: "Rafika Nurul Hamdani Ramli, S.H., LL.M.",
      position: "Faculty Advisor",
      image: "/about/commitee/Rafika Nurul Hamdani Ramli, S.H., LL.M..webp",
    },
    {
      name: "Rezky Ramadhani, S.S., M.Litt.",
      position: "Faculty Advisor",
      image: "/about/commitee/Rezky Ramadhani, S.S., M.Litt..webp",
    },
    {
      name: "Ilham Alimuddin, S.T., M.GIS, Ph.D.",
      position: "Faculty Advisor",
      image: "/about/commitee/Ilham Alimuddin, S.T., M.Gis , Ph.D..webp",
    },
  ],
};

// USG committee member lists
const usgMemberData: Record<string, { title: string; members: string[] }> = {
  "Fathiyah Salsabilla": {
    title: "General Assembly Members",
    members: [
      "Amru Bin Salahuddin", "Andi Gean Arifta Fawelau", "Andi Muh. Fabyan Abhipraya",
      "Faruq Syaifullah Shidiq", "Fhalinka Davina Fathunnisa", "Gie Marhaen Saili",
      "Hans Petrus Lopuhaa", "Khusnul Khatimah Yunus", "La Ode Muh. Irgi Zaltian Syahputra",
      "Muthia Syahida", "M. Zacky Shafwan N.",
      "Razwa Farras Zulaikha", "Rowy Afga Anugrah",
      "Videlia Derby", "Wanda Zatil Asma",
    ],
  },
  "Anisa Shafiqa Yusran": {
    title: "Internal Oversight",
    members: [
      "Andi Atiqa Naira Ilham", "Aurelia Marlin Kattu Taula'bi", "Ethania Ebenheizer Picaulima",
      "Grace Agnes Dette", "Jaren Manuel Loardi", "Khumairah Sashkia Lashmana Agelsyah",
      "Laela Alie", "Mahdi Mahardika", "Marria Quenni Michaela",
      "M. Rezky Fatiha Thamrin", "Muhammad Althaf Alfazian Syahran", "Muh. Nafsarrakhman Rivananda",
      "Nindi Tharya Ramadhani", "Shandy Aqilah Khaerani", "Syaskya Dwi Aryanti",
      "Tarhiza Aurelia Qur'ani", "Tsabitha Aqliah Burhan", "Walid Hilal Anugerah Sulthan",
    ],
  },
  "Muh. Summary Arif Rusman": {
    title: "Management & Research",
    members: [
      "Ahmad Aisir Zotra", "Ahmad Haykal Ramly", "Aura Nur Allysha Prianti",
      "Brine Tiara Bella", "Eugenia Kana Daniela Timang Seran", "Hakam Auliya Shidqi",
      "Hanif Mutahhar Taufiq", "Iftitah Azzahra", "Jane Jesiasti Anggrena",
      "Muhammad Izzul Islam", "Muhammad Rifky Fahrezy Sabar", "Muthia Raihanun",
      "Nurfaidah", "Putri Alia Abdul Aziz",
      "Salsabhila", "Steve Rimon Ferrel Mallawangan",
    ],
  },
  "Aida Mufida Setiawan": {
    title: "Public Information & Relations",
    members: [
      "Andi Fatimah Nuareni Ramadhana A.", "Andi Muh. Guttu Patalo Zulkarnain", "Balqis Anastasya",
      "Christofer Billy Saputra Wijayanto", "Devina Arlianti Bahar", "Elvia Nandini Azalia",
      "Grishelda Nakezia", "Irham", "Muhammad Adib Iftikharus Sadat",
      "Muhammad Ainulhuda Irwan", "Muh. Idris Irfandi", "Reinhard FitzGerald Mangiri Rante",
      "Sulham", "Veoline Pricilla Christania",
      "Zahwa Nafishaila Pradana",
    ],
  },
};

export default function CommitteeSection() {
  const [activeTab, setActiveTab] = useState<Category>("Executive Board");
  const [popupData, setPopupData] = useState<{ title: string; members: string[] } | null>(null);
  const members = committeeData[activeTab];

  const renderCard = (member: Member, index: number, extraClass = "") => {
    const isUSG = activeTab === "USG";
    const isAdvisor = activeTab === "Advisor";
    const memberPopup = isUSG ? usgMemberData[member.name] : null;

    return (
      <motion.div
        key={`${activeTab}-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`bg-mun-red rounded-2xl p-4 text-white text-center shadow-lg flex flex-col ${extraClass}`}
      >
        <div className="bg-white rounded-xl aspect-[3/4] w-full mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={400}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h3 className={`font-bold text-sm md:text-base mb-1 whitespace-pre-line ${isAdvisor ? '' : 'line-clamp-2'}`}>{member.name}</h3>
          <p className="text-xs opacity-75">{member.position}</p>
        </div>
        {memberPopup && (
          <button
            onClick={() => setPopupData(memberPopup)}
            className="mt-3 mx-auto flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-white/40 bg-white/20 backdrop-blur-md text-xs font-semibold hover:bg-white/30 transition-colors"
          >
            View Member
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </motion.div>
    );
  };

  return (
    <>
      <section id="committee" className="py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mun-dark">Meet Our Committee</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-8 mb-16 overflow-x-auto pb-4">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === tab ? "text-mun-red" : "text-gray-400 hover:text-mun-dark"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="active-line"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-mun-red"
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "Advisor" ? (
            /* Advisor: 3 top row + 2 bottom row centered */
            <motion.div
              key="advisor-grid"
              layout
              className="mx-auto w-full flex flex-col items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6">
                {members.slice(0, 3).map((member, index) =>
                  renderCard(member, index, "w-[260px] shrink-0")
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6">
                {members.slice(3).map((member, index) =>
                  renderCard(member, index + 3, "w-[260px] shrink-0")
                )}
              </div>
            </motion.div>
          ) : (
            /* Other tabs: all cards in one horizontal row */
            <motion.div
              key={activeTab}
              layout
              className="mx-auto w-full flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-6"
            >
              {members.map((member, index) =>
                renderCard(member, index, "w-full max-w-xs")
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Member Popup Modal */}
      <AnimatePresence>
        {popupData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setPopupData(null)}
          >
            {/* Blur backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-mun-cream border-2 border-mun-red/20 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setPopupData(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-mun-red flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title */}
              <h3 className="text-xl font-bold text-mun-dark text-center mb-6">
                {popupData.title}
              </h3>

              {/* Member names - split layout */}
              {(() => {
                const firstGroup = popupData.members.slice(0, 9);
                const secondGroup = popupData.members.slice(9);
                const useThreeCols = secondGroup.length > 0 && secondGroup.length % 3 === 0;
                return (
                  <>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                      {firstGroup.map((name, i) => (
                        <p key={i} className="text-sm text-mun-dark/80 text-center">
                          {name}
                        </p>
                      ))}
                    </div>
                    {secondGroup.length > 0 && (
                      <div
                        className={`grid gap-x-6 gap-y-3 mt-5 mx-auto ${useThreeCols ? "grid-cols-3 w-full" : "grid-cols-2 max-w-[70%]"
                          }`}
                      >
                        {secondGroup.map((name, i) => (
                          <p key={i + 9} className="text-sm text-mun-dark/80 text-center">
                            {name}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
