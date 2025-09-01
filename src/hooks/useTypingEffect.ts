import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (
  text: string | string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleType = () => {
      const currentText = Array.isArray(text) ? text[loopNum % text.length] : text;
      
      if (isDeleting) {
        setDisplayText(prev => currentText.substring(0, prev.length - 1));
      } else {
        setDisplayText(prev => currentText.substring(0, prev.length + 1));
      }

      let typeSpeed = isDeleting ? deleteSpeed : speed;

      if (!isDeleting && displayText === currentText) {
        typeSpeed = pauseDuration;
        setTimeout(() => setIsDeleting(true), 100);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        typeSpeed = 1000; // Longer pause between words
      }

      timeoutRef.current = setTimeout(handleType, typeSpeed);
    };

    timeoutRef.current = setTimeout(handleType, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, loopNum, text, speed, deleteSpeed, pauseDuration]);

  return displayText;
};