import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: widthOfDevice, innerHeight: heightOfDevice } = window;
  return {
    widthOfDevice,
    heightOfDevice,
  };
}

export default function useDeviceSizes() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
