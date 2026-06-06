import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStack from "./TechStack";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const desktopMediaQuery = window.matchMedia("(min-width: 1025px)");
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    desktopMediaQuery.matches
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(desktopMediaQuery.matches);
    };

    const desktopChangeHandler = () => {
      setIsDesktopView(desktopMediaQuery.matches);
    };

    resizeHandler();
    desktopChangeHandler();
    desktopMediaQuery.addEventListener("change", desktopChangeHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      desktopMediaQuery.removeEventListener("change", desktopChangeHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <TechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
