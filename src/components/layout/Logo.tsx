'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HextaLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or nothing during SSR/initial render
    return (
      <div className="h-14 w-32 relative">
        {/* You can use a skeleton loader here if you want */}
      </div>
    );
  }

  const logoSrc = resolvedTheme === 'dark' 
    ? '/images/hexta-dark.svg' 
    : '/images/hexta-light.svg';

  return (
    <div className="h-44 w-44 relative">
      <Image
        src={logoSrc}
        alt="HextaSphere Logo"
        fill
        className="object-contain transition-opacity duration-300 bg-clip-inherit"
        priority
      />
    </div>
  );
}