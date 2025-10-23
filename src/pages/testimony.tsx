import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Testimony = () => {
  const container = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null)
  const img2 = useRef<HTMLImageElement>(null)
  const text1 = useRef(null)
  const text2 = useRef(null)

  useGSAP(() => {
    gsap.set([img1.current,img2.current], {clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"})
    gsap.set([text1.current,text2.current], {filter:"blur(5px)"})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub:true,
      }
    })

    tl.to(img1.current, {
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"power2.inOut",
      duration:2,
    })
    .to(img2.current, {
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease:"power2.inOut",
      duration:2,
    })
    .to(text1.current,{
      filter:"blur(0px)",
      ease:"power2.inOut"
    })
    .to(text2.current,{
      filter:"blur(0px)",
      ease:"power2.inOut"
    })

  },{scope:container})

  return (
    <div ref={container} className="bg-neutral-900 h-[120dvh] px-8 py-10 relative">
      <div className="grid grid-cols-2">
        <div className="w-full h-screen">
          <img 
            ref={img1} 
            src="/img/2.webp" 
            alt="bicycle" 
            className="saturate-150" 
            loading="lazy"
            srcSet="/img/2.webp?width=200 200w, 
                    /img/2.webp?width=500 500w, 
                    /img/2.webp?width=1000 1000w,
                    /img/2.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />
          <div className="mt-8">
            <p ref={text1} className="text-2xl uppercase text-neutral-200 font-semibold text-justify">"I've bought several bikes over the years, but nothing compares to the one I got from MX. The quality is top-notch, the ride is smooth, and the staff truly know their stuff. Highly recommended!"
            <span className="block text-xl uppercase text-orange-600 font-bold">james, California</span>
            </p>
          </div>
        </div>
        <div className="w-full place-content-end place-items-end">
          <img 
            ref={img2} 
            src="/img/8.webp" 
            alt="bicycle" 
            className="w-3/4 saturate-150"
            loading="lazy"
            srcSet="/img/8.webp?width=200 200w, 
                    /img/8.webp?width=500 500w, 
                    /img/8.webp?width=1000 1000w,
                    /img/8.webp?width=2000 2000w"
            sizes="(max-width: 768px) 33vw, (max-width: 1080px) 50vw, (max-width: 1366px) 80vw, 100vw"
          />
          <div className="w-3/4 flex flex-col mt-8">
            <p ref={text2} className="text-2xl uppercase text-neutral-200 font-semibold text-justify">"As a competitive cyclist, I need a bike that performs under pressure. The team at helped me choose the perfect model, and it's been a game-changer in my training. Light, responsive, and built to last."
            <span className="block text-xl uppercase text-blue-600 font-bold">Klye, Hamburg</span>
            </p>
          </div>
        </div>
      </div>
      <p className="absolute right-8 top-10 tracking-widest text-neutral-200 font-semibold">. testimony</p>
    </div>
  )
}

export default Testimony
