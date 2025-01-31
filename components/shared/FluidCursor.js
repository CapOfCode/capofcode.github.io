'use client';
import useFluidCursor from '@/hooks/useFluidCursor';
import { useEffect } from 'react';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);
  return (
    <div className="custom-cursor fixed top-0 left-0 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};
export default FluidCursor;
