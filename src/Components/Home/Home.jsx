import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Scrolling from "../Scrolling/Scrolling";
import AboutMe from "../AboutMe/AboutMe";
import JustAni from "../aboutme/JustAni";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    
    <div data-scroll-container ref={scrollRef}
    className=" relative overflow-x-hidden">
      
        <Navbar />
        <Hero />
        <Scrolling />
        <AboutMe />
        <JustAni />
        <Projects />
        <Skills/>
    </div>
  );
};

export default Home;