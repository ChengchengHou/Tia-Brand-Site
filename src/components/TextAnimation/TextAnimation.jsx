import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const quote = textRef.current;

    if (!quote) return;

    // Split the text into characters
    const splitText = new SplitType(quote, {
      types: "words, chars",
    });

    // GSAP animation
    const anim = gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 80%",
        markers: false,
      },
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.02,
    });

    return () => {
      anim.kill();
      splitText.revert();
    };
  }, []);

  return (
    <p ref={textRef} className={`quote ${className}`}>
      {text}
    </p>
  );
};

export default TextAnimation;
