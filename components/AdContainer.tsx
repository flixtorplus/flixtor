// components/AdContainer.tsx
'use client';

import { useEffect, useState } from 'react';
import { AdsterraAd } from './AdsterraAd';

interface AdContainerProps {
  adKey?: string;
}

export function AdContainer({ adKey = 'e90978e45f95d0a3b472888c14c8f6c6' }: AdContainerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null on the server / initial render to prevent hydration mismatches
  if (!isMounted) return null;

  return (
    <div className="my-8 flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#0F0F1A] to-black rounded-xl border border-[#1F2937] p-3 max-w-[324px]">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-2 text-center">— Sponsored Content —</div>
        <AdsterraAd adKey={adKey} width={300} height={250} />
      </div>
    </div>
  );
}