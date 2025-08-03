
const Product = () => {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-600 to-70% min-h-screen relative px-8 py-10">
      <div className="flex gap-2 items-start">
        <img src="/img/3.webp" alt="bicycle" className="w-1/2 saturate-150" />
        <img src="/img/9.webp" alt="bicycle" className="w-1/2 saturate-150" />
      </div>
      <p className="w-2/5 text-5xl uppercase text-justify text-neutral-200 absolute left-8 bottom-8">We’re more than just a bike shop—we’re a <span className="font-lobster text-neutral-900 lowercase text-6xl">community</span> of cyclists who share the same passion for the <span className="font-lobster text-neutral-900 lowercase text-6xl">open road and thrilling trails</span>.
      </p>
      <p className="absolute bottom-2/5 left-8 tracking-widest text-neutral-900 font-semibold">. identity</p>
    </div>
  )
}

export default Product
