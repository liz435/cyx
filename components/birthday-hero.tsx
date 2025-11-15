"use client"

import { useEffect, useState } from "react"

export function BirthdayHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/20"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationName: "float",
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
          <span className="block text-foreground">Happy Birthday!</span>
          <span className="block bg-clip-text text-transparent bg-[linear-gradient(135deg,_var(--primary)_0%,_var(--accent)_100%)]">
            Celebrating 26
          </span>
        </h1>

        {/* Birthday candles */}
        <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6 py-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Candle key={i} delay={i * 0.15} index={i} />
          ))}
        </div>

        {/* Birthday info */}
        <div className="space-y-2">
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"祝你在今天的贯蛋比赛勇夺桂冠"}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
        
        @keyframes flicker {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          15% {
            transform: scale(1.08, 0.92) translateY(-2px);
            opacity: 0.95;
          }
          30% {
            transform: scale(0.96, 1.04) translateY(1px);
            opacity: 0.88;
          }
          45% {
            transform: scale(1.05, 0.95) translateY(-1px);
            opacity: 0.92;
          }
          60% {
            transform: scale(0.98, 1.02) translateY(0px);
            opacity: 0.96;
          }
          80% {
            transform: scale(1.03, 0.97) translateY(-1px);
            opacity: 0.9;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: blur(4px);
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            filter: blur(8px);
            opacity: 0.8;
            transform: scale(1.15);
          }
        }
        
        @keyframes candleAppear {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes waxDrip {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(8px) scaleY(1.3);
            opacity: 0.6;
          }
        }
        
        @keyframes wickBurn {
          0%, 100% {
            transform: scaleY(1);
            opacity: 0.7;
          }
          50% {
            transform: scaleY(0.85);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}

function Candle({ delay, index }: { delay: number; index: number }) {
  const colors = [
    "oklch(0.85 0.22 350)", // Light soft pink
    "oklch(0.78 0.25 345)", // Medium rose pink
    "oklch(0.72 0.28 340)", // Deeper rose
    "oklch(0.80 0.20 355)", // Pastel pink
    "oklch(0.75 0.26 338)", // Magenta pink
    "oklch(0.82 0.18 348)", // Pale blush pink
  ]
  
  const candleColor = colors[index % colors.length]
  const flickerDuration = 0.7 + Math.random() * 0.6
  const glowDuration = 1.8 + Math.random() * 0.8
  
  return (
    <div 
      className="flex flex-col items-center opacity-0"
      style={{ 
        animationName: "candleAppear",
        animationDuration: "0.8s",
        animationDelay: `${delay}s`,
        animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        animationFillMode: "forwards",
      }}
    >
      <div className="relative mb-1">
        {/* Outer glow - largest */}
        <div 
          className="absolute inset-[-8px] sm:inset-[-10px] rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, oklch(0.88 0.25 55) 0%, oklch(0.78 0.20 45) 25%, transparent 70%)`,
            animationName: "glow",
            animationDuration: `${glowDuration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            filter: "blur(8px)",
          }}
        />
        
        {/* Middle glow */}
        <div 
          className="absolute inset-[-4px] sm:inset-[-5px] rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, oklch(0.92 0.22 60) 0%, oklch(0.82 0.18 50) 40%, transparent 75%)`,
            animationName: "glow",
            animationDuration: `${glowDuration * 0.8}s`,
            animationDelay: `${delay + 0.1}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            filter: "blur(6px)",
          }}
        />
        
        {/* Main flame */}
        <div 
          className="relative w-4 h-7 sm:w-5 sm:h-8 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
          style={{
            background: "linear-gradient(180deg, oklch(0.98 0.15 75) 0%, oklch(0.95 0.25 70) 20%, oklch(0.88 0.30 55) 50%, oklch(0.78 0.28 40) 80%, oklch(0.68 0.25 30) 100%)",
            animationName: "flicker",
            animationDuration: `${flickerDuration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            boxShadow: "0 0 12px oklch(0.90 0.30 60), 0 0 24px oklch(0.80 0.25 50), inset 0 -2px 4px oklch(0.75 0.28 45)",
          }}
        >
          {/* Inner white-hot core */}
          <div 
            className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-3 sm:w-2.5 sm:h-4 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
            style={{
              background: "radial-gradient(ellipse at center, oklch(0.99 0.08 80) 0%, oklch(0.96 0.15 75) 40%, transparent 80%)",
              animationName: "flicker",
              animationDuration: `${flickerDuration * 0.85}s`,
              animationDelay: `${delay + 0.05}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      </div>
      
      {/* Wick with burn animation */}
      <div 
        className="w-0.5 h-2.5 sm:h-3 rounded-full relative"
        style={{
          background: "linear-gradient(180deg, oklch(0.30 0.02 0) 0%, oklch(0.45 0.03 30) 50%, oklch(0.35 0.02 0) 100%)",
          animationName: "wickBurn",
          animationDuration: "2s",
          animationDelay: `${delay}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />
      
      {/* Candle body */}
      <div 
        className="w-9 h-16 sm:w-11 sm:h-20 md:w-12 md:h-24 rounded-lg shadow-lg relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${candleColor} 0%, color-mix(in oklch, ${candleColor}, black 20%) 100%)`,
          boxShadow: "0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {/* Left shine/highlight */}
        <div className="absolute top-0 left-0 w-2 sm:w-2.5 h-full bg-gradient-to-r from-white/30 via-white/15 to-transparent rounded-l-lg" />
        
        {/* Wax drip effect */}
        <div 
          className="absolute top-0 left-1/3 w-1 h-4 rounded-full opacity-30"
          style={{
            background: `linear-gradient(180deg, transparent 0%, color-mix(in oklch, ${candleColor}, white 30%) 100%)`,
            animationName: "waxDrip",
            animationDuration: "3s",
            animationDelay: `${delay + 0.5}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
        
        {/* Texture detail */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,black_1px,black_2px)]" />
      </div>
      
      {/* Candle base */}
      <div 
        className="w-10 h-2 sm:w-12 sm:h-2.5 md:w-13 md:h-2.5 rounded-full mt-1 shadow-md"
        style={{
          background: `radial-gradient(ellipse at center, color-mix(in oklch, ${candleColor}, white 50%) 0%, color-mix(in oklch, ${candleColor}, black 10%) 60%, color-mix(in oklch, ${candleColor}, black 25%) 100%)`,
          boxShadow: "0 2px 6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      />
    </div>
  )
}
