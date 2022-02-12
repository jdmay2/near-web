import { useState, useEffect } from "react";

function getWindowDimentions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimentions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimentions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
