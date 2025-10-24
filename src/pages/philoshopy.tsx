import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Philoshopy = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const letters = gsap.utils.toArray<HTMLSpanElement>(container.current!.querySelectorAll("span"))

    gsap.set(letters, { opacity: 0, top: "25px" });
    const tl = gsap.timeline({
      scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: '140%',
          scrub: 1,
          pin:true
    }})

    tl.to(letters, {
      opacity: 1,
      top: 0,
      stagger: 0.05,
    })
    .to(container.current, {duration:4})
  },{scope:container})

  const paragraph1 = '"At MX, we are driven by a simple philosophy: every cyclist deserves a bike that pushes limits. We combine precision engineering, innovative design, and relentless testing to ensure every ride is smoother, faster, and more reliable."'
  const paragraph2 = '"We believe a bicycle is more than just a machine—it’s freedom, health, and adventure. Every bike we offer reflects our passion for cycling and our commitment to helping riders experience the joy of movement, one ride at a time."'

  return (
    <div ref={container} className="h-screen w-screen bg-gradient-to-b from-neutral-200 to-blue-50 px-8 py-10 relative">
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="w-full place-self-end text-justify">
          {
            paragraph1.match(/MX| |"|[^\s"]+/g)?.map((ch,i) => (
              <span key={i} className={`text-3xl xl:text-4xl 3xl:text-5xl relative uppercase font-bold will-change-transform ${ch === '"' ? 'text-blue-600' : ch === 'MX' ? 'text-orange-600' : 'text-neutral-900' }`}>
                {ch === " " ? " " : ch}
              </span>
            ) )
          }
        </div>
        <div className="relative">
          <p className="text-justify">
            {
              paragraph2.match(/MX| |"|[^\s"]+/g)?.map((ch,i) => (
              <span key={i} className={`relative text-2xl xl:text-3xl 3xl:text-4xl uppercase font-bold will-change-transform ${ch === '"' ? 'text-orange-600' : 'text-neutral-900' }`}>
                {ch === " " ? " " : ch}
              </span>
            ) )
            }
          </p>
          <p className="text-6xl font-lobster text-orange-600 absolute bottom-20 right-8">"Ride with passion.<br/> Ride with purpose."</p>
        </div>
      </div>
      <p className="absolute left-8 top-10 tracking-widest text-blue-600 font-semibold">. our philoshopy</p>
    </div>
  )
}

export default Philoshopy
