'use client';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-mask" style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.35s ease-in-out' }}>
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;