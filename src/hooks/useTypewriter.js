import { useState, useEffect } from "react";

/**
 * A hook that simulates a typewriter effect.
 * @param {string[]} strings - Array of strings to cycle through.
 * @param {number} typingSpeed - Speed in ms for typing each character.
 * @param {number} deletingSpeed - Speed in ms for deleting each character.
 * @param {number} pauseTime - Time in ms to pause after typing a full string.
 */
export const useTypewriter = (
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    if (!isDeleting && subIndex === strings[index].length) {
      setIsPaused(true);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    index,
    isDeleting,
    isPaused,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return strings[index].substring(0, subIndex);
};
