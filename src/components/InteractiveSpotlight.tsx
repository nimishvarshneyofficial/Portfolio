import React, { useEffect, useState } from 'react';

export const InteractiveSpotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(66, 133, 244, 0.05) 0%, rgba(234, 67, 53, 0.03) 30%, rgba(251, 188, 4, 0.03) 60%, rgba(52, 168, 83, 0.03) 80%, transparent 100%)`,
      }}
    />
  );
};
