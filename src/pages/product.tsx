import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Product = () => {
  const container = useRef<HTMLDivElement>(null)
  const containerText = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null)
  const img2 = useRef<HTMLImageElement>(null)
  const text = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.set(text.current,{filter:"blur(5px)"})
    gsap.set(img1.current,{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    })
    gsap.set(img2.current,{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    })

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
        <img 
          ref={img1} 
          src="/img/3.webp" 
          alt="bicycle" 
          className="w-1/2 saturate-150"
          loading="lazy"
          srcSet="/img/3.webp?width=200 200w, 
                  /img/3.webp?width=500 500w, 
                  /img/3.webp?width=1000 1000w, 
                  /img/3.webp?width=2000 2000w"
          sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
        />
        <img 
          ref={img2} 
          src="/img/9.webp" 
          alt="bicycle" 
          className="w-1/2 saturate-150"
          loading="lazy"
          srcSet="/img/9.webp?width=200 200w, 
                  /img/9.webp?width=500 500w, 
                  /img/9.webp?width=1000 1000w, 
                  /img/9.webp?width=2000 2000w"
          sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
        />
      </div>
      <div ref={containerText} className="w-2/5 text-5xl uppercase text-neutral-200 absolute left-8 bottom-8">
        <p ref={text} className="relative text-justify">
          We’re more than just a bike shop—we’re a <span className="font-lobster text-neutral-900 lowercase text-6xl">community </span> of cyclists who share the same passion for the <span className="font-lobster text-neutral-900 lowercase text-6xl">open road and thrilling trails.</span>
        </p>
      </div>
      <p className="absolute bottom-2/5 left-8 tracking-widest text-neutral-900 font-semibold">. identity</p>
    </div>
  )
}

export default Product
