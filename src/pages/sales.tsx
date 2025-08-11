import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Sales = () => {
  const container = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.set(container.current,{scale:0.85})
    gsap.set(textRef.current,{filter:"blur(10px)"})

    const triggerSetting = {
      trigger:container.current,
      start:"100px bottom",
      end:"500px bottom",
      scrub:1,
      toggleActions: "play pause resume pause",
    }

    const tl = gsap.timeline({scrollTrigger:triggerSetting})

    tl
    .to(container.current,{scale:1})
    .to(textRef.current,{
      filter:"blur(0px)",
      ease:"power2.inOut",
    })

  },{scope:container})

  return (
    <div ref={container} className="bg-gradient-to-b from-blue-500 to-blue-600 h-screen px-8 py-10 text-neutral-200 rounded-t-2xl relative">
      <p ref={textRef} className="text-5xl uppercase font-bold w-3/4 leading-snug text-justify"><span className="uppercase text-lg text-neutral-900">what we offer</span> sport bicycles built for speed, durability, and adventure. From lightweight racing bikes to rugged mountain bikes, every model is crafted to give you the best cycling experience.
      </p>
      <p className="absolute bottom-10 right-8 tracking-widest text-neutral-900 font-semibold">. our offer</p>
    </div>
  )
}

export default Sales
