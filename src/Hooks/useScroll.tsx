import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const target = document.documentElement;
    setScrollPosition({
      x: target.scrollLeft,
      y: target.scrollTop,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
