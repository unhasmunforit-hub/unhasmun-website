"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Executive Board", "USG", "SMG", "Advisor"];

const committeeMembers = [
  {
    name: "Full Name Here",
    position: "Position Title",
    image: "https://placehold.co/300x400/e5e5e5/666666?text=Member"
  },
  {
    name: "Full Name Here",
    position: "Position Title",
    image: "https://placehold.co/300x400/e5e5e5/666666?text=Member"
  },
  {
    name: "Full Name Here",
    position: "Position Title",
    image: "https://placehold.co/300x400/e5e5e5/666666?text=Member"
  },
  {
    name: "Full Name Here",
    position: "Position Title",
    image: "https://placehold.co/300x400/e5e5e5/666666?text=Member"
  }
];

export default function CommitteeSection() {
  const [activeTab, setActiveTab] = useState("Executive Board");

  return (
    <section className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-mun-dark">Our Committee</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-16 overflow-x-auto pb-4">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-sm font-semibold transition-colors ${
              activeTab === tab ? "text-mun-red" : "text-gray-400 hover:text-mun-dark"
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

      {/* Grid Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-mun-red rounded-2xl p-4 text-white text-center shadow-lg group"
            >
              <div className="bg-white rounded-xl h-64 w-full mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-xs opacity-75 mb-4">{member.position}</p>
              <button className="text-[10px] border border-white/30 px-4 py-1.5 rounded-full hover:bg-white hover:text-mun-red transition-all">
                View Member &gt;
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
