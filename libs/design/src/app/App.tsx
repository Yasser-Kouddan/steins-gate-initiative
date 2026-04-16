import { useState } from "react";
import { motion } from "motion/react";
import { LHCBackground } from "./components/lhc-background";
import { NixieDashboard } from "./components/nixie-dashboard";
import { WorldLineLog } from "./components/worldline-log";
import { LabMemberCard } from "./components/lab-member-card";
import { CERNNewsFeed } from "./components/cern-news-feed";
import { MobileNav } from "./components/mobile-nav";
import { Radio } from "lucide-react";

export default function App() {
  const [mobileTab, setMobileTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#121212] text-[#FF8C00] relative overflow-hidden">
      <LHCBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b-2 border-[#0053A1]/50 bg-[#0a0a0a]/80 backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 md:py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Radio className="w-6 h-6 md:w-8 md:h-8 text-[#FF8C00]" />
                </motion.div>
                <div>
                  <h1 
                    className="text-xl md:text-3xl tracking-wider text-[#FF8C00]"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                  >
                    STEINER-GATE
                  </h1>
                  <div 
                    className="text-[10px] md:text-xs text-[#0053A1] tracking-[0.3em] mt-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    OPERATION
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div 
                  className="text-xs md:text-sm text-[#FF8C00]/60"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  CERN LHC
                </div>
                <div 
                  className="text-[10px] md:text-xs text-[#FF8C00]/40 tabular-nums"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Layout - 12 column grid */}
        <div className="hidden md:block">
          <div className="max-w-[1600px] mx-auto px-8 py-8">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              {/* Left Column - Nixie Dashboard (spans 8 columns) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-8">
                  <NixieDashboard />
                </div>
              </div>

              {/* Right Column - Lab Member Card (spans 4 columns) */}
              <div className="col-span-12 lg:col-span-4">
                <LabMemberCard />
              </div>

              {/* World Line Log (spans 8 columns) */}
              <div className="col-span-12 lg:col-span-8">
                <div className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-6">
                  <WorldLineLog />
                </div>
              </div>

              {/* CERN News Feed (spans 4 columns) */}
              <div className="col-span-12 lg:col-span-4">
                <div className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-6 max-h-[450px] overflow-y-auto">
                  <CERNNewsFeed />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden pb-20">
          <div className="px-4 py-6 space-y-6">
            {mobileTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-6"
              >
                <NixieDashboard />
              </motion.div>
            )}

            {mobileTab === "worldline" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-4"
              >
                <WorldLineLog />
              </motion.div>
            )}

            {mobileTab === "profile" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <LabMemberCard />
              </motion.div>
            )}

            {mobileTab === "news" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-[#FF8C00]/20 bg-[#0a0a0a]/60 backdrop-blur-sm p-4"
              >
                <CERNNewsFeed />
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav activeTab={mobileTab} onNavigate={setMobileTab} />
      </div>
    </div>
  );
}
