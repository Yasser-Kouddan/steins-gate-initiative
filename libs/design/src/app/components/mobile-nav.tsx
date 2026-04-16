import { motion } from "motion/react";
import { Activity, FileText, User, Radio } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  onNavigate: (tab: string) => void;
  activeTab: string;
}

const navItems = [
  { id: "dashboard", icon: Activity, label: "Dashboard" },
  { id: "worldline", icon: Radio, label: "World Line" },
  { id: "profile", icon: User, label: "Profile" },
  { id: "news", icon: FileText, label: "News" },
];

export function MobileNav({ onNavigate, activeTab }: MobileNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t-2 border-[#FF8C00]/30 z-50 md:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 px-4 py-2 relative"
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon 
                  className={`w-5 h-5 ${
                    isActive ? "text-[#FF8C00]" : "text-[#FF8C00]/40"
                  }`}
                  style={{
                    filter: isActive ? "drop-shadow(0 0 8px rgba(255, 140, 0, 0.8))" : "none"
                  }}
                />
              </motion.div>
              <span 
                className={`text-[10px] ${
                  isActive ? "text-[#FF8C00]" : "text-[#FF8C00]/40"
                }`}
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                {item.label}
              </span>
              
              {isActive && (
                <motion.div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF8C00]"
                  layoutId="activeIndicator"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(255, 140, 0, 0.8)",
                      "0 0 10px rgba(255, 140, 0, 1)",
                      "0 0 5px rgba(255, 140, 0, 0.8)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
