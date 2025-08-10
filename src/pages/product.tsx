import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Product = () => {
  const container = useRef<HTMLDivElement>(null)
  const containerText = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null)
  const img2 = useRef<HTMLImageElement>(null)
<<<<<<< HEAD
  const text = useRef<HTMLParagraphElement>(null)
=======
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const text4 = useRef(null)
>>>>>>> 6f8cdeec6a8c225a3801afc7a766cd7bef884424

  useGSAP(() => {
    gsap.set(text.current,{filter:"blur(5px)"})
    gsap.set(img1.current,{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    })
    gsap.set(img2.current,{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    })
<<<<<<< HEAD
=======
    // gsap.set(text1.current,{top:"-200px"})
    gsap.set(text2.current,{left:"-100%"})
    gsap.set(text3.current,{top:"-100%"})
    gsap.set(text4.current,{bottom:"-100%"})
>>>>>>> 6f8cdeec6a8c225a3801afc7a766cd7bef884424

    const triggerSetting = {
      trigger:container.current,
      start:"100px bottom",
      end:"bottom bottom",
      toggleActions:"play none none none"
    }

    const tl = gsap.timeline({scrollTrigger:triggerSetting})

    const images = [img1.current, img2.current].filter(
      (img): img is HTMLImageElement => img !== null
    );

    images.forEach(target => {
      tl.to(target,{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease:"power2.inOut",
        duration:0.8
      })
    })

    gsap.to(text.current,{
      filter:"blur(0px)",
      ease:"power2.in",
      duration:0.2,
      scrollTrigger:{
        trigger:containerText.current,
        start:"top bottom",
        end:"+300px bottom",
        scrub:1,
      }
    })

  },{scope:container})
  return (
    <div ref={container} className="bg-gradient-to-b from-orange-500 to-orange-600 to-70% min-h-screen relative px-8 py-10">
      <div className="flex gap-2 items-start">
        <img ref={img1} src="/img/3.webp" alt="bicycle" className="w-1/2 saturate-150" />
        <img ref={img2} src="/img/9.webp" alt="bicycle" className="w-1/2 saturate-150" />
      </div>
<<<<<<< HEAD
      <div ref={containerText} className="w-2/5 text-5xl uppercase text-neutral-200 absolute left-8 bottom-8">
        <p ref={text} className="relative text-justify">
          We’re more than just a bike shop—we’re a <span className="font-lobster text-neutral-900 lowercase text-6xl">community </span> of cyclists who share the same passion for the <span className="font-lobster text-neutral-900 lowercase text-6xl">open road and thrilling trails.</span>
        </p>
=======
      <div ref={containerText} className="w-2/5 text-5xl uppercase text-neutral-200 absolute left-8 bottom-8 border">
        <div className="text-justify relative h-[100px] border">
          <p ref={text1} className="absolute">We’re more than just a bike shop—we’re a</p>
        </div>
        <div className="overflow-hidden relative">
          <span ref={text2} className="font-lobster text-neutral-900 lowercase text-6xl">community </span>
          <span>of cyclists who</span>
        </div>
        <div className="text-justify overflow-hidden relative">
          <span ref={text3} className="text-justify">share the same passion for the </span>
          <span ref={text4} className="font-lobster text-neutral-900 lowercase text-6xl">open road and thrilling trails.</span>
        </div> 
>>>>>>> 6f8cdeec6a8c225a3801afc7a766cd7bef884424
      </div>
      <p className="absolute bottom-2/5 left-8 tracking-widest text-neutral-900 font-semibold">. identity</p>
    </div>
  )
}

export default Product
