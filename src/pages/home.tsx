import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";


const images = [
  "/img/1.webp",
  "/img/2.webp",
  "/img/3.webp",
  "/img/4.webp",
  "/img/5.webp",
  "/img/6.webp",
  "/img/7.webp",
  "/img/8.webp",
  "/img/9.webp",
  "/img/10.webp",
  "/img/11.webp",
];

const Home = () => {
  const container = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const textRef = useRef(null)

  useGSAP(() => {
    const imgs = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    // Make sure all start hidden
    gsap.set(imgs, { autoAlpha: 0, zIndex: 0 }); // all hidden first
    gsap.set(imgs[0], { autoAlpha: 1, zIndex: 1 }); // show first

    const tl = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: "power2.inOut" } });

    imgs.forEach((img, i) => {
      const next = imgs[(i + 1) % imgs.length]; // loop back to first

      tl.to(img, { autoAlpha: 0, zIndex: 0 }, "+=0.5") // hold for 2s then fade out
        .to(next, { autoAlpha: 1, zIndex: 1 }, "<"); // fade in next at same time
    });

    // ScrollTrigger only controls play/pause
    ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.pause(),
      onLeaveBack: () => tl.pause(),
    });

  }, { scope: container });

  return (
    <div ref={container} className="h-screen bg-neutral-900 text-neutral-200 px-8 relative overflow-hidden">
      <p className="font-bold text-2xl leading-none text-right translate-y-20">WE GIVE YOU <span className="font-lobster text-orange-600">MODERN BICYCLE</span> <br/>WITH FUTURISTIC DESIGN.<br/> MAKES YOU <span className="font-lobster text-blue-600">PROFESSIONAL</span></p>
      <p ref={textRef} className="uppercase text-[12rem] text-neutral-200 mix-blend-difference absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30">adventure</p>
      <img src="/img/bicycle.webp" alt="bicycle" loading="lazy" className="w-[80%] absolute -bottom-1/2 z-40" />

      <div className="absolute top-1/3">
        <div
        className="relative w-[250px] h-[300px] overflow-hidden"
        >
          {images.map((src, i) => {
            return (
              <img
                key={i}
                src={src}
                ref={(el) => {imageRefs.current[i] = el}}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover saturate-0 will-change-transform"
                alt={`stack-img-${i}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
