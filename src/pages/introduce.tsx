import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Introduce = () => {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.set(["#text","#img1","#img2"],{filter:"blur(5px)"})

    gsap.to(["#text","#img1","#img2"],{
      filter:"blur(0px)",
      ease:"power2.in",
      duration:0.2,
      scrollTrigger:{
        trigger:container.current,
        start:"top bottom",
        end:"+200px bottom",
        scrub:1,
        markers:true,
      }
    })
  },{scope:container})

  return (
    <div ref={container} className="min-h-screen bg-neutral-900 text-neutral-200 px-8 py-10 relative">
      <div className="flex gap-2 items-baseline">
        <img id="img1" src="/img/4.webp" alt="bicycle" className="w-1/3 saturate-150" />
        <img id="img2" src="/img/6.webp" alt="bicycle" className="w-1/3 saturate-150" />
      </div>
      <p id="text" className="w-1/2 text-2xl text-justify absolute right-8 top-10"><span className="uppercase">your trusted destination for high-performance sport bicycles. We are passionate about delivering top-quality bikes designed for speed, endurance, and adventure—perfect for both professional athletes and cycling enthusiasts.</span> <span className="font-lobster text-orange-600">Whether you're conquering mountain trails, racing on the road, or enjoying a weekend ride, we provide bikes that combine cutting-edge technology, durability, and style to elevate your cycling experience.</span>
      </p>
      <p className="absolute bottom-10 right-8 tracking-widest text-blue-600 font-semibold">. storytelling</p>
    </div>
  )
}

export default Introduce
