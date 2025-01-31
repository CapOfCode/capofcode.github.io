'use client'
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
        <div className=''>
    <div id='cursor-test' className={`cursor-test}`}
          style={{
            left: `${position.x - 12}px`, // Adjust for center alignment
            top: `${position.y - 12}px`,  // Adjust for center alignment
          }}>
    </div>

    </div>
  );
};

export default CustomCursor;
