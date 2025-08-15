import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Picture = () => {
  const container = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null)
  const img2 = useRef<HTMLImageElement>(null)
  const img3 = useRef<HTMLImageElement>(null)
  const img4 = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    gsap.set(text.current,{filter:"blur(5px)"})
    gsap.set([img1.current,img3.current,img4.current],{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    gsap.set(img2.current,{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start:"top bottom",
        end:"+=200%",
        scrub:true,
      }
    })

    tl
    .to(text,{filter:"blur(0px)"})
    .to(img1.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    .to(img2.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    .to([img3.current,img4.current],{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",stagger:0.5})

  },{scope:container})

  return (
    <div ref={container} className="bg-neutral-900 min-h-screen px-8 py-[50vh]">
      <div className="relative">
        <p ref={text} className="text-8xl uppercase text-neutral-200 absolute right-8 top-20">. our journey</p>
        <div className="flex gap-8 items-end">
          <img ref={img1} src="/img/10.webp" alt="bicycle" className="w-1/3 saturate-150" />
          <img ref={img2} src="/img/7.webp" alt="bicycle" className="w-1/2 saturate-150" />
        </div>
        <div className="flex justify-between items-start mt-20">
          <img ref={img3} src="/img/11.webp" alt="bicycle" className="w-1/2 saturate-150" />

          <img ref={img4} src="/img/5.webp" alt="bicycle" className="w-1/6 saturate-150" />
        </div>
      </div>
    </div>
  )
}

export default Picture
