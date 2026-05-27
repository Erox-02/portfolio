
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [controls, setControls] = useState('hidden');

  useEffect(() => {
    if (isInView) setControls('visible');
  }, [isInView]);

  return { ref, controls, isInView };
};