export function LHCBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Circular beam pipe schematic */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-[0.03]"
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main ring */}
        <circle
          cx="600"
          cy="600"
          r="550"
          stroke="#FF8C00"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="600"
          cy="600"
          r="530"
          stroke="#FF8C00"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 5"
        />
        
        {/* Inner technical circles */}
        <circle
          cx="600"
          cy="600"
          r="400"
          stroke="#FF8C00"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 10"
        />
        <circle
          cx="600"
          cy="600"
          r="250"
          stroke="#FF8C00"
          strokeWidth="1"
          fill="none"
        />

        {/* Crosshairs */}
        <line x1="600" y1="0" x2="600" y2="1200" stroke="#FF8C00" strokeWidth="1" />
        <line x1="0" y1="600" x2="1200" y2="600" stroke="#FF8C00" strokeWidth="1" />

        {/* Detector positions (4 main points) */}
        <g>
          {/* ATLAS */}
          <circle cx="600" cy="50" r="15" stroke="#FF8C00" strokeWidth="2" fill="none" />
          <text x="600" y="30" fill="#FF8C00" fontSize="12" textAnchor="middle" opacity="0.5">
            ATLAS
          </text>
          
          {/* CMS */}
          <circle cx="600" cy="1150" r="15" stroke="#FF8C00" strokeWidth="2" fill="none" />
          <text x="600" y="1185" fill="#FF8C00" fontSize="12" textAnchor="middle" opacity="0.5">
            CMS
          </text>
          
          {/* ALICE */}
          <circle cx="50" cy="600" r="15" stroke="#FF8C00" strokeWidth="2" fill="none" />
          <text x="20" y="605" fill="#FF8C00" fontSize="12" textAnchor="start" opacity="0.5">
            ALICE
          </text>
          
          {/* LHCb */}
          <circle cx="1150" cy="600" r="15" stroke="#FF8C00" strokeWidth="2" fill="none" />
          <text x="1180" y="605" fill="#FF8C00" fontSize="12" textAnchor="end" opacity="0.5">
            LHCb
          </text>
        </g>

        {/* Technical grid markers */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 600 + Math.cos(angle) * 520;
          const y1 = 600 + Math.sin(angle) * 520;
          const x2 = 600 + Math.cos(angle) * 540;
          const y2 = 600 + Math.sin(angle) * 540;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FF8C00"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF8C00]/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#0053A1]/[0.01] to-transparent" />
    </div>
  );
}
