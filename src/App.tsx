import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bubble1 from "./assets/bubble1.svg";
import bubble2 from "./assets/bubble2.svg";
import bubble3 from "./assets/bubble3.svg";
import bubble4 from "./assets/bubble4.svg";
import bubble5 from "./assets/bubble5.svg";
import bubble6 from "./assets/bubble6.svg";

const App: React.FC = () => {
  // Create refs for each bubble to target them for animation
  const bubbleRefs = useRef<HTMLDivElement[]>([]);

  // Function to add refs to each bubble dynamically
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !bubbleRefs.current.includes(el)) {
      bubbleRefs.current.push(el);
    }
  };

  // UseEffect to run the GSAP animation
  useEffect(() => {
    // Create a GSAP timeline for sequential animations
    const tl = gsap.timeline({
      defaults: { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" },
    });

    // Animate each bubble in sequence
    bubbleRefs.current.forEach((bubble) => {
      const direction = bubble.classList.contains("left") ? "-100%" : "100%";
      tl.fromTo(
        bubble,
        { x: direction, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.9 } // Each bubble appears with a slight delay
      );
    });
  }, []);

  return (
    
    <div>
      <nav></nav>
      <header className="hero">
        <div id="conversation-container">
          <div className="bubble left" ref={addToRefs}>
            <img src={bubble1} alt="SMS Bubble 1" />
          </div>
          <div className="bubble right" ref={addToRefs}>
            <img src={bubble2} alt="SMS Bubble 2" />
          </div>
          <div className="bubble right" ref={addToRefs}>
            <img src={bubble3} alt="SMS Bubble 3" />
          </div>
          <div className="bubble right" ref={addToRefs}>
            <img src={bubble4} alt="SMS Bubble 4" />
          </div>
          <div className="bubble left" ref={addToRefs}>
            <img src={bubble5} alt="SMS Bubble 5" />
          </div>
          <div className="bubble left" ref={addToRefs}>
            <img src={bubble6} alt="SMS Bubble 6" />
          </div>
        </div>

        <h1 className="header"><strong>Lorem ipsum </strong><i>dolor </i> <strong>sit amet </strong><i>consectetur</i></h1>


      </header>
      </div>
  );
};

export default App;
