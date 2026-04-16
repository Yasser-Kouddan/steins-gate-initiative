import { motion } from "motion/react";
import { User } from "lucide-react";

interface LabMemberCardProps {
  memberNumber?: string;
  name?: string;
  role?: string;
  className?: string;
}

export function LabMemberCard({
  memberNumber = "001",
  name = "Okabe Rintarou",
  role = "LAB CHIEF",
  className = "",
}: LabMemberCardProps) {
  return (
    <div className={className}>
      <div 
        className="border-2 border-[#FF8C00]/40 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 relative overflow-hidden"
      >
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[#FF8C00]" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,140,0,0.1) 2px,
            rgba(255,140,0,0.1) 4px
          )`
        }} />
        
        {/* Header */}
        <div className="relative mb-6 pb-4 border-b border-[#FF8C00]/20">
          <div className="flex items-center justify-between">
            <div>
              <div 
                className="text-[#0053A1] text-xs tracking-[0.2em] mb-1"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                CERN LABORATORY
              </div>
              <div 
                className="text-[#FF8C00] text-lg tracking-wider"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                IDENTIFICATION CARD
              </div>
            </div>
            <motion.div
              className="w-12 h-12 border-2 border-[#FF8C00] rounded-full flex items-center justify-center bg-[#FF8C00]/5"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 140, 0, 0.3)",
                  "0 0 20px rgba(255, 140, 0, 0.5)",
                  "0 0 10px rgba(255, 140, 0, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <User className="w-6 h-6 text-[#FF8C00]" />
            </motion.div>
          </div>
        </div>

        {/* Member Info */}
        <div className="relative space-y-4">
          {/* Member Number */}
          <div>
            <div 
              className="text-[#FF8C00]/50 text-[10px] tracking-widest mb-1"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              MEMBER No.
            </div>
            <motion.div 
              className="text-[#FF8C00] text-4xl tracking-[0.2em] tabular-nums"
              style={{ fontFamily: 'var(--font-orbitron)' }}
              animate={{
                textShadow: [
                  "0 0 8px rgba(255, 140, 0, 0.6)",
                  "0 0 12px rgba(255, 140, 0, 0.8)",
                  "0 0 8px rgba(255, 140, 0, 0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {memberNumber}
            </motion.div>
          </div>

          {/* Name */}
          <div>
            <div 
              className="text-[#FF8C00]/50 text-[10px] tracking-widest mb-1"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              OPERATOR NAME
            </div>
            <div 
              className="text-[#FF8C00] text-xl tracking-wide"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {name}
            </div>
          </div>

          {/* Role */}
          <div>
            <div 
              className="text-[#FF8C00]/50 text-[10px] tracking-widest mb-1"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              CLEARANCE LEVEL
            </div>
            <div 
              className="text-[#0053A1] text-sm tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              {role}
            </div>
          </div>

          {/* Serial Pattern */}
          <div className="pt-4 border-t border-[#FF8C00]/20">
            <div className="flex gap-1 opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-1 w-1 bg-[#FF8C00] rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Stamp */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <div 
            className="text-[#FF8C00] text-xs transform rotate-12 border border-[#FF8C00] px-2 py-1"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            AUTHORIZED
          </div>
        </div>
      </div>
    </div>
  );
}
