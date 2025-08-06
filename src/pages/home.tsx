import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    const tl = gsap.timeline({ 
      repeat: -1,
      scrollTrigger: {
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play pause resume pause",
    },
     });

    // Set all images initially
    gsap.set(imageRefs.current, { zIndex: 0 });

    // Animate each image in sequence
    images.forEach((_,i) => {
      const img = imageRefs.current[i];
      if (!img) return;
      
      tl.set(img, { zIndex: 1 });
      tl.to({}, { duration: 0.5 });
      tl.set(img, { zIndex: 0 });
    });

  }, { scope: container });

  return (
    <div ref={container} className="h-screen bg-neutral-900 text-neutral-200 px-8 relative overflow-hidden">
      <p className="font-bold text-2xl leading-none text-right translate-y-20">WE GIVE YOU <span className="font-lobster text-orange-600">MODERN BICYCLE</span> <br/>WITH FUTURISTIC DESIGN.<br/> MAKES YOU <span className="font-lobster text-blue-600">PROFESSIONAL</span></p>
      <p ref={textRef} className="uppercase text-[12rem] text-neutral-200 mix-blend-difference absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30">adventure</p>
      <img src="/img/bicycle.webp" alt="bicycle" className="w-[80%] absolute -bottom-1/2 z-40" />

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
