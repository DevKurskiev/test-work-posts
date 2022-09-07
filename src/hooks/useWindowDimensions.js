import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isMobile, setIsMobile] = useState();
  const [isTablet, setIsTablet] = useState();
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      setIsMobile(getWindowDimensions().width < 568);
      setIsTablet(getWindowDimensions().width < 990);
      setIsDesktop(getWindowDimensions().width > 991);
    };
    setIsMobile(getWindowDimensions().width < 568);
    setIsTablet(getWindowDimensions().width < 990);
    setIsDesktop(getWindowDimensions().width > 991);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useWindowDimensions;
