'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b132b] text-slate-100 select-none pointer-events-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative flex flex-col items-center max-w-lg px-6">
        <div className="w-auto h-20 flex items-center justify-center z-10">
          <Image src="/vedanta-logo.png" alt="Vedanta Oil & Gas | Cairn" width={420} height={90} className="h-16 w-auto object-contain max-w-full drop-shadow-md" priority />
        </div>
        <p className="text-xs font-bold text-emerald-400 tracking-wider uppercase mt-4 text-center whitespace-nowrap z-10 font-sans">Transforming Energy, Empowering India</p>
      </div>
    </div>
  );
}
