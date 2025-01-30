'use client';

import { useEffect, useState } from 'react';

const NUM_TRAIL_POINTS = 10;

export default function MouseTrail() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-NUM_TRAIL_POINTS);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {trail.map((point, index) => (
        <div
          key={index}
          className="trail absolute bg-blue-500 rounded-full w-4 h-4"
          style={{ left: point.x, top: point.y, animationDelay: `${index * 50}ms` }}
        />
      ))}
      <style jsx>{`
        .trail {
          position: absolute;
          width: 16px;
          height: 16px;
          background-color: red;
          border-radius: 50%;
          opacity: 1;
          animation: fadeOut 0.5s linear forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}
