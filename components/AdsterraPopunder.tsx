// components/AdsterraPopunder.tsx
'use client';

import { useEffect, useRef } from 'react';

const POPUNDER_SRC = 'https://aarems.org/1/d587c23f8007ca65d84c4e30bd3650a5';
const INITIAL_DELAY_MS = 10 * 1000; // 30 seconds grace period
const COOLDOWN_MS = 1 * 60 * 1000;  // 3 minutes cooldown

export default function AdsterraPopunder() {
  const isReadyRef = useRef(false);
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Wait 30 seconds after visitor lands before arming the popunder
    const initialTimer = setTimeout(() => {
      isReadyRef.current = true;
    }, INITIAL_DELAY_MS);

    const handleGlobalClick = () => {
      if (!isReadyRef.current) return;

      // Disarm immediately so subsequent clicks don't re-trigger during cooldown
      isReadyRef.current = false;

      // Remove previous script instance if present
      const existingScript = document.getElementById('adsterra-popunder-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Inject your Adsterra popunder script on click
      const script = document.createElement('script');
      script.id = 'adsterra-popunder-script';
      script.setAttribute('data-cfasync', 'false');
      script.src = `${POPUNDER_SRC}?t=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);

      // 2. Start the 3-minute cooldown before re-arming
      cooldownTimerRef.current = setTimeout(() => {
        isReadyRef.current = true;
      }, COOLDOWN_MS);
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      clearTimeout(initialTimer);
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return null;
}