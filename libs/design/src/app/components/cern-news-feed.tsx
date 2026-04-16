import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface NewsItem {
  id: string;
  headline: string;
  timestamp: string;
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    headline: "LHC achieves record luminosity in proton-proton collisions",
    timestamp: "2h ago",
  },
  {
    id: "2",
    headline: "New exotic particle candidate detected in ATLAS experiment",
    timestamp: "5h ago",
  },
  {
    id: "3",
    headline: "Beam energy successfully ramped to 6.8 TeV",
    timestamp: "8h ago",
  },
  {
    id: "4",
    headline: "Higgs boson decay patterns show expected behavior",
    timestamp: "12h ago",
  },
  {
    id: "5",
    headline: "CMS detector reports anomalous signal in B-meson sector",
    timestamp: "18h ago",
  },
  {
    id: "6",
    headline: "Scheduled maintenance completed ahead of schedule",
    timestamp: "1d ago",
  },
];

export function CERNNewsFeed() {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 
          className="text-[#FF8C00]/60 text-xs md:text-sm tracking-wider uppercase"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          CERN Laboratory News
        </h3>
      </div>
      
      <div className="space-y-1">
        {mockNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex items-start gap-3 p-3 border-l-2 border-[#FF8C00]/20 hover:border-[#FF8C00] hover:bg-[#FF8C00]/5 transition-all duration-200">
              <ChevronRight className="w-4 h-4 text-[#FF8C00]/40 group-hover:text-[#FF8C00] mt-0.5 flex-shrink-0 transition-colors" />
              <div className="flex-1 min-w-0">
                <div 
                  className="text-[#FF8C00]/80 group-hover:text-[#FF8C00] text-sm leading-relaxed mb-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.headline}
                </div>
                <div 
                  className="text-[#FF8C00]/30 text-xs tabular-nums"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {item.timestamp}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
