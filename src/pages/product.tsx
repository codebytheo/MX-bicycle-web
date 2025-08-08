import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Product = () => {
  const container = useRef<HTMLDivElement>(null)
  const containerText = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null)
  const img2 = useRef<HTMLImageElement>(null)
  const text1 = useRef<HTMLSpanElement>(null)
  const text2 = useRef<HTMLSpanElement>(null)
  const text3 = useRef<HTMLSpanElement>(null)
  const text4 = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    gsap.set(img1.current,{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    })
    gsap.set(img2.current,{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    })
    gsap.set(text1.current,{top:"-100px"})
    gsap.set(text2.current,{left:"-100%"})
    gsap.set(text3.current,{top:"-100%"})
    gsap.set(text4.current,{bottom:"-100%"})

    const triggerSetting = {
      trigger:container.current,
      start:"100px bottom",
      end:"bottom bottom",
      toggleActions:"play none none none"
    }
    const triggerTextSetting = {
      trigger:containerText.current,
      start:"top bottom",
      end:"bottom bottom",
    }

    const tl = gsap.timeline({scrollTrigger:triggerSetting})
    const tlText = gsap.timeline({scrollTrigger:triggerTextSetting})

    tl.to(img1.current,{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"power2.inOut",
      duration:0.8
    })
    .to(img2.current,{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"power2.inOut",
      duration:0.8
    })

    tlText.to(text1.current,{
      top:0,
      ease:"power2.inOut"
    })



  },{scope:container})
  return (
    <div ref={container} className="bg-gradient-to-b from-orange-500 to-orange-600 to-70% min-h-screen relative px-8 py-10">
      <div className="flex gap-2 items-start">
        <img ref={img1} src="/img/3.webp" alt="bicycle" className="w-1/2 saturate-150" />
        <img ref={img2} src="/img/9.webp" alt="bicycle" className="w-1/2 saturate-150" />
      </div>
      <div ref={containerText} className="w-2/5 text-5xl uppercase text-neutral-200 absolute left-8 bottom-8">
        <div className="overflow-hidden relative border"><span ref={text1}>We’re more than just a bike shop—we’re a</span></div>
        <div className="overflow-hidden relative border"><span ref={text2} className="font-lobster text-neutral-900 lowercase text-6xl">community </span><span>of cyclists who</span></div>
        <div className="overflow-hidden relative border"><span ref={text3} className="text-justify">share the same passion for the </span><span ref={text4} className="font-lobster text-neutral-900 lowercase text-6xl">open road and thrilling trails.</span></div> 
      </div>
      <p className="absolute bottom-2/5 left-8 tracking-widest text-neutral-900 font-semibold">. identity</p>
    </div>
  )
}

export default Product
