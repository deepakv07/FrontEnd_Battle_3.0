'use client';

import { useState, useEffect } from 'react';
import { features } from '@/data/features';
import BentoCard from '@/components/ui/BentoCard';

export default function Features() {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number>(-1);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Initialize state
    setIsMobile(window.innerWidth < 768);

    // 3. The Window Resize Guardian (Transfers Context)
    const handleResize = () => {
      const currentlyMobile = window.innerWidth < 768;
      
      if (currentlyMobile !== isMobile) {
        setIsMobile(currentlyMobile);
        
        if (currentlyMobile) {
          // Desktop -> Mobile: Programmatically open the tracked hover index
          if (activeDesktopIndex !== -1) {
            setActiveMobileIndex(activeDesktopIndex);
          }
        } else {
          // Mobile -> Desktop: Clean up accordion states
          setActiveMobileIndex(-1);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, activeDesktopIndex]);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) setActiveDesktopIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveDesktopIndex(-1);
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveMobileIndex(prev => prev === index ? -1 : index);
    }
  };

  return (
    <section id="features">
      <h2>Core Capabilities</h2>
      <div id="feature-grid">
        {features.map((feature, index) => (
          <BentoCard
            key={index}
            index={index}
            title={feature.title}
            description={feature.description}
            isActive={isMobile ? activeMobileIndex === index : false}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
