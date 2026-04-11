'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? 'var(--accent-cyan)' : 'var(--accent-cyan)',
          backgroundColor: isPointer ? 'rgba(0, 245, 255, 0.2)' : 'transparent',
        }}
      >
        <div className="cursor-dot" />
      </motion.div>
      <style jsx global>{`
        .custom-cursor {
          position: fixed;
          left: 0;
          top: 0;
          width: 32px;
          height: 32px;
          border: 1px solid var(--accent-cyan);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          mix-blend-mode: screen;
        }
        .cursor-dot {
          width: 4px;
          height: 4px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-cyan);
        }
        @media (max-width: 768px) {
          .custom-cursor { display: none; }
          body { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
