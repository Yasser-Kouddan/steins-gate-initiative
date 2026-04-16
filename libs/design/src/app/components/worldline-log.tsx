import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "motion/react";

interface DataPoint {
  time: string;
  value: number;
}

export function WorldLineLog() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Initialize with 24 data points (representing hours)
    const initialData: DataPoint[] = Array.from({ length: 24 }, (_, i) => ({
      time: `${23 - i}h`,
      value: 50 + Math.random() * 40,
    })).reverse();
    
    setData(initialData);

    // Update data in real-time
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        const lastValue = prevData[prevData.length - 1]?.value || 70;
        const newValue = Math.max(30, Math.min(100, lastValue + (Math.random() - 0.5) * 15));
        
        newData.push({
          time: "now",
          value: newValue,
        });
        
        return newData;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="mb-4 flex items-center justify-between">
        <h3 
          className="text-[#FF8C00]/60 text-xs md:text-sm tracking-wider uppercase"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          World Line Divergence Log
        </h3>
        <motion.div
          className="w-2 h-2 rounded-full bg-[#FF8C00]"
          animate={{
            opacity: [1, 0.3, 1],
            boxShadow: [
              "0 0 5px rgba(255, 140, 0, 0.8)",
              "0 0 10px rgba(255, 140, 0, 0.4)",
              "0 0 5px rgba(255, 140, 0, 0.8)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      <div 
        className="w-full h-[250px] md:h-[300px] bg-[#0A0A0A] border border-[#FF8C00]/20 p-4 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 140, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 140, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        {/* Scanline effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(transparent 50%, rgba(255, 140, 0, 0.03) 50%)',
            backgroundSize: '100% 4px',
          }}
          animate={{ y: [0, 4] }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
        />
        
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <XAxis 
              dataKey="time" 
              stroke="#FF8C00"
              strokeOpacity={0.3}
              tick={{ fill: '#FF8C00', fontSize: 10, opacity: 0.5 }}
              tickLine={false}
            />
            <YAxis 
              stroke="#FF8C00"
              strokeOpacity={0.3}
              tick={{ fill: '#FF8C00', fontSize: 10, opacity: 0.5 }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #FF8C00',
                borderRadius: '0',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#FF8C00' }}
              itemStyle={{ color: '#FF8C00' }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF8C00"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              filter="url(#glow)"
            />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
