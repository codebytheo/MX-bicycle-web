import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BlurOverlay = () => {
  const overlayRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      overlayRef.current,
      { backdropFilter: "blur(0px)",
        opacity:0,
      },
      {
        backdropFilter: "blur(5px)",
        opacity:1,
        ease: "none",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, { scope: overlayRef });

  return (
    <div className="relative z-10">
      <div
        ref={overlayRef}
        className="fixed bottom-0 left-0 w-full h-[100px] pointer-events-none"
        style={{
          backdropFilter: "blur(0px)",
          transition: "backdrop-filter 0.3s",
        }}
      />
    </div>
  );
}

export default BlurOverlay
