
const Picture = () => {
  return (
    <div className="bg-neutral-900 min-h-screen px-8 py-[50vh]">
      <div className="relative">
        <p className="text-8xl uppercase text-neutral-200 absolute right-8 top-20">. our journey</p>
        <div className="flex gap-8 items-end">
          <img src="/img/10.webp" alt="bicycle" className="w-1/3 saturate-150" />
          <img src="/img/7.webp" alt="bicycle" className="w-1/2 saturate-150" />
        </div>
        <div className="flex justify-between items-start mt-20">
          <img src="/img/11.webp" alt="bicycle" className="w-1/2 saturate-150" />

          <img src="/img/5.webp" alt="bicycle" className="w-1/6 saturate-150" />
        </div>
      </div>
    </div>
  )
}

export default Picture
