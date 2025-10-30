import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Picture = () => {
  const container = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.set(text.current,{filter:"blur(10px)"})

    const tl = gsap.timeline()

    tl.to(text.current,{
      filter:"blur(0px)",
      scrollTrigger:{
        trigger: text.current,
        start:"top +80%",
        scrub:true,
      }
    })
  },{scope:container})

  return (
    <div ref={container} className="bg-neutral-900 h-[200dvh] px-8">
      <div className="relative">
        <p ref={text} className="text-8xl uppercase text-neutral-200 absolute right-8 top-20">. our journey</p>
        <div className="flex gap-8 items-end">
          <img
            src="/img/10.webp"
            alt="bicycle"
            className="w-1/3 saturate-150"
            loading="lazy"
            srcSet="/img/10.webp?width=200 200w,
                    /img/10.webp?width=500 500w,
                    /img/10.webp?width=1000 1000w,
                    /img/10.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />
          <img
            src="/img/7.webp"
            alt="bicycle"
            className="w-1/2 saturate-150"
            loading="lazy"
            srcSet="/img/7.webp?width=200 200w,
                    /img/7.webp?width=500 500w,
                    /img/7.webp?width=1000 1000w,
                    /img/7.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />
        </div>
        <div className="flex justify-between items-start mt-20">
          <img
            src="/img/11.webp"
            alt="bicycle"
            className="w-1/2 saturate-150"
            loading="lazy"
            srcSet="/img/11.webp?width=200 200w,
                    /img/11.webp?width=500 500w,
                    /img/11.webp?width=1000 1000w,
                    /img/11.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />

          <img
            src="/img/5.webp"
            alt="bicycle"
            className="w-1/6 saturate-150"
            loading="lazy"
            srcSet="/img/5.webp?width=200 200w,
                    /img/5.webp?width=500 500w,
                    /img/5.webp?width=1000 1000w,
                    /img/5.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />
        </div>
      </div>
    </div>
  )
}

export default Picture
