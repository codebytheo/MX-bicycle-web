import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Philoshopy = () => {
  const container = useRef<HTMLDivElement>(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)

  useGSAP(() => {
    gsap.set([text1.current,text2.current,text3.current],{
      opacity:0,
      filter:"blur(10px)",
    })

    gsap.to(container.current,{
      scrollTrigger:{
        trigger:container.current,
        pin:true,
        scrub:1,
      }
    })

    const tl = gsap.timeline()
    tl.to(text1.current,{
      filter:"blur(0)",
      opacity:1,
      scrollTrigger:{
        trigger:text1.current,
        start:"top bottom",
        end:"+300px bottom",
        scrub:1,
      }
    })
    .to(text2.current,{
      filter:"blur(0)"
    })
    .to(text3.current,{
      filter:"blur(0)"
    })

  },{scope:container})

  return (
    <div ref={container} className="bg-gradient-to-b from-neutral-200 to-blue-50 h-[300vh] px-8 py-10 relative">
      <div className="h-screen">
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="place-self-end">
            <p ref={text1} className="text-4xl 3xl:text-5xl uppercase font-bold text-neutral-900 text-justify"><span className="text-blue-600">"</span>At <span className="text-orange-600">MX</span>, we are driven by a simple philosophy: every cyclist deserves a bike that pushes limits. We combine precision engineering, innovative design, and relentless testing to ensure every ride is smoother, faster, and more reliable.<span className="text-blue-600">"</span>
            </p>
          </div>
          <div className="relative">
            <p ref={text2} className="text-2xl 3xl:text-4xl uppercase font-bold text-neutral-900 text-justify"><span className="text-orange-600">"</span>We believe a bicycle is more than just a machine—it’s freedom, health, and adventure. Every bike we offer reflects our passion for cycling and our commitment to helping riders experience the joy of movement, one ride at a time.<span className="text-orange-600">"</span>
            </p>
            <p ref={text3} className="text-6xl font-lobster text-orange-600 absolute bottom-20 right-8">"Ride with passion.<br/> Ride with purpose."</p>
          </div>
        </div>
        <p className="absolute left-8 top-10 tracking-widest text-blue-600 font-semibold">. our philoshopy</p>
      </div>
    </div>
  )
}

export default Philoshopy
