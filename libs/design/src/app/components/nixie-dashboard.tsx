import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface NixieDashboardProps {
  className?: string;
}

export function NixieDashboard({ className }: NixieDashboardProps) {
  const [momentum, setMomentum] = useState(6500.42);
  const [beamIntensity, setBeamIntensity] = useState(2.847);
  const [status, setStatus] = useState<"STABLE BEAMS" | "INJECTION" | "RAMPING">("STABLE BEAMS");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time fluctuations
      setMomentum((prev) => prev + (Math.random() - 0.5) * 2);
      setBeamIntensity((prev) => Math.max(2.5, Math.min(3.2, prev + (Math.random() - 0.5) * 0.05)));
      
      // Occasionally change status
      if (Math.random() < 0.05) {
        const statuses: Array<"STABLE BEAMS" | "INJECTION" | "RAMPING"> = ["STABLE BEAMS", "INJECTION", "RAMPING"];
        setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      {/* Status Indicator */}
      <div className="mb-8">
        <motion.div
          className="inline-block px-6 py-3 border-2 border-[#FF8C00] bg-[#FF8C00]/5 relative overflow-hidden"
          style={{ fontFamily: 'var(--font-orbitron)' }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 140, 0, 0.3)",
              "0 0 20px rgba(255, 140, 0, 0.5)",
              "0 0 10px rgba(255, 140, 0, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-[#FF8C00]/10" />
          <span className="relative text-[#FF8C00] tracking-[0.3em] text-sm md:text-base">
            {status}
          </span>
        </motion.div>
      </div>

      {/* Telemetry Displays */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Momentum */}
        <div>
          <div className="mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
            <span className="text-[#FF8C00]/60 text-xs md:text-sm tracking-wider uppercase">
              Beam Momentum
            </span>
          </div>
          <div className="relative">
            <motion.div
              className="text-5xl md:text-7xl tracking-wider tabular-nums"
              style={{ fontFamily: 'var(--font-orbitron)' }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.4)",
                  "0 0 15px rgba(255, 140, 0, 1), 0 0 30px rgba(255, 140, 0, 0.6)",
                  "0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.4)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-[#FF8C00]">{momentum.toFixed(2)}</span>
            </motion.div>
            <div className="mt-2 text-sm md:text-base text-[#FF8C00]/60" style={{ fontFamily: 'var(--font-inter)' }}>
              GeV/c
            </div>
          </div>
        </div>

        {/* Beam Intensity */}
        <div>
          <div className="mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
            <span className="text-[#FF8C00]/60 text-xs md:text-sm tracking-wider uppercase">
              Beam Intensity
            </span>
          </div>
          <div className="relative">
            <motion.div
              className="text-5xl md:text-7xl tracking-wider tabular-nums"
              style={{ fontFamily: 'var(--font-orbitron)' }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.4)",
                  "0 0 15px rgba(255, 140, 0, 1), 0 0 30px rgba(255, 140, 0, 0.6)",
                  "0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.4)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-[#FF8C00]">{beamIntensity.toFixed(3)}</span>
            </motion.div>
            <div className="mt-2 text-sm md:text-base text-[#FF8C00]/60" style={{ fontFamily: 'var(--font-inter)' }}>
              ×10¹⁴ protons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
